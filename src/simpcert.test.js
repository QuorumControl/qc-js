const Simpcert = require("./simpcert");
const forge = require('./forge');
const pki = forge.pki;

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
    var data = new Buffer("I am some data");
    var sig = cert.sign(data);
    expect(sig.length).toBe(256);
    expect(cert.verifySignature(sig, data)).toBeTruthy();
});

test('catches invalid signatures', ()=> {
    "use strict";
    var data = new Buffer("I am some data");
    var sig = cert.sign(data);
    expect(sig.length).toBe(256);

    expect(cert.verifySignature(sig, new Buffer("some data that wasn't that"))).not.toBeTruthy();
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

test('can return a valid csr', ()=> {
    "use strict";
    var csrPem = cert.toCSR();
    var csr = pki.certificationRequestFromPem(csrPem);
    expect(csr.verify()).toBeTruthy();
    expect(csr.subject.getField({name: 'commonName'}).value).toBe("alice");
});

test('encode string', ()=> {
    var stdEncoding = "LLZwHUFLVU94sZWz3J15PxoLqgR9ZyrbBXvTdk/p9UR0VNvduT8LHV2ePfzYWpmdj+mjh1Er1NfnkOC2FozZOA==";
    var urlEncoding = "LLZwHUFLVU94sZWz3J15PxoLqgR9ZyrbBXvTdk_p9UR0VNvduT8LHV2ePfzYWpmdj-mjh1Er1NfnkOC2FozZOA==";

    var buffer = new Buffer(stdEncoding, 'base64');

    expect(Simpcert.encodeBytes(buffer)).toBe(urlEncoding);
});

test('decode string', ()=> {
    "use strict";
    var stdEncoding = "LLZwHUFLVU94sZWz3J15PxoLqgR9ZyrbBXvTdk/p9UR0VNvduT8LHV2ePfzYWpmdj+mjh1Er1NfnkOC2FozZOA==";

    var buf = new Buffer(stdEncoding, 'base64');
    var urlEncoding = Simpcert.encodeBytes(buf);

    expect(Simpcert.decodeString(urlEncoding).toString('hex')).toBe(buf.toString('hex'));
});

test('pool verification', ()=> {
    "use strict";
    var name = "bob";
    var orgName = "insaasity";
    var rootAuthority = new Simpcert({
        commonName: name,
        orgName: orgName,
        isCa: true
    });
    rootAuthority.generate();

    var authority = new Simpcert({
        commonName: name,
        orgName: orgName,
        isCa: true,
        parent: rootAuthority
    });
    authority.generate();

    console.log("testing the pool");

    var pool = new Simpcert.Pool();
    expect(pool.verify(authority)).not.toBeTruthy();

    pool.addCert(rootAuthority);
    expect(pool.verify(authority)).toBeTruthy();
});