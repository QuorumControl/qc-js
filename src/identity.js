/**
 * Created by tbowers on 6/9/17.
 */

identitypb = require('./qc_pb_with_extra').identitypb;
Simpcert = require('./simpcert');
deviceInfo = require('./device');
utils = require('./utils');

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
