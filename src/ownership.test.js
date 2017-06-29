const qcpb = require('./qc_pb_with_extra');
const fs = require('fs');
const Identity = require('./identity');
const Ownership = require('./ownership');

var unapprovedBytes = fs.readFileSync("./fixtures/unapproved.protobuf");
// var approvedBytes = fs.readFileSync("./fixtures/approved.protobuf");
// var expectedHashBytes = fs.readFileSync("./fixtures/unapproved_expected_hash.bytes");
// var signableBytes = fs.readFileSync("./fixtures/signable.protobuf");
// var aliceSigningBytes = fs.readFileSync('./fixtures/alice_signing.protobuf');
// var aliceBytes = fs.readFileSync('./fixtures/alice.protobuf');

var alice = Identity.generate("alice", "insaasity");

test('can approve an action request', ()=> {
    "use strict";
    var ar = qcpb.ownershippb.ActionRequest.decode(unapprovedBytes);
    Ownership.approve(ar, alice.signingIdentity());
    expect(ar.approvals.length).toBe(1);
});