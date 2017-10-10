const identity = require("./identity");
const qcpb = require('./qc_pb_with_extra');
const identitypb = qcpb.identitypb;
const fs = require('fs');
const deviceInfo = require('./device');


var unapprovedBytes = fs.readFileSync("./fixtures/unapproved.protobuf");
var alice = identity.generate("alice", "insaasity");

test('Can generate a new identity', () => {
    var id = alice;
    expect(id.name).toBe("alice");
});

test('It encodes without any errors', ()=> {
    "use strict";
    var buffer = identitypb.Identity.encode(alice).finish();
    var decodedMessage = identitypb.Identity.decode(buffer);
    expect(decodedMessage.name).toBe("alice");
    expect(decodedMessage.rootAuthority.toSimpcert().commonName).toBe("alice");
});

test('it can sign an action request', ()=> {
    "use strict";
    var ar = qcpb.ownershippb.ActionRequest.decode(unapprovedBytes);
    var sig = identity.sign(alice.signingIdentity(), ar);
    expect(sig.length).toBe(256);
});

test('can encode to string and decode', ()=> {
    "use strict";
    var encoded = qcpb.buf2hex(identitypb.Identity.encode(alice).finish());
    var buf = new Buffer(encoded, 'hex');
    var decoded = identitypb.Identity.decode(buf);
    expect(decoded.name).toBe("alice");
})

test('it can generate a device without an id', ()=> {
    "use strict";
    var device = identity.generateDevice({
        name: "alice",
        organization: "insaasity",
        deviceName: "myname",
        deviceUUID: "uuid",
        deviceDescription: "description",
    });

    expect(device.certificate.pem).not.toBeNull();
    expect(device.UUID).toBe("uuid");
});

test('can encrypt keys', ()=> {
    expect(alice.certificateAuthority.toSimpcert().encryptedPrivateKey("test")).not.toBeNull();
});

test('it can create a standalone currentDevice', ()=> {
    "use strict";
    var id = identity.generate("bob", "insaasity");
    var currentDevice = deviceInfo.getInfo();
    id.certificateAuthority.pem.privateKey = null;
    id.rootAuthority.pem.privateKey = null;

    var device = identity.currentDeviceForDeviceAdd(id);

    expect(device.certificate.toSimpcert().commonName).toBe(id.name);
    expect(device.UUID).toBe(currentDevice.UUID);
});

test('it can create a uid', ()=> {
    "use strict";
    expect(alice.uid()).toBe("alice-at-org-insaasity");
    expect(identity.uid("alice", "insaasity")).toBe("alice-at-org-insaasity");
});

test('can complete challenges', () => {
    var challenge = identity.newChallenge("alice", "insaasity");
    identity.completeChallenge(challenge, alice.signingIdentity());
    expect(challenge.signature).not.toBeNull();
});
