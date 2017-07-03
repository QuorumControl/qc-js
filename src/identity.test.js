const identity = require("./identity");
const qcpb = require('./qc_pb_with_extra');
const identitypb = qcpb.identitypb;
const fs = require('fs');

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