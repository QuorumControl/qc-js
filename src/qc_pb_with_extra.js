const Simpcert = require('./simpcert');
const Device = require('./device');

const Buffer = require('buffer').Buffer;

var qcpb = require('./qc_pb');
var $util = require("protobufjs/minimal").util;

qcpb.identitypb.Certificate.prototype.toSimpcert = function() {
    if (this.pem.length > 0) {
        var cert = Simpcert.fromPem(this.pem.toString("utf-8", 0, this.pem.length - 1));
        cert.privateKey = this.privateKey;
        return cert;
    } else {
        return new Simpcert();
    }
};

qcpb.identitypb.Certificate.fromSimpcert = function(simpcert) {
    var intermediateBuffer = new Buffer(simpcert.toPem(), 'utf8');
    var cert = qcpb.identitypb.Certificate.create({
        pem: $util.newBuffer(intermediateBuffer)
    });
    cert.privateKey = simpcert.privateKey;
    return cert;
};

qcpb.ownershippb.ActionRequest.prototype.getSignable = function() {
    var signable = new qcpb.ownershippb.ActionRequestSignable;
    var list = ['asset', 'action', 'organization', 'requester',
        'additionalInformation', 'createdAt',
        'notBefore', 'notAfter'
    ];
    list.forEach((key)=> {
        signable[key] = this[key];
    });
    return signable;
};

qcpb.ownershippb.ActionRequest.prototype.hash = function() {
    var signable = this.getSignable();
    var encoded = qcpb.ownershippb.ActionRequestSignable.encode(signable).finish();
    return Simpcert.Hash(encoded);
};

qcpb.ownershippb.Approval.prototype.getSignable = function() {
    var signable = new qcpb.ownershippb.ApprovalSignable;
    var list = ['actionRequestHash', 'owner', 'additionalInformation', 'createdAt'];
    list.forEach((key) => {
        signable[key] = this[key];
    });
    return signable;
};

qcpb.ownershippb.Approval.prototype.hash = function() {
    var signable = this.getSignable();
    var encoded = qcpb.ownershippb.ApprovalSignable.encode(signable).finish();
    return Simpcert.Hash(encoded);
};

qcpb.identitypb.Identity.prototype.currentDevice = function() {
    "use strict";
    return this.devices[Device.getInfo().uuid];
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

module.exports = qcpb;