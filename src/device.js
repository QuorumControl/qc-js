try {
    const expo = require("expo");
} catch(e) {
    console.log("Error requiring: ", e);
}

var savedDeviceInfo;

function getInfo() {
    if (typeof expo !== 'undefined') {
        return {
            name: expo.Constants.deviceName,
            uuid: expo.Constants.deviceId,
            description: expo.Constants.deviceName
        }
    } else {
        if (!savedDeviceInfo) {
            savedDeviceInfo = {
                name: "unknown javascript device",
                uuid: guid(),
                description: "Unknown javascript device"
            }
        }
        return savedDeviceInfo;
    }
}


function guid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

module.exports.getInfo = getInfo;