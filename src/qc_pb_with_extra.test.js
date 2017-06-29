const qcpb = require('./qc_pb_with_extra');
const fs = require('fs');
const Simpcert = require('./simpcert');
const Identity = require('./identity');
const Device = require('./device');

var unapprovedBytes = fs.readFileSync("./fixtures/unapproved.protobuf");
var approvedBytes = fs.readFileSync("./fixtures/approved.protobuf");
var expectedHashBytes = fs.readFileSync("./fixtures/unapproved_expected_hash.bytes");
var signableBytes = fs.readFileSync("./fixtures/signable.protobuf");
var aliceSigningBytes = fs.readFileSync('./fixtures/alice_signing.protobuf');
var aliceBytes = fs.readFileSync('./fixtures/alice.protobuf');

var alice = Identity.generate("alice", "insaasity");

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

test('can load an identity', ()=> {
    "use strict";
    var id = qcpb.identitypb.SigningIdentity.decode(aliceSigningBytes);
    expect(id.name).toBe('alice');
    expect(id.rootAuthority.toSimpcert().commonName).toBe('alice');
});

test('can hash an approved action request', ()=> {
    var ar = qcpb.ownershippb.ActionRequest.decode(approvedBytes);
    expect(buf2hex(ar.hash())).toBe(expectedHashBytes.toString('hex'));
});

test('can convert form simpcert and to simpcert for identitypb.Certificate', ()=> {
    "use strict";
    var simpcert = new Simpcert({
        orgName: "insaasity",
        commonName: "alice",
        isCa: false
    });
    simpcert.generate();

    var cert = qcpb.identitypb.Certificate.fromSimpcert(simpcert);
    var converted = cert.toSimpcert();

    expect(converted.commonName).toBe(simpcert.commonName);
});

test('can convert identity to signing identity', ()=> {
    "use strict";
    var id = alice;
    var signing = id.signingIdentity();
    expect(signing.currentCertificate).toBe(id.devices[Device.getInfo().uuid].certificate);
});

test('can get currentDevice from id', ()=> {
    "use strict";
     expect(alice.currentDevice().uuid).toBe(Device.getInfo().uuid);
});

function buf2hex(buffer) { // buffer is an ArrayBuffer
    return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
}