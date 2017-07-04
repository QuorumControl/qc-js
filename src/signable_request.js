
const Buffer = require('buffer').Buffer;
const SimpCert = require('./simpcert');

class SignableRequest {
    constructor(method, path, body) {
        this.method = new Buffer(method, 'utf8');
        this.path = new Buffer(path, 'utf8');
        if (body) {
            this.body = new Buffer(body);
        } else {
            this.body = new Buffer(0);
        }
    }

    hash() {
        var length = this.method.length + this.path.length + this.body.length;
        var allBytes = Buffer.concat([this.method, this.path, this.body], length);
        return SimpCert.hash(allBytes);
    }
}

module.exports = SignableRequest;