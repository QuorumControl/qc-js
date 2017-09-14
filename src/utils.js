var Timestamp = require('./qc_pb').google.protobuf.Timestamp;

module.exports.timestampToDate = function (timestamp) {
    var utcMilliseconds = (timestamp.seconds * 1000) + (timestamp.nanos / 1000000);
    return new Date(utcMilliseconds);
};

module.exports.dateToTimestamp = function (dateTime) {
    "use strict";
    var utcMilliseconds = dateTime.getTime();
    var seconds = Math.floor(utcMilliseconds / 1000);
    var nanos = (utcMilliseconds - (seconds * 1000)) * 1000000;
    return Timestamp.create({
        seconds: seconds,
        nanos: nanos
    });
};