/**
 * Created by tbowers on 6/9/17.
 */


const forge = require('./forge');
const pki = forge.pki;
const Buffer = require('buffer').Buffer;

class Pool {
    constructor() {
        this._pool = forge.pki.createCaStore();
    }

    addCert(simpcert) {
        this._pool.addCertificate(simpcert.certificateObject);
    }

    verify(simpcert) {
        console.log("verifying");
        try {
            forge.pki.verifyCertificateChain(this._pool, [simpcert.certificateObject]);
        } catch(e) {
            console.error("Error validating chain: ", e);
            return false;
        }
        return true;
    }
}

class Simpcert {
    constructor(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    toPem() {
        if (!this.certificateObject) {
            throw new Error("Trying to call toPem on an empty certificate")
        }
        return pki.certificateToPem(this.certificateObject);
    }

    generate() {
        var keys = pki.rsa.generateKeyPair(2048);
        var cert = pki.createCertificate();
        cert.publicKey = keys.publicKey;

        cert.serialNumber = '01';
        cert.validity.notBefore = new Date();
        cert.validity.notAfter = notAfter();
        var attrs = [{
            name: 'commonName',
            value: this.commonName
        }, {
            name: 'organizationName',
            value: this.orgName
        }];
        cert.setSubject(attrs);
        cert.setIssuer(attrs);
        var keyUsage = {
            name: 'keyUsage',
            // keyCertSign: true,
            digitalSignature: true,
            keyEncipherment: true
        };
        if (this.isCa) {
            keyUsage.keyCertSign = true;
        }
        cert.setExtensions([{
            name: 'basicConstraints',
            cA: this.isCa
        }, keyUsage, {
            name: 'extKeyUsage',
            serverAuth: true,
            timeStamping: true
        }]);

        this.privateKey = keys.privateKey;
        this.publicKey = keys.publicKey;

        var signer = this.parent ? this.parent.privateKey : this.privateKey;

        cert.sign(signer)
        this.certificateObject = cert;
    }

    sign(dataBuffer) {
        if (!this.privateKey) {
            throw new Error("Error, privateKey cannot be null when signing");
        }

        var binaryStr = String.fromCharCode.apply(null, dataBuffer);

        var hash = forge.md.sha512.create();
        hash.update(binaryStr);
        
        var pss = forge.pss.create({
            md: forge.md.sha512.create(),
            mgf: forge.mgf.mgf1.create(forge.md.sha512.create()),
            saltLength: (this.privateKey.n.bitLength())/8 - 2 - 64 // 64 is digest size of sha512 and this matches golangs auto-salt algorithm
        });

        return new Buffer(this.privateKey.sign(hash, pss), 'binary');
    }

    verifySignature(signatureBuffer, dataBuffer) {
        var pss = forge.pss.create({
            md: forge.md.sha512.create(),
            mgf: forge.mgf.mgf1.create(forge.md.sha512.create()),
            saltLength: (this.publicKey.n.bitLength())/8 - 2 - 64 // 64 is digest size of sha512 and this matches golangs auto-salt algorithm
        });
        var md = forge.md.sha512.create();
        md.update(String.fromCharCode.apply(null, dataBuffer));

        var signature = String.fromCharCode.apply(null, signatureBuffer)

        return this.publicKey.verify(md.digest().getBytes(), signature, pss);
    }

    encryptedPrivateKey(passphrase) {
        return pki.encryptRsaPrivateKey(this.privateKey, passphrase);
    }

    attachEncryptedPrivatekey(pem, passphrase) {
        this.privateKey = pki.decryptRsaPrivateKey(pem, passphrase);

    }

    attachUnencryptedPrivatekey(pem) {
        this.privateKey = pki.privateKeyFromPem(pem);
    }

    unencryptedPrivateKey() {
        return pki.privateKeyToPem(this.privateKey);
    }

    signCSR(csrBytes) {
        var csr = forge.pki.certificationRequestFromPem(csrBytes);
        if (!csr.verify()) {
            throw new Error("invalid CSR");
        }
        if (!this.isCa) {
            throw new Error("trying to sign a CSR with a cert that cannot sign");
        }
        var cert = forge.pki.createCertificate();
        cert.serialNumber = new Buffer(forge.random.getBytesSync(16), 'binary').toString('hex');
        cert.publicKey = csr.publicKey;
        cert.validity.notBefore = new Date();
        cert.validity.notAfter = notAfter();
        cert.setSubject(csr.subject.attributes);

        cert.setIssuer(this.certificateObject.subject.attributes);
        cert.setExtensions([{
            name: 'basicConstraints',
            cA: false
        }, {
            name: 'keyUsage',
            digitalSignature: true,
            keyEncipherment: true,
        }, {
            name: 'extKeyUsage',
            serverAuth: true,
        }]);
        cert.sign(this.privateKey);

        var pem = pki.certificateToPem(cert);
        return Simpcert.fromPem(pem);
    }

    toCSR() {
        var csr = pki.createCertificationRequest();
        csr.publicKey = this.publicKey;
        csr.setSubject(this.certificateObject.subject.attributes);
        csr.setAttributes([{name: "extensionRequest", extensions: this.certificateObject.extensions}]);
        csr.sign(this.privateKey);
        return pki.certificationRequestToPem(csr);
    }
}

function notAfter() {
    "use strict";
    return new Date(new Date().setFullYear(new Date().getFullYear() + 5))
}

Simpcert.hash = function(bytes) {
    var binaryStr = String.fromCharCode.apply(null, bytes);

    var md = forge.md.sha512.create();
    md.update(binaryStr, 'raw');
    return new Buffer(md.digest().bytes(), 'binary');
};

Simpcert.fromPem = function(certString) {
    "use strict";
    var cert = pki.certificateFromPem(certString);
    var simpcert = new Simpcert({
        orgName: cert.subject.getField({name: 'organizationName'}).value,
        commonName: cert.subject.getField({name: 'commonName'}).value,
        isCa: cert.getExtension('basicConstraints').cA
    });
    simpcert.certificateObject = cert;
    simpcert.publicKey = cert.publicKey;
    return simpcert;
};

Simpcert.encodeBytes = function(buf) {
    "use strict";
    return buf.toString('base64')
        .replace(/\+/g, '-') // Convert '+' to '-'
        .replace(/\//g, '_'); // Convert '/' to '_'
};

Simpcert.decodeString = function(base64) {
    "use strict";
    base64
        .replace(/\-/g, '+') // Convert '-' to '+'
        .replace(/\_/g, '/'); // Convert '_' to '/'
    return new Buffer(base64, 'base64');
};

Simpcert.Pool = Pool;

module.exports = Simpcert;
