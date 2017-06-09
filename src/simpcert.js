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


forge = require('node-forge');
pki = forge.pki;


class Simpcert {
    constructor({orgName, commonName, isCa}) {
        this.orgName = orgName;
        this.commonName = commonName;
        this.isCa = isCa;
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
        cert.setExtensions([{
            name: 'basicConstraints',
            cA: this.isCa
        }, {
            name: 'keyUsage',
            // keyCertSign: true,
            digitalSignature: true,
            keyEncipherment: true
        }, {
            name: 'extKeyUsage',
            serverAuth: true,
            timeStamping: true
        }]);
        this.privateKey = keys.privateKey;
        this.publicKey = keys.publicKey;
        this.certificate = cert;
    }

}

function notAfter() {
    "use strict";
    return new Date(new Date().setFullYear(new Date().getFullYear() + 5))
};

module.exports = Simpcert;