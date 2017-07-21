const qcpb = require('./qc_pb_with_extra');
const device = require('./device');
const Identity = require('./identity');
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
