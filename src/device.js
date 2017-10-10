var savedDeviceInfo;

module.exports.getInfo = function getInfo() {
    if (savedDeviceInfo) {
        return savedDeviceInfo;
    }

    try {
        var expo = require("expo");
    } catch(e) {
        console.log("expo is not defined, using internal guid");
    }

    if (typeof expo !== 'undefined') {
        savedDeviceInfo = {
            name: expo.Constants.deviceName,
            UUID: expo.Constants.deviceId,
            description: expo.Constants.deviceName
        };
    } else {
        savedDeviceInfo = {
            name: "unknown javascript device",
            UUID: guid(),
            description: "Unknown javascript device"
        };
    }
    return savedDeviceInfo;
};

module.exports.setInfo = function setInfo(info) {
    "use strict";
    savedDeviceInfo = info;
};

function guid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}
