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
    expect(buf2hex(ar.hash())).toBe(expectedHashBytes.toString('hex'));
});

function buf2hex(buffer) { // buffer is an ArrayBuffer
    return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
}