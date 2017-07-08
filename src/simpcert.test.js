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
    var mutableCert = new Simpcert({
        orgName: "insaasity",
        commonName: "alice",
        isCa: false
    });
    mutableCert.generate();

    var privateKey = mutableCert.privateKey;
    var encrypted = mutableCert.encryptedPrivateKey("password");

    mutableCert.privateKey = null;
    mutableCert.attachEncryptedPrivatekey(encrypted, "password");

    // verify that the private key is usable by using it to decrypt from the original public key
    expect(mutableCert.privateKey.decrypt(mutableCert.publicKey.encrypt("test"))).toBe("test");
});

test('unencrypted private key', ()=> {
    "use strict";
    expect(cert.unencryptedPrivateKey()).toContain('-BEGIN RSA PRIVATE KEY-');
});

test('can attach unencrypted private key', ()=> {
    "use strict";
    var mutableCert = new Simpcert({
        orgName: "insaasity",
        commonName: "alice",
        isCa: false
    });
    mutableCert.generate();

    var pem = mutableCert.unencryptedPrivateKey();
    mutableCert.privateKey = null;
    mutableCert.attachUnencryptedPrivatekey(pem);
    expect(typeof mutableCert.privateKey).toBe('object');
});