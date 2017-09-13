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
