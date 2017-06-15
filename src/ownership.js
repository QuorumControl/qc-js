
const qcpb = require('./qc_pb_with_extra');
const device = require('./device');
function newApproval(actionRequest, id) {
    var hsh = actionRequest.hash();
    return qcpb.ownershippb.Approval.create({
        owner: id.signingIdentity(),
        actionRequestHash: hsh,
        createdAt: new Date(),
    });
}

module.exports.Approve = function(actionRequest, id) {
    var approval = newApproval(actionRequest, id);
    approval.device = device.getInfo().uuid;

    actionRequest.approvals = actionRequest.approvals.concat([approval]);
    return approval;
};