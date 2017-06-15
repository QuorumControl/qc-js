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


const forge = require('node-forge');
const pki = forge.pki;
const crypto = require('crypto-browserify');

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

        if (typeof this.onUpdate == 'function') {
            this.onUpdate();
        }
    }
}

function notAfter() {
    "use strict";
    return new Date(new Date().setFullYear(new Date().getFullYear() + 5))
}

Simpcert.Hash = function(bytes) {
    var hash = crypto.createHash('sha512');
    hash.update(bytes);
    return hash.digest()
};

module.exports = Simpcert;