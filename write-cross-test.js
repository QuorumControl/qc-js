const qcpb = require('./src/qc_pb_with_extra');
const fs = require('fs');
const Identity = require('./src/identity');
const Ownership = require('./src/ownership');


var unapprovedBytes = fs.readFileSync("./fixtures/unapproved.protobuf");
var approvedBytes = fs.readFileSync("./fixtures/approved.protobuf");
// var expectedHashBytes = fs.readFileSync("./fixtures/unapproved_expected_hash.bytes");
// var signableBytes = fs.readFileSync("./fixtures/signable.protobuf");
// var aliceSigningBytes = fs.readFileSync('./fixtures/alice_signing.protobuf');
var aliceBytes = fs.readFileSync('./fixtures/alice.protobuf');

// var alice = qcpb.identitypb.Identity.decode(aliceBytes);
var bob = Identity.generate("bob", "insaasity");

var ar = qcpb.ownershippb.ActionRequest.decode(unapprovedBytes);
Ownership.approve(ar, bob.signingIdentity());
fs.writeFileSync("cross-tests/approved-ar.protobuf", new Buffer(qcpb.ownershippb.ActionRequest.encode(ar).finish()));

