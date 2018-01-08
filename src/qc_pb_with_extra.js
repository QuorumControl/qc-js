const Simpcert = require('./simpcert');
const Device = require('./device');

const Buffer = require('buffer').Buffer;

var qcpb = require('./qc_pb');
var $util = require("protobufjs/minimal").util;
var forge = require('./forge');
var pki = forge.pki;

qcpb.identitypb.Certificate.prototype.toSimpcert = function() {
    if (this.pem.length > 0) {
        var cert = Simpcert.fromPem((new Buffer(this.pem).toString('utf8'))); // we need this additional buffer because in some envs thi.pem can be a uint8 byte array
        if (typeof this.privateKey === 'string') {
            cert.privateKey = pki.privateKeyFromPem(this.privateKey);
        } else {
            cert.privateKey = this.privateKey;
        }
        return cert;
    } else {
        return new Simpcert();
    }
};

qcpb.identitypb.Certificate.fromSimpcert = function(simpcert) {
    var intermediateBuffer = new Buffer(simpcert.toPem(), 'utf8');
    var pemBuffer = $util.newBuffer(intermediateBuffer.length);
    intermediateBuffer.copy(pemBuffer);
    var cert = qcpb.identitypb.Certificate.create({
        pem: pemBuffer
    });
    cert.privateKey = simpcert.privateKey;
    return cert;
};

qcpb.ownershippb.ActionRequest.prototype.getSignable = function() {
    var signable = new qcpb.ownershippb.ActionRequestSignable;
    var list = ['asset', 'action', 'organization', 'requester',
        'additionalInformation', 'createdAt',
        'notBefore', 'notAfter', 'requesterOrganization',
    ];
    list.forEach((key)=> {
        signable[key] = this[key];
    });
    // This is a hack because if you set this to 0 (default) then it won't match the go implementation
    // There are tests that confirm this.
    if (this.maxUsages) {
        signable['maxUsages'] = this.maxUsages;
    }
    return signable;
};

qcpb.ownershippb.ActionRequest.prototype.hash = function() {
    var signable = this.getSignable();
    var encoded = qcpb.ownershippb.ActionRequestSignable.encode(signable).finish();
    return Simpcert.hash(encoded);
};

qcpb.ownershippb.Approval.prototype.getSignable = function() {
    var signable = new qcpb.ownershippb.ApprovalSignable;
    var list = ['actionRequestHash', 'additionalInformation', 'createdAt'];
    list.forEach((key) => {
        signable[key] = this[key];
    });
    signable.ownerName = this.owner.name;
    signable.ownerOrganization = this.owner.organization;
    return signable;
};

qcpb.ownershippb.Approval.prototype.hash = function() {
    var signable = this.getSignable();
    var encoded = qcpb.ownershippb.ApprovalSignable.encode(signable).finish();
    return Simpcert.hash(encoded);
};

qcpb.identitypb.Identity.prototype.currentDevice = function() {
    "use strict";
    return this.devices[Device.getInfo().UUID];
};

qcpb.identitypb.Identity.prototype.signingIdentity = function() {
    return qcpb.identitypb.SigningIdentity.create({
        name: this.name,
        organization: this.organization,
        rootAuthority: this.rootAuthority,
        certificateAuthority: this.certificateAuthority,
        currentCertificate: this.currentDevice().certificate,
    });
};

qcpb.identitypb.Identity.prototype.owningIdentity = function() {
    return qcpb.identitypb.OwningIdentity.create({
        name: this.name,
        organization: this.organization,
        rootAuthority: this.rootAuthority,
        certificateAuthority: this.certificateAuthority,
    });
};

const uid = function(name, organization) {
    "use strict";
    return name + "-at-org-" + organization;
};

qcpb.identitypb.uid = uid;

qcpb.identitypb.Identity.prototype.uid = function() {
    return uid(this.name, this.organization);
};

qcpb.identitypb.SigningIdentity.prototype.uid = function() {
    return uid(this.name, this.organization);
};

qcpb.identitypb.OwningIdentity.prototype.uid = function() {
    return uid(this.name, this.organization);
};


qcpb.buf2hex = function(buffer) { // buffer is an ArrayBuffer
    return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
};

module.exports = qcpb;