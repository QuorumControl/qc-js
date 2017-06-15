const Simpcert = require('./simpcert');
const ConvertString = require('convert-string').UTF8;

const forge = require('node-forge');
const pki = forge.pki;

var qcpb = require('./qc_pb');
var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
var $root = qcpb;


// Take the methods from the identitypb.Certificate class and make it work like a regular SimpCert
class SimpcertProxy extends Simpcert {
    constructor(props) {
        if (props && props.certificate) {
            var cert = pki.certificateFromPem(props.certificate);
            super({
                orgName: cert.subject.getField({name: 'organizationName'}),
                commonName: cert.subject.getField({name: 'commonName'}),
                isCa: cert.getExtension('basicConstraints').cA
            });
            this.certificateObject = cert;
            this.publicKey = cert.publicKey;
            this.updateBytes();
        } else {
            super(props);
        }
        this.onUpdate = this.updateBytes;
    };

    updateFromBytes() {
        if (this.certificate.length > 0) {
            var certString = this.certificate.toString("utf-8", 0, this.certificate.length - 1);
            var cert = pki.certificateFromPem(certString);
            this.orgName = cert.subject.getField({name: 'organizationName'}).value;
            this.commonName = cert.subject.getField({name: 'commonName'}).value;
            this.isCa = cert.getExtension('basicConstraints').cA;
            this.certificateObject = cert;
        } else {
            console.error("zero length cert");
        }
    }

    updateBytes() {
        this.certificate = ConvertString.stringToBytes(this.toPem());
    }

}

/**
 * Certificate certificate.
 * @type {Uint8Array}
 */
SimpcertProxy.prototype.certificate = $util.newBuffer([]);

/**
 * Creates a new Certificate instance using the specified properties.
 * @param {qcpb.Certificate$Properties=} [properties] Properties to set
 * @returns {qcpb.Certificate} Certificate instance
 */
SimpcertProxy.create = function create(properties) {
    return new SimpcertProxy(properties);
};

/**
 * Encodes the specified Certificate message. Does not implicitly {@link qcpb.Certificate.verify|verify} messages.
 * @param {qcpb.Certificate$Properties} message Certificate message or plain object to encode
 * @param {$protobuf.Writer} [writer] Writer to encode to
 * @returns {$protobuf.Writer} Writer
 */
SimpcertProxy.encode = function encode(message, writer) {
    if (typeof message.toPem == 'function') {
        message = new SimpcertProxy(message);
        message.updateBytes();
    }
    if (!writer)
        writer = $Writer.create();
    if (message.certificate != null && message.hasOwnProperty("certificate")) {
        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.certificate);
    }

    return writer;
};

/**
 * Encodes the specified Certificate message, length delimited. Does not implicitly {@link qcpb.Certificate.verify|verify} messages.
 * @param {qcpb.Certificate$Properties} message Certificate message or plain object to encode
 * @param {$protobuf.Writer} [writer] Writer to encode to
 * @returns {$protobuf.Writer} Writer
 */
SimpcertProxy.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
};

/**
 * Decodes a Certificate message from the specified reader or buffer.
 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
 * @param {number} [length] Message length if known beforehand
 * @returns {qcpb.Certificate} Certificate
 * @throws {Error} If the payload is not a reader or valid buffer
 * @throws {$protobuf.util.ProtocolError} If required fields are missing
 */
SimpcertProxy.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.identitypb.Certificate();
    while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
            case 1:
                var bytes = reader.bytes();
                message.certificate = bytes;
                break;
            default:
                reader.skipType(tag & 7);
                break;
        }
    }
    message.updateFromBytes();
    return message;
};

/**
 * Decodes a Certificate message from the specified reader or buffer, length delimited.
 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
 * @returns {qcpb.Certificate} Certificate
 * @throws {Error} If the payload is not a reader or valid buffer
 * @throws {$protobuf.util.ProtocolError} If required fields are missing
 */
