/**
 * Created by tbowers on 6/9/17.
 */

identitypb = require('./qc_pb_with_extra').identitypb;
Simpcert = require('./simpcert');
deviceInfo = require('./device');

function generateCurrentDevice(id) {
    "use strict";
    var device = deviceInfo.getInfo();
    var deviceCert = new Simpcert({
        commonName: id.name,
        orgName: id.organization,
        parent: id.certificateAuthority.toSimpcert(),
        isCa: false
    });
    deviceCert.generate();
    var now = new Date();
    return identitypb.Device.create({
        name: device.name,
        uuid: device.uuid,
        createdAt: now,
        description: device.description,
        certificate: identitypb.Certificate.fromSimpcert(deviceCert),
    })
}


function generate(name, orgName) {
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
    id.devices[device.uuid] = device;
    return id;
}

module.exports.identitypb = identitypb;
module.exports.generate = generate;