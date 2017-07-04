const SignableRequest = require('./signable_request');
const Simpcert = require('./simpcert');
const Buffer = require('buffer').Buffer;


test('Can hash a request', ()=> {
    "use strict";
    var method = 'get';
    var path = '/v1/identities';
    var body = '';

    var signable = new SignableRequest(method, path, body);

    var buf = Buffer.concat([new Buffer(method, 'utf8'), new Buffer(path, 'utf8')], 17);
    expect(signable.hash().equals(Simpcert.hash(buf))).toBe(true);
});