SimpcertProxy.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader))
        reader = $Reader(reader);
    return this.decode(reader, reader.uint32());
};

/**
 * Verifies a Certificate message.
 * @param {Object.<string,*>} message Plain object to verify
 * @returns {?string} `null` if valid, otherwise the reason why it is not
 */
SimpcertProxy.verify = function verify(message) {
    if (typeof message !== "object" || message === null)
        return "object expected";
    if (message.certificate != null && message.hasOwnProperty("certificate"))
        if (!(message.certificate && typeof message.certificate.length === "number" || $util.isString(message.certificate)))
            return "certificate: buffer expected";
    return null;
};

/**
 * Creates a Certificate message from a plain object. Also converts values to their respective internal types.
 * @param {Object.<string,*>} object Plain object
 * @returns {qcpb.Certificate} Certificate
 */
SimpcertProxy.fromObject = function fromObject(object) {
    if (object instanceof $root.identitypb.Certificate)
        return object;
    var message = new $root.identitypb.Certificate();
    if (object.certificate != null)
        if (typeof object.certificate === "string")
            $util.base64.decode(object.certificate, message.certificate = $util.newBuffer($util.base64.length(object.certificate)), 0);
        else if (object.certificate.length)
            message.certificate = object.certificate;
    message.updateFromBytes();
    return message;
};

/**
 * Creates a Certificate message from a plain object. Also converts values to their respective internal types.
 * This is an alias of {@link qcpb.Certificate.fromObject}.
 * @function
 * @param {Object.<string,*>} object Plain object
 * @returns {qcpb.Certificate} Certificate
 */
SimpcertProxy.from = SimpcertProxy.fromObject;

/**
 * Creates a plain object from a Certificate message. Also converts values to other types if specified.
 * @param {qcpb.Certificate} message Certificate
 * @param {$protobuf.ConversionOptions} [options] Conversion options
 * @returns {Object.<string,*>} Plain object
 */
SimpcertProxy.toObject = function toObject(message, options) {
    if (!options)
        options = {};
    var object = {};
    if (options.defaults)
        object.certificate = options.bytes === String ? "" : [];
    if (message.certificate != null && message.hasOwnProperty("certificate"))
        object.certificate = options.bytes === String ? $util.base64.encode(message.certificate, 0, message.certificate.length) : options.bytes === Array ? Array.prototype.slice.call(message.certificate) : message.certificate;
    object.updateFromBytes();
    return object;
};

/**
 * Creates a plain object from this Certificate message. Also converts values to other types if specified.
 * @param {$protobuf.ConversionOptions} [options] Conversion options
 * @returns {Object.<string,*>} Plain object
 */
SimpcertProxy.prototype.toObject = function toObject(options) {
    return this.constructor.toObject(this, options);
};

/**
 * Converts this Certificate to JSON.
 * @returns {Object.<string,*>} JSON object
 */
SimpcertProxy.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

qcpb.identitypb.Certificate = SimpcertProxy;


qcpb.ownershippb.ActionRequest.prototype.getSignable = function() {
    var signable = new qcpb.ownershippb.ActionRequestSignable
    var list = ['asset', 'action', 'organization', 'requester',
        'additionalInformation', 'createdAt',
        'notBefore', 'notAfter'
    ];
    list.forEach((key)=> {
        signable[key] = this[key];
    });
    return signable;
};

qcpb.ownershippb.ActionRequest.prototype.hash = function() {
    var signable = this.getSignable();
    var encoded = qcpb.ownershippb.ActionRequestSignable.encode(signable).finish();
    console.log("signing: ", encoded.toString('utf8'));
    return Simpcert.Hash(encoded.toString('utf8'));
};

function parseHexString(str) {
    var result = [];
    while (str.length >= 8) {
        result.push(parseInt(str.substring(0, 8), 16));

        str = str.substring(8, str.length);
    }

    return result;
}


module.exports = qcpb;