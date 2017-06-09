
function getInfo() {
    if (typeof Exponent !== 'undefined') {
        return {
            name: Exponent.Constants.deviceId,
            uuid: Exponent.Constants.deviceName,
            description: Exponent.Constants.deviceId,
        }
    } else {
        return {
            name: "unknown javascript device",
            uuid: guid(),
            description: "Unknown javascript device"
        }
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