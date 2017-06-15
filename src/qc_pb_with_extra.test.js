const qcpb = require('./qc_pb_with_extra');
const fs = require('fs');
const forge = require('node-forge');
const convertstring = require('convert-string').UTF8;

var unapprovedBytes = fs.readFileSync("./fixtures/unapproved.protobuf");
var expectedHashBytes = fs.readFileSync("./fixtures/unapproved_expected_hash.bytes");
var signableBytes = fs.readFileSync("./fixtures/signable.protobuf");

test('can generate same signable as golang', ()=> {
    var ar = qcpb.ownershippb.ActionRequest.decode(unapprovedBytes);
    var signable = ar.getSignable();
    var encoded = qcpb.ownershippb.ActionRequestSignable.encode(signable).finish();
    expect(encoded.toString()).toBe(signableBytes.toString());
});

test('can hash an action request', ()=> {
    var ar = qcpb.ownershippb.ActionRequest.decode(unapprovedBytes);
    console.log(signableBytes.buffer);
    expect(ar.hash().toHex()).toBe(expectedHashBytes.toString('hex'));
});