const identity = require("./identity");

test('Can generate a new identity', () => {
    var id = identity.generate("alice", "insaasity");
    expect(id.name).toBe("alice");
});