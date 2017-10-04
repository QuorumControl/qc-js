/**
 * Created by tbowers on 6/9/17.
 */

const identitypb = require('./qc_pb_with_extra').identitypb;
const Simpcert = require('./simpcert');
const deviceInfo = require('./device');
const utils = require('./utils');
const Challenge = identitypb.Challenge;
const Buffer = require('buffer').Buffer;
const forge = require('./forge');

var currentDeviceForDeviceAdd = module.exports.currentDeviceForDeviceAdd = function (id) {
    "use strict";
    var device = deviceInfo.getInfo();

    return generateDevice({
        name: id.name,
        organization: id.organization,
        deviceName: device.name,
        deviceUUID: device.UUID,
        deviceDescription: device.description,
    });
};

var generateCurrentDevice = module.exports.generateCurrentDevice = function (id) {
    "use strict";
    var device = deviceInfo.getInfo();

    return generateDevice({
        name: id.name,
        organization: id.organization,
        deviceName: device.name,
        deviceUUID: device.UUID,
        deviceDescription: device.description,
        parentCert: id.certificateAuthority.toSimpcert(),
    });
};

var generateDevice = module.exports.generateDevice = function({name, organization, deviceName, deviceUUID, deviceDescription, parentCert}) {
    var deviceCert = new Simpcert({
        commonName: name,
        orgName: organization,
        isCa: false
    });
    if (parentCert) {
        deviceCert.parent = parentCert;
    }
    deviceCert.generate();
    var now = new Date();
    return identitypb.Device.create({
        name: deviceName,
        UUID: deviceUUID,
        createdAt: utils.dateToTimestamp(now),
        description: deviceDescription,
        certificate: identitypb.Certificate.fromSimpcert(deviceCert),
    });
};

module.exports.generate = function(name, orgName) {
    "use strict";
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

    var opts = {
        name: name,
        organization: orgName,
        certificateAuthority: identitypb.Certificate.fromSimpcert(authority),
        rootAuthority: identitypb.Certificate.fromSimpcert(rootAuthority)
    };

    var err = identitypb.Identity.verify({message: opts});
    if (err) {
        throw Error(err);
    }

    var id = identitypb.Identity.create(opts);

    var device = generateCurrentDevice(id);
    id.devices[device.UUID] = device;
    return id;
};

module.exports.sign = function(signingIdentity, objectToSign) {
    "use strict";
    if (typeof objectToSign.hash != 'function') {
        throw new Error("the object your signing must have a hash() method");
    }

    return signingIdentity.currentCertificate.toSimpcert().sign(objectToSign.hash());
};

module.exports.uid = identitypb.uid;

module.exports.completeChallenge = function(challenge, signingIdentity) {
    "use strict";
    if (identitypb.uid(challenge.name, challenge.organization) != signingIdentity.uid()) {
        throw new Error("challenge is not for id " + signingIdentity.uid());
    }

    challenge.signer = signingIdentity;
    challenge.signature = signingIdentity.currentCertificate.toSimpcert().sign(challenge.challenge);
    challenge.completedOn = utils.dateToTimestamp(new Date());
    return challenge;
};

module.exports.newChallenge = function(name, organization) {
    "use strict";
    var randomValue = new Buffer(forge.random.getBytesSync(128), 'binary');
    return new Challenge({
        challenge: randomValue,
        name: name,
        organization: organization,
        sentOn: utils.dateToTimestamp(new Date())
    });
};


