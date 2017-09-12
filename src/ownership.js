const qcpb = require('./qc_pb_with_extra');
const device = require('./device');
const Identity = require('./identity');
const Simpcert = require('./simpcert');

function newApproval(actionRequest, signingIdentity) {
    var hsh = actionRequest.hash();
    return qcpb.ownershippb.Approval.create({
        owner: signingIdentity,
        actionRequestHash: hsh,
        createdAt: new Date(),
    });
}

var signApproval = module.exports.signApproval = function(approval, id) {
    var signature = Identity.sign(id, approval);
    approval.signature = signature;
};

module.exports.approve = function(actionRequest, signingIdentity) {
    var approval = newApproval(actionRequest, signingIdentity);
    approval.device = device.getInfo().UUID;
    signApproval(approval, signingIdentity);
    actionRequest.approvals = actionRequest.approvals.concat([approval]);
    return approval;
};

module.exports.isApprovalValid = function(approval, owner, actionRequest) {
    if (approval.owner.name != owner.name) {
        console.log("owner names did not match");
        return false;
    }

    var requestHash = actionRequest.hash();
    if (!requestHash.equals(approval.actionRequestHash)) {
        console.log("approval hash did not match request hash");
        return false;
    }

    var authority = new Simpcert.Pool();
    authority.addCert(owner.certificateAuthority.toSimpcert());

    if (!authority.verify(approval.owner.currentCertificate.toSimpcert())) {
        console.log("failed to verify the certificate used with the approval");
        return false;
    }

    var approvalHash = approval.hash();
    if (approval.owner.currentCertificate.toSimpcert().verifySignature(approval.signature, approvalHash)) {
        return true;
    } else {
        console.log("signatures did not match");
    }

    return false;
};


//
// func IsApprovalValid(approval *ownershippb.Approval, owner *identitypb.OwningIdentity, request *ownershippb.ActionRequest) bool {
//     // low cost easy check
//     if approval.Owner.Name != owner.Name {
//         jww.DEBUG.Println("approval owner's name did not match owner name")
//         return false
//     }
//
//     requestHash, err := request.Hash()
//     if err != nil {
//         jww.ERROR.Printf("Error generating request hash: %v", err)
//         return false
//     }
//
//     // if the approval isn't for this request hash then false
//     if string(requestHash) != string(approval.ActionRequestHash) {
//         jww.DEBUG.Printf("Error, request hash did not match approval hash")
//         return false
//     }
//
//     // if the certificate used for signing isn't valid with the passed, owner than fail
//     authority := simpcert.NewPool()
//     authority.AddCert(&owner.CertificateAuthority.Pem)
//
//     if approval.Owner.CurrentCertificate.Pem.Verify(authority) != nil {
//         jww.DEBUG.Printf("current certificate did not verify with the authority")
//         return false
//     }
//
//     approvalHash, _ := approval.Hash()
//     // if the the signatures match up then, at this point, we're good!
//     if approval.Owner.CurrentCertificate.Pem.VerifySignature(approval.Signature, approvalHash) == nil {
//         return true
//     } else {
//         jww.DEBUG.Printf("verify signature failed")
//     }
//
//     return false
// }