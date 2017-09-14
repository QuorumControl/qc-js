const qcpb = require('./qc_pb_with_extra');
const fs = require('fs');
const Identity = require('./identity');
const Ownership = require('./ownership');

var unapprovedBytes = fs.readFileSync("./fixtures/unapproved.protobuf");
var approvedBytes = fs.readFileSync("./fixtures/approved.protobuf");
// var expectedHashBytes = fs.readFileSync("./fixtures/unapproved_expected_hash.bytes");
// var signableBytes = fs.readFileSync("./fixtures/signable.protobuf");
// var aliceSigningBytes = fs.readFileSync('./fixtures/alice_signing.protobuf');
var aliceBytes = fs.readFileSync('./fixtures/alice.protobuf');

var alice = qcpb.identitypb.Identity.decode(aliceBytes);
var bob = Identity.generate("bob", "insaasity");

test('can approve an action request', ()=> {
    "use strict";
    var ar = qcpb.ownershippb.ActionRequest.decode(unapprovedBytes);
    Ownership.approve(ar, bob.signingIdentity());
    expect(ar.approvals.length).toBe(1);
    expect(Ownership.isApprovalValid(ar.approvals[0], bob, ar)).toBeTruthy();
});

test('can check for a valid approval', ()=> {
    "use strict";
    var ar = qcpb.ownershippb.ActionRequest.decode(unapprovedBytes);
    Ownership.approve(ar, bob.signingIdentity());
    expect(Ownership.isApprovalValid(ar.approvals[0], bob, ar)).toBeTruthy();

    ar = qcpb.ownershippb.ActionRequest.decode(approvedBytes);
    expect(Ownership.isApprovalValid(ar.approvals[0], alice, ar)).toBeTruthy();
    // but it should not be valid for a different person
    expect(Ownership.isApprovalValid(ar.approvals[0], bob, ar)).not.toBeTruthy();
});