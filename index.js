try {
   require.resolve("crypto");
} catch(e) {
   require('app-module-path').addPath("./src/shims");
}

exports.Device = require('./src/device');
exports.Identity = require('./src/identity');
exports.Ownership = require('./src/ownership');
exports.qcpb = require('./src/qc_pb_with_extra');
exports.Simpcert = require('./src/simpcert');
