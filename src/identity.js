/**
 * Created by tbowers on 6/9/17.
 */

identitypb = require('./identity_pb').identitypb;
Simpcert = require('./simpcert');
deviceInfo = require('./device');


function generateCurrentDevice(id) {
    "use strict";
    var device = deviceInfo.getInfo();
    var deviceCert = new Simpcert({
        commonName: id.name,
        orgName: id.organization,
        parent: id.certificateAuthority,
        isCa: false
    })
    var now = new Date();
    return identitypb.Device.create({
        name: device.name,
        uuid: device.uuid,
        createdAt: now,
        description: device.description,
        certificate: deviceCert,
    })
}


function generate(name, orgName) {
    "use strict";
    var rootAuthority = new Simpcert({
        commonName: name,
        orgName: orgName,
        isCa: true
    });
    rootAuthority.generate()

    var authority = new Simpcert({
        commonName: name,
        orgName: orgName,
        isCa: true,
        parent: rootAuthority
    });
    authority.generate()

    var id = identitypb.Identity.create({
        name: name,
        organization: orgName,
        certificateAuthority: authority,
        rootAuthority: rootAuthority
    });

    var device = generateCurrentDevice(id);
    id.devices[device.uuid] = device;
    return id;
}

module.exports.generate = generate;