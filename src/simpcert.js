/**
 * Created by tbowers on 6/9/17.
 */

// type Certificate struct {
//     certificate x509.Certificate
//     PrivateKey  *rsa.PrivateKey
//     PublicKey   *rsa.PublicKey
//     Parent      *Certificate
//     OrgName     string
//     CommonName  string
//     IsCA        bool
//     Filesystem  afero.Fs
// }


const forge = require('./forge');
const pki = forge.pki;
if (typeof Buffer === 'undefined') {
    const Buffer = require('buffer').Buffer;
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

    sign(data) {
        if (!this.privateKey) {
            throw new Error("Error, privateKey cannot be null when signing");
        }

        var hash = forge.md.sha512.create();
        hash.update(data, 'utf8');

        var pss = forge.pss.create({
            md: forge.md.sha512.create(),
            mgf: forge.mgf.mgf1.create(forge.md.sha1.create()),
            saltLength: (this.privateKey.n.bitLength())/8 - 2 - 64 // 64 is digest size of sha512
        });

        return this.privateKey.sign(hash, pss);
    }

}

function notAfter() {
    "use strict";
    return new Date(new Date().setFullYear(new Date().getFullYear() + 5))
}

Simpcert.Hash = function(bytes) {
    var binaryStr = String.fromCharCode.apply(null, bytes)

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

module.exports = Simpcert;