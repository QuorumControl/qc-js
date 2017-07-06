const Simpcert = require("./simpcert");
const forge = require('./forge');

const cert = new Simpcert({
    orgName: "insaasity",
    commonName: "alice",
    isCa: false
});
cert.generate();

test('Can generate a new cert', () => {
   expect(cert.commonName).toBe("alice");
});

test('can convert from pem', ()=> {
    "use strict";

    var pem = cert.toPem();

    var reconstituted = Simpcert.fromPem(pem);

    expect(reconstituted.commonName).toBe(cert.commonName);
    expect(reconstituted.orgName).toBe(cert.orgName);
    expect(reconstituted.isCa).toBe(cert.isCa);
});

test('can sign', ()=> {
    "use strict";
    var data = "I am some data";
    var sig = cert.sign(data);
    expect(sig.length).toBe(256);
});

test('can encrypt and decrypt private key', ()=> {
    "use strict";
    var cert = new Simpcert({
        orgName: "insaasity",
        commonName: "alice",
        isCa: false
    });
    cert.generate();

    var privateKey = cert.privateKey;
    var encrypted = cert.encryptedPrivateKey("password");

    cert.privateKey = null;
    cert.attachEncryptedPrivatekey(encrypted, "password");

    // verify that the private key is usable by using it to decrypt from the original public key
    expect(cert.privateKey.decrypt(cert.publicKey.encrypt("test"))).toBe("test");
});