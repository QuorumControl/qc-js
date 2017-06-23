const identity = require("./identity");
const qcpb = require('./qc_pb_with_extra');
const identitypb = qcpb.identitypb;

test('Can generate a new identity', () => {
    var id = identity.generate("alice", "insaasity");
    expect(id.name).toBe("alice");
});

test('It encodes without any errors', ()=> {
    "use strict";
    var id = identity.generate("alice", "insaasity");
    var buffer = identitypb.Identity.encode(id).finish();
    var decodedMessage = identitypb.Identity.decode(buffer);
    expect(decodedMessage.name).toBe("alice");
    expect(decodedMessage.rootAuthority.toSimpcert().commonName).toBe("alice");
});