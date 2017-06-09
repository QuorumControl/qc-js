/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.identitypb = (function() {

    /**
     * Namespace identitypb.
     * @exports identitypb
     * @namespace
     */
    var identitypb = {};

    identitypb.Identity = (function() {

        /**
         * Properties of an Identity.
         * @typedef identitypb.Identity$Properties
         * @type {Object}
         * @property {string} [name] Identity name.
         * @property {string} [organization] Identity organization.
         * @property {identitypb.Certificate$Properties} [rootAuthority] Identity rootAuthority.
         * @property {identitypb.Certificate$Properties} [certificateAuthority] Identity certificateAuthority.
         * @property {Object.<string,identitypb.Device$Properties>} [devices] Identity devices.
         * @property {google.protobuf.Timestamp$Properties} [createdAt] Identity createdAt.
         */

        /**
         * Constructs a new Identity.
         * @exports identitypb.Identity
         * @constructor
         * @param {identitypb.Identity$Properties=} [properties] Properties to set
         */
        function Identity(properties) {
            this.devices = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Identity name.
         * @type {string}
         */
        Identity.prototype.name = "";

        /**
         * Identity organization.
         * @type {string}
         */
        Identity.prototype.organization = "";

        /**
         * Identity rootAuthority.
         * @type {(identitypb.Certificate$Properties|null)}
         */
        Identity.prototype.rootAuthority = null;

        /**
         * Identity certificateAuthority.
         * @type {(identitypb.Certificate$Properties|null)}
         */
        Identity.prototype.certificateAuthority = null;

        /**
         * Identity devices.
         * @type {Object.<string,identitypb.Device$Properties>}
         */
        Identity.prototype.devices = $util.emptyObject;

        /**
         * Identity createdAt.
         * @type {(google.protobuf.Timestamp$Properties|null)}
         */
        Identity.prototype.createdAt = null;

        /**
         * Creates a new Identity instance using the specified properties.
         * @param {identitypb.Identity$Properties=} [properties] Properties to set
         * @returns {identitypb.Identity} Identity instance
         */
        Identity.create = function create(properties) {
            return new Identity(properties);
        };

        /**
         * Encodes the specified Identity message. Does not implicitly {@link identitypb.Identity.verify|verify} messages.
         * @param {identitypb.Identity$Properties} message Identity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Identity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.organization != null && message.hasOwnProperty("organization"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.organization);
            if (message.rootAuthority != null && message.hasOwnProperty("rootAuthority"))
                $root.identitypb.Certificate.encode(message.rootAuthority, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.certificateAuthority != null && message.hasOwnProperty("certificateAuthority"))
                $root.identitypb.Certificate.encode(message.certificateAuthority, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.devices != null && message.hasOwnProperty("devices"))
                for (var keys = Object.keys(message.devices), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.identitypb.Device.encode(message.devices[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Identity message, length delimited. Does not implicitly {@link identitypb.Identity.verify|verify} messages.
         * @param {identitypb.Identity$Properties} message Identity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Identity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Identity message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {identitypb.Identity} Identity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Identity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.identitypb.Identity(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.organization = reader.string();
                    break;
                case 3:
                    message.rootAuthority = $root.identitypb.Certificate.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.certificateAuthority = $root.identitypb.Certificate.decode(reader, reader.uint32());
                    break;
                case 5:
                    reader.skip().pos++;
                    if (message.devices === $util.emptyObject)
                        message.devices = {};
                    key = reader.string();
                    reader.pos++;
                    message.devices[key] = $root.identitypb.Device.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Identity message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {identitypb.Identity} Identity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Identity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Identity message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        Identity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.organization != null && message.hasOwnProperty("organization"))
                if (!$util.isString(message.organization))
                    return "organization: string expected";
            if (message.rootAuthority != null && message.hasOwnProperty("rootAuthority")) {
                var error = $root.identitypb.Certificate.verify(message.rootAuthority);
                if (error)
                    return "rootAuthority." + error;
            }
            if (message.certificateAuthority != null && message.hasOwnProperty("certificateAuthority")) {
                var error = $root.identitypb.Certificate.verify(message.certificateAuthority);
                if (error)
                    return "certificateAuthority." + error;
            }
            if (message.devices != null && message.hasOwnProperty("devices")) {
                if (!$util.isObject(message.devices))
                    return "devices: object expected";
                var key = Object.keys(message.devices);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.identitypb.Device.verify(message.devices[key[i]]);
                    if (error)
                        return "devices." + error;
                }
            }
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            return null;
        };

        /**
         * Creates an Identity message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {identitypb.Identity} Identity
         */
        Identity.fromObject = function fromObject(object) {
            if (object instanceof $root.identitypb.Identity)
                return object;
            var message = new $root.identitypb.Identity();
            if (object.name != null)
                message.name = String(object.name);
            if (object.organization != null)
                message.organization = String(object.organization);
            if (object.rootAuthority != null) {
                if (typeof object.rootAuthority !== "object")
                    throw TypeError(".identitypb.Identity.rootAuthority: object expected");
                message.rootAuthority = $root.identitypb.Certificate.fromObject(object.rootAuthority);
            }
            if (object.certificateAuthority != null) {
                if (typeof object.certificateAuthority !== "object")
                    throw TypeError(".identitypb.Identity.certificateAuthority: object expected");
                message.certificateAuthority = $root.identitypb.Certificate.fromObject(object.certificateAuthority);
            }
            if (object.devices) {
                if (typeof object.devices !== "object")
                    throw TypeError(".identitypb.Identity.devices: object expected");
                message.devices = {};
                for (var keys = Object.keys(object.devices), i = 0; i < keys.length; ++i) {
                    if (typeof object.devices[keys[i]] !== "object")
                        throw TypeError(".identitypb.Identity.devices: object expected");
                    message.devices[keys[i]] = $root.identitypb.Device.fromObject(object.devices[keys[i]]);
                }
            }
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".identitypb.Identity.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            return message;
        };

        /**
         * Creates an Identity message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link identitypb.Identity.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {identitypb.Identity} Identity
         */
        Identity.from = Identity.fromObject;

        /**
         * Creates a plain object from an Identity message. Also converts values to other types if specified.
         * @param {identitypb.Identity} message Identity
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Identity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.devices = {};
            if (options.defaults) {
                object.name = "";
                object.organization = "";
                object.rootAuthority = null;
                object.certificateAuthority = null;
                object.createdAt = null;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.organization != null && message.hasOwnProperty("organization"))
                object.organization = message.organization;
            if (message.rootAuthority != null && message.hasOwnProperty("rootAuthority"))
                object.rootAuthority = $root.identitypb.Certificate.toObject(message.rootAuthority, options);
            if (message.certificateAuthority != null && message.hasOwnProperty("certificateAuthority"))
                object.certificateAuthority = $root.identitypb.Certificate.toObject(message.certificateAuthority, options);
            var keys2;
            if (message.devices && (keys2 = Object.keys(message.devices)).length) {
                object.devices = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.devices[keys2[j]] = $root.identitypb.Device.toObject(message.devices[keys2[j]], options);
            }
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            return object;
        };

        /**
         * Creates a plain object from this Identity message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Identity.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this Identity to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        Identity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Identity;
    })();

    identitypb.SigningIdentity = (function() {

        /**
         * Properties of a SigningIdentity.
         * @typedef identitypb.SigningIdentity$Properties
         * @type {Object}
         * @property {string} [name] SigningIdentity name.
         * @property {string} [organization] SigningIdentity organization.
         * @property {identitypb.Certificate$Properties} [rootAuthority] SigningIdentity rootAuthority.
         * @property {identitypb.Certificate$Properties} [certificateAuthority] SigningIdentity certificateAuthority.
         * @property {identitypb.Certificate$Properties} [currentCertificate] SigningIdentity currentCertificate.
         */

        /**
         * Constructs a new SigningIdentity.
         * @exports identitypb.SigningIdentity
         * @constructor
         * @param {identitypb.SigningIdentity$Properties=} [properties] Properties to set
         */
        function SigningIdentity(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SigningIdentity name.
         * @type {string}
         */
        SigningIdentity.prototype.name = "";

        /**
         * SigningIdentity organization.
         * @type {string}
         */
        SigningIdentity.prototype.organization = "";

        /**
         * SigningIdentity rootAuthority.
         * @type {(identitypb.Certificate$Properties|null)}
         */
        SigningIdentity.prototype.rootAuthority = null;

        /**
         * SigningIdentity certificateAuthority.
         * @type {(identitypb.Certificate$Properties|null)}
         */
        SigningIdentity.prototype.certificateAuthority = null;

        /**
         * SigningIdentity currentCertificate.
         * @type {(identitypb.Certificate$Properties|null)}
         */
        SigningIdentity.prototype.currentCertificate = null;

        /**
         * Creates a new SigningIdentity instance using the specified properties.
         * @param {identitypb.SigningIdentity$Properties=} [properties] Properties to set
         * @returns {identitypb.SigningIdentity} SigningIdentity instance
         */
        SigningIdentity.create = function create(properties) {
            return new SigningIdentity(properties);
        };

        /**
         * Encodes the specified SigningIdentity message. Does not implicitly {@link identitypb.SigningIdentity.verify|verify} messages.
         * @param {identitypb.SigningIdentity$Properties} message SigningIdentity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SigningIdentity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.organization != null && message.hasOwnProperty("organization"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.organization);
            if (message.rootAuthority != null && message.hasOwnProperty("rootAuthority"))
                $root.identitypb.Certificate.encode(message.rootAuthority, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.certificateAuthority != null && message.hasOwnProperty("certificateAuthority"))
                $root.identitypb.Certificate.encode(message.certificateAuthority, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.currentCertificate != null && message.hasOwnProperty("currentCertificate"))
                $root.identitypb.Certificate.encode(message.currentCertificate, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SigningIdentity message, length delimited. Does not implicitly {@link identitypb.SigningIdentity.verify|verify} messages.
         * @param {identitypb.SigningIdentity$Properties} message SigningIdentity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SigningIdentity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SigningIdentity message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {identitypb.SigningIdentity} SigningIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SigningIdentity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.identitypb.SigningIdentity();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.organization = reader.string();
                    break;
                case 3:
                    message.rootAuthority = $root.identitypb.Certificate.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.certificateAuthority = $root.identitypb.Certificate.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.currentCertificate = $root.identitypb.Certificate.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SigningIdentity message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {identitypb.SigningIdentity} SigningIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SigningIdentity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SigningIdentity message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        SigningIdentity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.organization != null && message.hasOwnProperty("organization"))
                if (!$util.isString(message.organization))
                    return "organization: string expected";
            if (message.rootAuthority != null && message.hasOwnProperty("rootAuthority")) {
                var error = $root.identitypb.Certificate.verify(message.rootAuthority);
                if (error)
                    return "rootAuthority." + error;
            }
            if (message.certificateAuthority != null && message.hasOwnProperty("certificateAuthority")) {
                var error = $root.identitypb.Certificate.verify(message.certificateAuthority);
                if (error)
                    return "certificateAuthority." + error;
            }
            if (message.currentCertificate != null && message.hasOwnProperty("currentCertificate")) {
                var error = $root.identitypb.Certificate.verify(message.currentCertificate);
                if (error)
                    return "currentCertificate." + error;
            }
            return null;
        };

        /**
         * Creates a SigningIdentity message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {identitypb.SigningIdentity} SigningIdentity
         */
        SigningIdentity.fromObject = function fromObject(object) {
            if (object instanceof $root.identitypb.SigningIdentity)
                return object;
            var message = new $root.identitypb.SigningIdentity();
            if (object.name != null)
                message.name = String(object.name);
            if (object.organization != null)
                message.organization = String(object.organization);
            if (object.rootAuthority != null) {
                if (typeof object.rootAuthority !== "object")
                    throw TypeError(".identitypb.SigningIdentity.rootAuthority: object expected");
                message.rootAuthority = $root.identitypb.Certificate.fromObject(object.rootAuthority);
            }
            if (object.certificateAuthority != null) {
                if (typeof object.certificateAuthority !== "object")
                    throw TypeError(".identitypb.SigningIdentity.certificateAuthority: object expected");
                message.certificateAuthority = $root.identitypb.Certificate.fromObject(object.certificateAuthority);
            }
            if (object.currentCertificate != null) {
                if (typeof object.currentCertificate !== "object")
                    throw TypeError(".identitypb.SigningIdentity.currentCertificate: object expected");
                message.currentCertificate = $root.identitypb.Certificate.fromObject(object.currentCertificate);
            }
            return message;
        };

        /**
         * Creates a SigningIdentity message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link identitypb.SigningIdentity.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {identitypb.SigningIdentity} SigningIdentity
         */
        SigningIdentity.from = SigningIdentity.fromObject;

        /**
         * Creates a plain object from a SigningIdentity message. Also converts values to other types if specified.
         * @param {identitypb.SigningIdentity} message SigningIdentity
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SigningIdentity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.organization = "";
                object.rootAuthority = null;
                object.certificateAuthority = null;
                object.currentCertificate = null;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.organization != null && message.hasOwnProperty("organization"))
                object.organization = message.organization;
            if (message.rootAuthority != null && message.hasOwnProperty("rootAuthority"))
                object.rootAuthority = $root.identitypb.Certificate.toObject(message.rootAuthority, options);
            if (message.certificateAuthority != null && message.hasOwnProperty("certificateAuthority"))
                object.certificateAuthority = $root.identitypb.Certificate.toObject(message.certificateAuthority, options);
            if (message.currentCertificate != null && message.hasOwnProperty("currentCertificate"))
                object.currentCertificate = $root.identitypb.Certificate.toObject(message.currentCertificate, options);
            return object;
        };

        /**
         * Creates a plain object from this SigningIdentity message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SigningIdentity.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this SigningIdentity to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        SigningIdentity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SigningIdentity;
    })();

    identitypb.OwningIdentity = (function() {

        /**
         * Properties of an OwningIdentity.
         * @typedef identitypb.OwningIdentity$Properties
         * @type {Object}
         * @property {string} [name] OwningIdentity name.
         * @property {string} [organization] OwningIdentity organization.
         * @property {identitypb.Certificate$Properties} [rootAuthority] OwningIdentity rootAuthority.
         * @property {identitypb.Certificate$Properties} [certificateAuthority] OwningIdentity certificateAuthority.
         * @property {boolean} [isRole] OwningIdentity isRole.
         */

        /**
         * Constructs a new OwningIdentity.
         * @exports identitypb.OwningIdentity
         * @constructor
         * @param {identitypb.OwningIdentity$Properties=} [properties] Properties to set
         */
        function OwningIdentity(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OwningIdentity name.
         * @type {string}
         */
        OwningIdentity.prototype.name = "";

        /**
         * OwningIdentity organization.
         * @type {string}
         */
        OwningIdentity.prototype.organization = "";

        /**
         * OwningIdentity rootAuthority.
         * @type {(identitypb.Certificate$Properties|null)}
         */
        OwningIdentity.prototype.rootAuthority = null;

        /**
         * OwningIdentity certificateAuthority.
         * @type {(identitypb.Certificate$Properties|null)}
         */
        OwningIdentity.prototype.certificateAuthority = null;

        /**
         * OwningIdentity isRole.
         * @type {boolean}
         */
        OwningIdentity.prototype.isRole = false;

        /**
         * Creates a new OwningIdentity instance using the specified properties.
         * @param {identitypb.OwningIdentity$Properties=} [properties] Properties to set
         * @returns {identitypb.OwningIdentity} OwningIdentity instance
         */
        OwningIdentity.create = function create(properties) {
            return new OwningIdentity(properties);
        };

        /**
         * Encodes the specified OwningIdentity message. Does not implicitly {@link identitypb.OwningIdentity.verify|verify} messages.
         * @param {identitypb.OwningIdentity$Properties} message OwningIdentity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OwningIdentity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.organization != null && message.hasOwnProperty("organization"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.organization);
            if (message.rootAuthority != null && message.hasOwnProperty("rootAuthority"))
                $root.identitypb.Certificate.encode(message.rootAuthority, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.certificateAuthority != null && message.hasOwnProperty("certificateAuthority"))
                $root.identitypb.Certificate.encode(message.certificateAuthority, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.isRole != null && message.hasOwnProperty("isRole"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isRole);
            return writer;
        };

        /**
         * Encodes the specified OwningIdentity message, length delimited. Does not implicitly {@link identitypb.OwningIdentity.verify|verify} messages.
         * @param {identitypb.OwningIdentity$Properties} message OwningIdentity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OwningIdentity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OwningIdentity message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {identitypb.OwningIdentity} OwningIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OwningIdentity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.identitypb.OwningIdentity();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.organization = reader.string();
                    break;
                case 3:
                    message.rootAuthority = $root.identitypb.Certificate.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.certificateAuthority = $root.identitypb.Certificate.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.isRole = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OwningIdentity message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {identitypb.OwningIdentity} OwningIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OwningIdentity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OwningIdentity message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        OwningIdentity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.organization != null && message.hasOwnProperty("organization"))
                if (!$util.isString(message.organization))
                    return "organization: string expected";
            if (message.rootAuthority != null && message.hasOwnProperty("rootAuthority")) {
                var error = $root.identitypb.Certificate.verify(message.rootAuthority);
                if (error)
                    return "rootAuthority." + error;
            }
            if (message.certificateAuthority != null && message.hasOwnProperty("certificateAuthority")) {
                var error = $root.identitypb.Certificate.verify(message.certificateAuthority);
                if (error)
                    return "certificateAuthority." + error;
            }
            if (message.isRole != null && message.hasOwnProperty("isRole"))
                if (typeof message.isRole !== "boolean")
                    return "isRole: boolean expected";
            return null;
        };

        /**
         * Creates an OwningIdentity message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {identitypb.OwningIdentity} OwningIdentity
         */
        OwningIdentity.fromObject = function fromObject(object) {
            if (object instanceof $root.identitypb.OwningIdentity)
                return object;
            var message = new $root.identitypb.OwningIdentity();
            if (object.name != null)
                message.name = String(object.name);
            if (object.organization != null)
                message.organization = String(object.organization);
            if (object.rootAuthority != null) {
                if (typeof object.rootAuthority !== "object")
                    throw TypeError(".identitypb.OwningIdentity.rootAuthority: object expected");
                message.rootAuthority = $root.identitypb.Certificate.fromObject(object.rootAuthority);
            }
            if (object.certificateAuthority != null) {
                if (typeof object.certificateAuthority !== "object")
                    throw TypeError(".identitypb.OwningIdentity.certificateAuthority: object expected");
                message.certificateAuthority = $root.identitypb.Certificate.fromObject(object.certificateAuthority);
            }
            if (object.isRole != null)
                message.isRole = Boolean(object.isRole);
            return message;
        };

        /**
         * Creates an OwningIdentity message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link identitypb.OwningIdentity.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {identitypb.OwningIdentity} OwningIdentity
         */
        OwningIdentity.from = OwningIdentity.fromObject;

        /**
         * Creates a plain object from an OwningIdentity message. Also converts values to other types if specified.
         * @param {identitypb.OwningIdentity} message OwningIdentity
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OwningIdentity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.organization = "";
                object.rootAuthority = null;
                object.certificateAuthority = null;
                object.isRole = false;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.organization != null && message.hasOwnProperty("organization"))
                object.organization = message.organization;
            if (message.rootAuthority != null && message.hasOwnProperty("rootAuthority"))
                object.rootAuthority = $root.identitypb.Certificate.toObject(message.rootAuthority, options);
            if (message.certificateAuthority != null && message.hasOwnProperty("certificateAuthority"))
                object.certificateAuthority = $root.identitypb.Certificate.toObject(message.certificateAuthority, options);
            if (message.isRole != null && message.hasOwnProperty("isRole"))
                object.isRole = message.isRole;
            return object;
        };

        /**
         * Creates a plain object from this OwningIdentity message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OwningIdentity.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this OwningIdentity to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        OwningIdentity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OwningIdentity;
    })();

    identitypb.Device = (function() {

        /**
         * Properties of a Device.
         * @typedef identitypb.Device$Properties
         * @type {Object}
         * @property {string} [name] Device name.
         * @property {string} [UUID] Device UUID.
         * @property {identitypb.Certificate$Properties} [certificate] Device certificate.
         * @property {google.protobuf.Timestamp$Properties} [createdAt] Device createdAt.
         * @property {string} [description] Device description.
         */

        /**
         * Constructs a new Device.
         * @exports identitypb.Device
         * @constructor
         * @param {identitypb.Device$Properties=} [properties] Properties to set
         */
        function Device(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Device name.
         * @type {string}
         */
        Device.prototype.name = "";

        /**
         * Device UUID.
         * @type {string}
         */
        Device.prototype.UUID = "";

        /**
         * Device certificate.
         * @type {(identitypb.Certificate$Properties|null)}
         */
        Device.prototype.certificate = null;

        /**
         * Device createdAt.
         * @type {(google.protobuf.Timestamp$Properties|null)}
         */
        Device.prototype.createdAt = null;

        /**
         * Device description.
         * @type {string}
         */
        Device.prototype.description = "";

        /**
         * Creates a new Device instance using the specified properties.
         * @param {identitypb.Device$Properties=} [properties] Properties to set
         * @returns {identitypb.Device} Device instance
         */
        Device.create = function create(properties) {
            return new Device(properties);
        };

        /**
         * Encodes the specified Device message. Does not implicitly {@link identitypb.Device.verify|verify} messages.
         * @param {identitypb.Device$Properties} message Device message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Device.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.UUID != null && message.hasOwnProperty("UUID"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.UUID);
            if (message.certificate != null && message.hasOwnProperty("certificate"))
                $root.identitypb.Certificate.encode(message.certificate, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.description != null && message.hasOwnProperty("description"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.description);
            return writer;
        };

        /**
         * Encodes the specified Device message, length delimited. Does not implicitly {@link identitypb.Device.verify|verify} messages.
         * @param {identitypb.Device$Properties} message Device message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Device.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Device message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {identitypb.Device} Device
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Device.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.identitypb.Device();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.UUID = reader.string();
                    break;
                case 3:
                    message.certificate = $root.identitypb.Certificate.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Device message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {identitypb.Device} Device
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Device.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Device message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        Device.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.UUID != null && message.hasOwnProperty("UUID"))
                if (!$util.isString(message.UUID))
                    return "UUID: string expected";
            if (message.certificate != null && message.hasOwnProperty("certificate")) {
                var error = $root.identitypb.Certificate.verify(message.certificate);
                if (error)
                    return "certificate." + error;
            }
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            return null;
        };

        /**
         * Creates a Device message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {identitypb.Device} Device
         */
        Device.fromObject = function fromObject(object) {
            if (object instanceof $root.identitypb.Device)
                return object;
            var message = new $root.identitypb.Device();
            if (object.name != null)
                message.name = String(object.name);
            if (object.UUID != null)
                message.UUID = String(object.UUID);
            if (object.certificate != null) {
                if (typeof object.certificate !== "object")
                    throw TypeError(".identitypb.Device.certificate: object expected");
                message.certificate = $root.identitypb.Certificate.fromObject(object.certificate);
            }
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".identitypb.Device.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.description != null)
                message.description = String(object.description);
            return message;
        };

        /**
         * Creates a Device message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link identitypb.Device.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {identitypb.Device} Device
         */
        Device.from = Device.fromObject;

        /**
         * Creates a plain object from a Device message. Also converts values to other types if specified.
         * @param {identitypb.Device} message Device
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Device.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.UUID = "";
                object.certificate = null;
                object.createdAt = null;
                object.description = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.UUID != null && message.hasOwnProperty("UUID"))
                object.UUID = message.UUID;
            if (message.certificate != null && message.hasOwnProperty("certificate"))
                object.certificate = $root.identitypb.Certificate.toObject(message.certificate, options);
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            return object;
        };

        /**
         * Creates a plain object from this Device message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Device.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this Device to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        Device.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Device;
    })();

    identitypb.Certificate = (function() {

        /**
         * Properties of a Certificate.
         * @typedef identitypb.Certificate$Properties
         * @type {Object}
         * @property {Uint8Array} [certificate] Certificate certificate.
         */

        /**
         * Constructs a new Certificate.
         * @exports identitypb.Certificate
         * @constructor
         * @param {identitypb.Certificate$Properties=} [properties] Properties to set
         */
        function Certificate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Certificate certificate.
         * @type {Uint8Array}
         */
        Certificate.prototype.certificate = $util.newBuffer([]);

        /**
         * Creates a new Certificate instance using the specified properties.
         * @param {identitypb.Certificate$Properties=} [properties] Properties to set
         * @returns {identitypb.Certificate} Certificate instance
         */
        Certificate.create = function create(properties) {
            return new Certificate(properties);
        };

        /**
         * Encodes the specified Certificate message. Does not implicitly {@link identitypb.Certificate.verify|verify} messages.
         * @param {identitypb.Certificate$Properties} message Certificate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Certificate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.certificate != null && message.hasOwnProperty("certificate"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.certificate);
            return writer;
        };

        /**
         * Encodes the specified Certificate message, length delimited. Does not implicitly {@link identitypb.Certificate.verify|verify} messages.
         * @param {identitypb.Certificate$Properties} message Certificate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Certificate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Certificate message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {identitypb.Certificate} Certificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Certificate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.identitypb.Certificate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.certificate = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Certificate message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {identitypb.Certificate} Certificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Certificate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Certificate message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        Certificate.verify = function verify(message) {
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
         * @returns {identitypb.Certificate} Certificate
         */
        Certificate.fromObject = function fromObject(object) {
            if (object instanceof $root.identitypb.Certificate)
                return object;
            var message = new $root.identitypb.Certificate();
            if (object.certificate != null)
                if (typeof object.certificate === "string")
                    $util.base64.decode(object.certificate, message.certificate = $util.newBuffer($util.base64.length(object.certificate)), 0);
                else if (object.certificate.length)
                    message.certificate = object.certificate;
            return message;
        };

        /**
         * Creates a Certificate message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link identitypb.Certificate.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {identitypb.Certificate} Certificate
         */
        Certificate.from = Certificate.fromObject;

        /**
         * Creates a plain object from a Certificate message. Also converts values to other types if specified.
         * @param {identitypb.Certificate} message Certificate
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Certificate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.certificate = options.bytes === String ? "" : [];
            if (message.certificate != null && message.hasOwnProperty("certificate"))
                object.certificate = options.bytes === String ? $util.base64.encode(message.certificate, 0, message.certificate.length) : options.bytes === Array ? Array.prototype.slice.call(message.certificate) : message.certificate;
            return object;
        };

        /**
         * Creates a plain object from this Certificate message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Certificate.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this Certificate to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        Certificate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Certificate;
    })();

    return identitypb;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @exports google.protobuf
         * @namespace
         */
        var protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @typedef google.protobuf.Timestamp$Properties
             * @type {Object}
             * @property {number|Long} [seconds] Timestamp seconds.
             * @property {number} [nanos] Timestamp nanos.
             */

            /**
             * Constructs a new Timestamp.
             * @exports google.protobuf.Timestamp
             * @constructor
             * @param {google.protobuf.Timestamp$Properties=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @type {number|Long}
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @type {number}
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param {google.protobuf.Timestamp$Properties=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param {google.protobuf.Timestamp$Properties} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param {google.protobuf.Timestamp$Properties} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                var message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.Timestamp.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.from = Timestamp.fromObject;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Creates a plain object from this Timestamp message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this Timestamp to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        protobuf.FileDescriptorSet = (function() {

            /**
             * Properties of a FileDescriptorSet.
             * @typedef google.protobuf.FileDescriptorSet$Properties
             * @type {Object}
             * @property {Array.<google.protobuf.FileDescriptorProto$Properties>} [file] FileDescriptorSet file.
             */

            /**
             * Constructs a new FileDescriptorSet.
             * @exports google.protobuf.FileDescriptorSet
             * @constructor
             * @param {google.protobuf.FileDescriptorSet$Properties=} [properties] Properties to set
             */
            function FileDescriptorSet(properties) {
                this.file = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileDescriptorSet file.
             * @type {Array.<google.protobuf.FileDescriptorProto$Properties>}
             */
            FileDescriptorSet.prototype.file = $util.emptyArray;

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param {google.protobuf.FileDescriptorSet$Properties=} [properties] Properties to set
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet instance
             */
            FileDescriptorSet.create = function create(properties) {
                return new FileDescriptorSet(properties);
            };

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param {google.protobuf.FileDescriptorSet$Properties} message FileDescriptorSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorSet.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.file != null && message.file.length)
                    for (var i = 0; i < message.file.length; ++i)
                        $root.google.protobuf.FileDescriptorProto.encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param {google.protobuf.FileDescriptorSet$Properties} message FileDescriptorSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorSet.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorSet.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorSet();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.file && message.file.length))
                            message.file = [];
                        message.file.push($root.google.protobuf.FileDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorSet.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileDescriptorSet message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            FileDescriptorSet.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.file != null && message.hasOwnProperty("file")) {
                    if (!Array.isArray(message.file))
                        return "file: array expected";
                    for (var i = 0; i < message.file.length; ++i) {
                        var error = $root.google.protobuf.FileDescriptorProto.verify(message.file[i]);
                        if (error)
                            return "file." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             */
            FileDescriptorSet.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileDescriptorSet)
                    return object;
                var message = new $root.google.protobuf.FileDescriptorSet();
                if (object.file) {
                    if (!Array.isArray(object.file))
                        throw TypeError(".google.protobuf.FileDescriptorSet.file: array expected");
                    message.file = [];
                    for (var i = 0; i < object.file.length; ++i) {
                        if (typeof object.file[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorSet.file: object expected");
                        message.file[i] = $root.google.protobuf.FileDescriptorProto.fromObject(object.file[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.FileDescriptorSet.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             */
            FileDescriptorSet.from = FileDescriptorSet.fromObject;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param {google.protobuf.FileDescriptorSet} message FileDescriptorSet
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorSet.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.file = [];
                if (message.file && message.file.length) {
                    object.file = [];
                    for (var j = 0; j < message.file.length; ++j)
                        object.file[j] = $root.google.protobuf.FileDescriptorProto.toObject(message.file[j], options);
                }
                return object;
            };

            /**
             * Creates a plain object from this FileDescriptorSet message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorSet.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            FileDescriptorSet.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FileDescriptorSet;
        })();

        protobuf.FileDescriptorProto = (function() {

            /**
             * Properties of a FileDescriptorProto.
             * @typedef google.protobuf.FileDescriptorProto$Properties
             * @type {Object}
             * @property {string} [name] FileDescriptorProto name.
             * @property {string} ["package"] FileDescriptorProto package.
             * @property {Array.<string>} [dependency] FileDescriptorProto dependency.
             * @property {Array.<number>} [publicDependency] FileDescriptorProto publicDependency.
             * @property {Array.<number>} [weakDependency] FileDescriptorProto weakDependency.
             * @property {Array.<google.protobuf.DescriptorProto$Properties>} [messageType] FileDescriptorProto messageType.
             * @property {Array.<google.protobuf.EnumDescriptorProto$Properties>} [enumType] FileDescriptorProto enumType.
             * @property {Array.<google.protobuf.ServiceDescriptorProto$Properties>} [service] FileDescriptorProto service.
             * @property {Array.<google.protobuf.FieldDescriptorProto$Properties>} [extension] FileDescriptorProto extension.
             * @property {google.protobuf.FileOptions$Properties} [options] FileDescriptorProto options.
             * @property {google.protobuf.SourceCodeInfo$Properties} [sourceCodeInfo] FileDescriptorProto sourceCodeInfo.
             * @property {string} [syntax] FileDescriptorProto syntax.
             */

            /**
             * Constructs a new FileDescriptorProto.
             * @exports google.protobuf.FileDescriptorProto
             * @constructor
             * @param {google.protobuf.FileDescriptorProto$Properties=} [properties] Properties to set
             */
            function FileDescriptorProto(properties) {
                this.dependency = [];
                this.publicDependency = [];
                this.weakDependency = [];
                this.messageType = [];
                this.enumType = [];
                this.service = [];
                this.extension = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileDescriptorProto name.
             * @type {string}
             */
            FileDescriptorProto.prototype.name = "";

            /**
             * FileDescriptorProto package.
             * @type {string}
             */
            FileDescriptorProto.prototype["package"] = "";

            /**
             * FileDescriptorProto dependency.
             * @type {Array.<string>}
             */
            FileDescriptorProto.prototype.dependency = $util.emptyArray;

            /**
             * FileDescriptorProto publicDependency.
             * @type {Array.<number>}
             */
            FileDescriptorProto.prototype.publicDependency = $util.emptyArray;

            /**
             * FileDescriptorProto weakDependency.
             * @type {Array.<number>}
             */
            FileDescriptorProto.prototype.weakDependency = $util.emptyArray;

            /**
             * FileDescriptorProto messageType.
             * @type {Array.<google.protobuf.DescriptorProto$Properties>}
             */
            FileDescriptorProto.prototype.messageType = $util.emptyArray;

            /**
             * FileDescriptorProto enumType.
             * @type {Array.<google.protobuf.EnumDescriptorProto$Properties>}
             */
            FileDescriptorProto.prototype.enumType = $util.emptyArray;

            /**
             * FileDescriptorProto service.
             * @type {Array.<google.protobuf.ServiceDescriptorProto$Properties>}
             */
            FileDescriptorProto.prototype.service = $util.emptyArray;

            /**
             * FileDescriptorProto extension.
             * @type {Array.<google.protobuf.FieldDescriptorProto$Properties>}
             */
            FileDescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * FileDescriptorProto options.
             * @type {(google.protobuf.FileOptions$Properties|null)}
             */
            FileDescriptorProto.prototype.options = null;

            /**
             * FileDescriptorProto sourceCodeInfo.
             * @type {(google.protobuf.SourceCodeInfo$Properties|null)}
             */
            FileDescriptorProto.prototype.sourceCodeInfo = null;

            /**
             * FileDescriptorProto syntax.
             * @type {string}
             */
            FileDescriptorProto.prototype.syntax = "";

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param {google.protobuf.FileDescriptorProto$Properties=} [properties] Properties to set
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto instance
             */
            FileDescriptorProto.create = function create(properties) {
                return new FileDescriptorProto(properties);
            };

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param {google.protobuf.FileDescriptorProto$Properties} message FileDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message["package"] != null && message.hasOwnProperty("package"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message["package"]);
                if (message.dependency != null && message.dependency.length)
                    for (var i = 0; i < message.dependency.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.dependency[i]);
                if (message.messageType != null && message.messageType.length)
                    for (var i = 0; i < message.messageType.length; ++i)
                        $root.google.protobuf.DescriptorProto.encode(message.messageType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.enumType != null && message.enumType.length)
                    for (var i = 0; i < message.enumType.length; ++i)
                        $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.service != null && message.service.length)
                    for (var i = 0; i < message.service.length; ++i)
                        $root.google.protobuf.ServiceDescriptorProto.encode(message.service[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.extension != null && message.extension.length)
                    for (var i = 0; i < message.extension.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.FileOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo"))
                    $root.google.protobuf.SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.publicDependency != null && message.publicDependency.length)
                    for (var i = 0; i < message.publicDependency.length; ++i)
                        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.publicDependency[i]);
                if (message.weakDependency != null && message.weakDependency.length)
                    for (var i = 0; i < message.weakDependency.length; ++i)
                        writer.uint32(/* id 11, wireType 0 =*/88).int32(message.weakDependency[i]);
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.syntax);
                return writer;
            };

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param {google.protobuf.FileDescriptorProto$Properties} message FileDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message["package"] = reader.string();
                        break;
                    case 3:
                        if (!(message.dependency && message.dependency.length))
                            message.dependency = [];
                        message.dependency.push(reader.string());
                        break;
                    case 10:
                        if (!(message.publicDependency && message.publicDependency.length))
                            message.publicDependency = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.publicDependency.push(reader.int32());
                        } else
                            message.publicDependency.push(reader.int32());
                        break;
                    case 11:
                        if (!(message.weakDependency && message.weakDependency.length))
                            message.weakDependency = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.weakDependency.push(reader.int32());
                        } else
                            message.weakDependency.push(reader.int32());
                        break;
                    case 4:
                        if (!(message.messageType && message.messageType.length))
                            message.messageType = [];
                        message.messageType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        if (!(message.enumType && message.enumType.length))
                            message.enumType = [];
                        message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 6:
                        if (!(message.service && message.service.length))
                            message.service = [];
                        message.service.push($root.google.protobuf.ServiceDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 7:
                        if (!(message.extension && message.extension.length))
                            message.extension = [];
                        message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 8:
                        message.options = $root.google.protobuf.FileOptions.decode(reader, reader.uint32());
                        break;
                    case 9:
                        message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.decode(reader, reader.uint32());
                        break;
                    case 12:
                        message.syntax = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileDescriptorProto message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            FileDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message["package"] != null && message.hasOwnProperty("package"))
                    if (!$util.isString(message["package"]))
                        return "package: string expected";
                if (message.dependency != null && message.hasOwnProperty("dependency")) {
                    if (!Array.isArray(message.dependency))
                        return "dependency: array expected";
                    for (var i = 0; i < message.dependency.length; ++i)
                        if (!$util.isString(message.dependency[i]))
                            return "dependency: string[] expected";
                }
                if (message.publicDependency != null && message.hasOwnProperty("publicDependency")) {
                    if (!Array.isArray(message.publicDependency))
                        return "publicDependency: array expected";
                    for (var i = 0; i < message.publicDependency.length; ++i)
                        if (!$util.isInteger(message.publicDependency[i]))
                            return "publicDependency: integer[] expected";
                }
                if (message.weakDependency != null && message.hasOwnProperty("weakDependency")) {
                    if (!Array.isArray(message.weakDependency))
                        return "weakDependency: array expected";
                    for (var i = 0; i < message.weakDependency.length; ++i)
                        if (!$util.isInteger(message.weakDependency[i]))
                            return "weakDependency: integer[] expected";
                }
                if (message.messageType != null && message.hasOwnProperty("messageType")) {
                    if (!Array.isArray(message.messageType))
                        return "messageType: array expected";
                    for (var i = 0; i < message.messageType.length; ++i) {
                        var error = $root.google.protobuf.DescriptorProto.verify(message.messageType[i]);
                        if (error)
                            return "messageType." + error;
                    }
                }
                if (message.enumType != null && message.hasOwnProperty("enumType")) {
                    if (!Array.isArray(message.enumType))
                        return "enumType: array expected";
                    for (var i = 0; i < message.enumType.length; ++i) {
                        var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                        if (error)
                            return "enumType." + error;
                    }
                }
                if (message.service != null && message.hasOwnProperty("service")) {
                    if (!Array.isArray(message.service))
                        return "service: array expected";
                    for (var i = 0; i < message.service.length; ++i) {
                        var error = $root.google.protobuf.ServiceDescriptorProto.verify(message.service[i]);
                        if (error)
                            return "service." + error;
                    }
                }
                if (message.extension != null && message.hasOwnProperty("extension")) {
                    if (!Array.isArray(message.extension))
                        return "extension: array expected";
                    for (var i = 0; i < message.extension.length; ++i) {
                        var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                        if (error)
                            return "extension." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.FileOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo")) {
                    var error = $root.google.protobuf.SourceCodeInfo.verify(message.sourceCodeInfo);
                    if (error)
                        return "sourceCodeInfo." + error;
                }
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    if (!$util.isString(message.syntax))
                        return "syntax: string expected";
                return null;
            };

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             */
            FileDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.FileDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object["package"] != null)
                    message["package"] = String(object["package"]);
                if (object.dependency) {
                    if (!Array.isArray(object.dependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.dependency: array expected");
                    message.dependency = [];
                    for (var i = 0; i < object.dependency.length; ++i)
                        message.dependency[i] = String(object.dependency[i]);
                }
                if (object.publicDependency) {
                    if (!Array.isArray(object.publicDependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.publicDependency: array expected");
                    message.publicDependency = [];
                    for (var i = 0; i < object.publicDependency.length; ++i)
                        message.publicDependency[i] = object.publicDependency[i] | 0;
                }
                if (object.weakDependency) {
                    if (!Array.isArray(object.weakDependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.weakDependency: array expected");
                    message.weakDependency = [];
                    for (var i = 0; i < object.weakDependency.length; ++i)
                        message.weakDependency[i] = object.weakDependency[i] | 0;
                }
                if (object.messageType) {
                    if (!Array.isArray(object.messageType))
                        throw TypeError(".google.protobuf.FileDescriptorProto.messageType: array expected");
                    message.messageType = [];
                    for (var i = 0; i < object.messageType.length; ++i) {
                        if (typeof object.messageType[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.messageType: object expected");
                        message.messageType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.messageType[i]);
                    }
                }
                if (object.enumType) {
                    if (!Array.isArray(object.enumType))
                        throw TypeError(".google.protobuf.FileDescriptorProto.enumType: array expected");
                    message.enumType = [];
                    for (var i = 0; i < object.enumType.length; ++i) {
                        if (typeof object.enumType[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.enumType: object expected");
                        message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                    }
                }
                if (object.service) {
                    if (!Array.isArray(object.service))
                        throw TypeError(".google.protobuf.FileDescriptorProto.service: array expected");
                    message.service = [];
                    for (var i = 0; i < object.service.length; ++i) {
                        if (typeof object.service[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.service: object expected");
                        message.service[i] = $root.google.protobuf.ServiceDescriptorProto.fromObject(object.service[i]);
                    }
                }
                if (object.extension) {
                    if (!Array.isArray(object.extension))
                        throw TypeError(".google.protobuf.FileDescriptorProto.extension: array expected");
                    message.extension = [];
                    for (var i = 0; i < object.extension.length; ++i) {
                        if (typeof object.extension[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.extension: object expected");
                        message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.FileDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.FileOptions.fromObject(object.options);
                }
                if (object.sourceCodeInfo != null) {
                    if (typeof object.sourceCodeInfo !== "object")
                        throw TypeError(".google.protobuf.FileDescriptorProto.sourceCodeInfo: object expected");
                    message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.fromObject(object.sourceCodeInfo);
                }
                if (object.syntax != null)
                    message.syntax = String(object.syntax);
                return message;
            };

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.FileDescriptorProto.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             */
            FileDescriptorProto.from = FileDescriptorProto.fromObject;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param {google.protobuf.FileDescriptorProto} message FileDescriptorProto
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.dependency = [];
                    object.messageType = [];
                    object.enumType = [];
                    object.service = [];
                    object.extension = [];
                    object.publicDependency = [];
                    object.weakDependency = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object["package"] = "";
                    object.options = null;
                    object.sourceCodeInfo = null;
                    object.syntax = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message["package"] != null && message.hasOwnProperty("package"))
                    object["package"] = message["package"];
                if (message.dependency && message.dependency.length) {
                    object.dependency = [];
                    for (var j = 0; j < message.dependency.length; ++j)
                        object.dependency[j] = message.dependency[j];
                }
                if (message.messageType && message.messageType.length) {
                    object.messageType = [];
                    for (var j = 0; j < message.messageType.length; ++j)
                        object.messageType[j] = $root.google.protobuf.DescriptorProto.toObject(message.messageType[j], options);
                }
                if (message.enumType && message.enumType.length) {
                    object.enumType = [];
                    for (var j = 0; j < message.enumType.length; ++j)
                        object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                }
                if (message.service && message.service.length) {
                    object.service = [];
                    for (var j = 0; j < message.service.length; ++j)
                        object.service[j] = $root.google.protobuf.ServiceDescriptorProto.toObject(message.service[j], options);
                }
                if (message.extension && message.extension.length) {
                    object.extension = [];
                    for (var j = 0; j < message.extension.length; ++j)
                        object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.FileOptions.toObject(message.options, options);
                if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo"))
                    object.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.toObject(message.sourceCodeInfo, options);
                if (message.publicDependency && message.publicDependency.length) {
                    object.publicDependency = [];
                    for (var j = 0; j < message.publicDependency.length; ++j)
                        object.publicDependency[j] = message.publicDependency[j];
                }
                if (message.weakDependency && message.weakDependency.length) {
                    object.weakDependency = [];
                    for (var j = 0; j < message.weakDependency.length; ++j)
                        object.weakDependency[j] = message.weakDependency[j];
                }
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    object.syntax = message.syntax;
                return object;
            };

            /**
             * Creates a plain object from this FileDescriptorProto message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorProto.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            FileDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FileDescriptorProto;
        })();

        protobuf.DescriptorProto = (function() {

            /**
             * Properties of a DescriptorProto.
             * @typedef google.protobuf.DescriptorProto$Properties
             * @type {Object}
             * @property {string} [name] DescriptorProto name.
             * @property {Array.<google.protobuf.FieldDescriptorProto$Properties>} [field] DescriptorProto field.
             * @property {Array.<google.protobuf.FieldDescriptorProto$Properties>} [extension] DescriptorProto extension.
             * @property {Array.<google.protobuf.DescriptorProto$Properties>} [nestedType] DescriptorProto nestedType.
             * @property {Array.<google.protobuf.EnumDescriptorProto$Properties>} [enumType] DescriptorProto enumType.
             * @property {Array.<google.protobuf.DescriptorProto.ExtensionRange$Properties>} [extensionRange] DescriptorProto extensionRange.
             * @property {Array.<google.protobuf.OneofDescriptorProto$Properties>} [oneofDecl] DescriptorProto oneofDecl.
             * @property {google.protobuf.MessageOptions$Properties} [options] DescriptorProto options.
             * @property {Array.<google.protobuf.DescriptorProto.ReservedRange$Properties>} [reservedRange] DescriptorProto reservedRange.
             * @property {Array.<string>} [reservedName] DescriptorProto reservedName.
             */

            /**
             * Constructs a new DescriptorProto.
             * @exports google.protobuf.DescriptorProto
             * @constructor
             * @param {google.protobuf.DescriptorProto$Properties=} [properties] Properties to set
             */
            function DescriptorProto(properties) {
                this.field = [];
                this.extension = [];
                this.nestedType = [];
                this.enumType = [];
                this.extensionRange = [];
                this.oneofDecl = [];
                this.reservedRange = [];
                this.reservedName = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DescriptorProto name.
             * @type {string}
             */
            DescriptorProto.prototype.name = "";

            /**
             * DescriptorProto field.
             * @type {Array.<google.protobuf.FieldDescriptorProto$Properties>}
             */
            DescriptorProto.prototype.field = $util.emptyArray;

            /**
             * DescriptorProto extension.
             * @type {Array.<google.protobuf.FieldDescriptorProto$Properties>}
             */
            DescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * DescriptorProto nestedType.
             * @type {Array.<google.protobuf.DescriptorProto$Properties>}
             */
            DescriptorProto.prototype.nestedType = $util.emptyArray;

            /**
             * DescriptorProto enumType.
             * @type {Array.<google.protobuf.EnumDescriptorProto$Properties>}
             */
            DescriptorProto.prototype.enumType = $util.emptyArray;

            /**
             * DescriptorProto extensionRange.
             * @type {Array.<google.protobuf.DescriptorProto.ExtensionRange$Properties>}
             */
            DescriptorProto.prototype.extensionRange = $util.emptyArray;

            /**
             * DescriptorProto oneofDecl.
             * @type {Array.<google.protobuf.OneofDescriptorProto$Properties>}
             */
            DescriptorProto.prototype.oneofDecl = $util.emptyArray;

            /**
             * DescriptorProto options.
             * @type {(google.protobuf.MessageOptions$Properties|null)}
             */
            DescriptorProto.prototype.options = null;

            /**
             * DescriptorProto reservedRange.
             * @type {Array.<google.protobuf.DescriptorProto.ReservedRange$Properties>}
             */
            DescriptorProto.prototype.reservedRange = $util.emptyArray;

            /**
             * DescriptorProto reservedName.
             * @type {Array.<string>}
             */
            DescriptorProto.prototype.reservedName = $util.emptyArray;

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param {google.protobuf.DescriptorProto$Properties=} [properties] Properties to set
             * @returns {google.protobuf.DescriptorProto} DescriptorProto instance
             */
            DescriptorProto.create = function create(properties) {
                return new DescriptorProto(properties);
            };

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param {google.protobuf.DescriptorProto$Properties} message DescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.field != null && message.field.length)
                    for (var i = 0; i < message.field.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.nestedType != null && message.nestedType.length)
                    for (var i = 0; i < message.nestedType.length; ++i)
                        $root.google.protobuf.DescriptorProto.encode(message.nestedType[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.enumType != null && message.enumType.length)
                    for (var i = 0; i < message.enumType.length; ++i)
                        $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.extensionRange != null && message.extensionRange.length)
                    for (var i = 0; i < message.extensionRange.length; ++i)
                        $root.google.protobuf.DescriptorProto.ExtensionRange.encode(message.extensionRange[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.extension != null && message.extension.length)
                    for (var i = 0; i < message.extension.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.MessageOptions.encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.oneofDecl != null && message.oneofDecl.length)
                    for (var i = 0; i < message.oneofDecl.length; ++i)
                        $root.google.protobuf.OneofDescriptorProto.encode(message.oneofDecl[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.reservedRange != null && message.reservedRange.length)
                    for (var i = 0; i < message.reservedRange.length; ++i)
                        $root.google.protobuf.DescriptorProto.ReservedRange.encode(message.reservedRange[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.reservedName != null && message.reservedName.length)
                    for (var i = 0; i < message.reservedName.length; ++i)
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.reservedName[i]);
                return writer;
            };

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param {google.protobuf.DescriptorProto$Properties} message DescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.field && message.field.length))
                            message.field = [];
                        message.field.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 6:
                        if (!(message.extension && message.extension.length))
                            message.extension = [];
                        message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        if (!(message.nestedType && message.nestedType.length))
                            message.nestedType = [];
                        message.nestedType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 4:
                        if (!(message.enumType && message.enumType.length))
                            message.enumType = [];
                        message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        if (!(message.extensionRange && message.extensionRange.length))
                            message.extensionRange = [];
                        message.extensionRange.push($root.google.protobuf.DescriptorProto.ExtensionRange.decode(reader, reader.uint32()));
                        break;
                    case 8:
                        if (!(message.oneofDecl && message.oneofDecl.length))
                            message.oneofDecl = [];
                        message.oneofDecl.push($root.google.protobuf.OneofDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 7:
                        message.options = $root.google.protobuf.MessageOptions.decode(reader, reader.uint32());
                        break;
                    case 9:
                        if (!(message.reservedRange && message.reservedRange.length))
                            message.reservedRange = [];
                        message.reservedRange.push($root.google.protobuf.DescriptorProto.ReservedRange.decode(reader, reader.uint32()));
                        break;
                    case 10:
                        if (!(message.reservedName && message.reservedName.length))
                            message.reservedName = [];
                        message.reservedName.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DescriptorProto message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            DescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.field != null && message.hasOwnProperty("field")) {
                    if (!Array.isArray(message.field))
                        return "field: array expected";
                    for (var i = 0; i < message.field.length; ++i) {
                        var error = $root.google.protobuf.FieldDescriptorProto.verify(message.field[i]);
                        if (error)
                            return "field." + error;
                    }
                }
                if (message.extension != null && message.hasOwnProperty("extension")) {
                    if (!Array.isArray(message.extension))
                        return "extension: array expected";
                    for (var i = 0; i < message.extension.length; ++i) {
                        var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                        if (error)
                            return "extension." + error;
                    }
                }
                if (message.nestedType != null && message.hasOwnProperty("nestedType")) {
                    if (!Array.isArray(message.nestedType))
                        return "nestedType: array expected";
                    for (var i = 0; i < message.nestedType.length; ++i) {
                        var error = $root.google.protobuf.DescriptorProto.verify(message.nestedType[i]);
                        if (error)
                            return "nestedType." + error;
                    }
                }
                if (message.enumType != null && message.hasOwnProperty("enumType")) {
                    if (!Array.isArray(message.enumType))
                        return "enumType: array expected";
                    for (var i = 0; i < message.enumType.length; ++i) {
                        var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                        if (error)
                            return "enumType." + error;
                    }
                }
                if (message.extensionRange != null && message.hasOwnProperty("extensionRange")) {
                    if (!Array.isArray(message.extensionRange))
                        return "extensionRange: array expected";
                    for (var i = 0; i < message.extensionRange.length; ++i) {
                        var error = $root.google.protobuf.DescriptorProto.ExtensionRange.verify(message.extensionRange[i]);
                        if (error)
                            return "extensionRange." + error;
                    }
                }
                if (message.oneofDecl != null && message.hasOwnProperty("oneofDecl")) {
                    if (!Array.isArray(message.oneofDecl))
                        return "oneofDecl: array expected";
                    for (var i = 0; i < message.oneofDecl.length; ++i) {
                        var error = $root.google.protobuf.OneofDescriptorProto.verify(message.oneofDecl[i]);
                        if (error)
                            return "oneofDecl." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.MessageOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.reservedRange != null && message.hasOwnProperty("reservedRange")) {
                    if (!Array.isArray(message.reservedRange))
                        return "reservedRange: array expected";
                    for (var i = 0; i < message.reservedRange.length; ++i) {
                        var error = $root.google.protobuf.DescriptorProto.ReservedRange.verify(message.reservedRange[i]);
                        if (error)
                            return "reservedRange." + error;
                    }
                }
                if (message.reservedName != null && message.hasOwnProperty("reservedName")) {
                    if (!Array.isArray(message.reservedName))
                        return "reservedName: array expected";
                    for (var i = 0; i < message.reservedName.length; ++i)
                        if (!$util.isString(message.reservedName[i]))
                            return "reservedName: string[] expected";
                }
                return null;
            };

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             */
            DescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.DescriptorProto)
                    return object;
                var message = new $root.google.protobuf.DescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.field) {
                    if (!Array.isArray(object.field))
                        throw TypeError(".google.protobuf.DescriptorProto.field: array expected");
                    message.field = [];
                    for (var i = 0; i < object.field.length; ++i) {
                        if (typeof object.field[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.field: object expected");
                        message.field[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.field[i]);
                    }
                }
                if (object.extension) {
                    if (!Array.isArray(object.extension))
                        throw TypeError(".google.protobuf.DescriptorProto.extension: array expected");
                    message.extension = [];
                    for (var i = 0; i < object.extension.length; ++i) {
                        if (typeof object.extension[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.extension: object expected");
                        message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                    }
                }
                if (object.nestedType) {
                    if (!Array.isArray(object.nestedType))
                        throw TypeError(".google.protobuf.DescriptorProto.nestedType: array expected");
                    message.nestedType = [];
                    for (var i = 0; i < object.nestedType.length; ++i) {
                        if (typeof object.nestedType[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.nestedType: object expected");
                        message.nestedType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.nestedType[i]);
                    }
                }
                if (object.enumType) {
                    if (!Array.isArray(object.enumType))
                        throw TypeError(".google.protobuf.DescriptorProto.enumType: array expected");
                    message.enumType = [];
                    for (var i = 0; i < object.enumType.length; ++i) {
                        if (typeof object.enumType[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.enumType: object expected");
                        message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                    }
                }
                if (object.extensionRange) {
                    if (!Array.isArray(object.extensionRange))
                        throw TypeError(".google.protobuf.DescriptorProto.extensionRange: array expected");
                    message.extensionRange = [];
                    for (var i = 0; i < object.extensionRange.length; ++i) {
                        if (typeof object.extensionRange[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.extensionRange: object expected");
                        message.extensionRange[i] = $root.google.protobuf.DescriptorProto.ExtensionRange.fromObject(object.extensionRange[i]);
                    }
                }
                if (object.oneofDecl) {
                    if (!Array.isArray(object.oneofDecl))
                        throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: array expected");
                    message.oneofDecl = [];
                    for (var i = 0; i < object.oneofDecl.length; ++i) {
                        if (typeof object.oneofDecl[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: object expected");
                        message.oneofDecl[i] = $root.google.protobuf.OneofDescriptorProto.fromObject(object.oneofDecl[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.DescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.MessageOptions.fromObject(object.options);
                }
                if (object.reservedRange) {
                    if (!Array.isArray(object.reservedRange))
                        throw TypeError(".google.protobuf.DescriptorProto.reservedRange: array expected");
                    message.reservedRange = [];
                    for (var i = 0; i < object.reservedRange.length; ++i) {
                        if (typeof object.reservedRange[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.reservedRange: object expected");
                        message.reservedRange[i] = $root.google.protobuf.DescriptorProto.ReservedRange.fromObject(object.reservedRange[i]);
                    }
                }
                if (object.reservedName) {
                    if (!Array.isArray(object.reservedName))
                        throw TypeError(".google.protobuf.DescriptorProto.reservedName: array expected");
                    message.reservedName = [];
                    for (var i = 0; i < object.reservedName.length; ++i)
                        message.reservedName[i] = String(object.reservedName[i]);
                }
                return message;
            };

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.DescriptorProto.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             */
            DescriptorProto.from = DescriptorProto.fromObject;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param {google.protobuf.DescriptorProto} message DescriptorProto
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.field = [];
                    object.nestedType = [];
                    object.enumType = [];
                    object.extensionRange = [];
                    object.extension = [];
                    object.oneofDecl = [];
                    object.reservedRange = [];
                    object.reservedName = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.field && message.field.length) {
                    object.field = [];
                    for (var j = 0; j < message.field.length; ++j)
                        object.field[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.field[j], options);
                }
                if (message.nestedType && message.nestedType.length) {
                    object.nestedType = [];
                    for (var j = 0; j < message.nestedType.length; ++j)
                        object.nestedType[j] = $root.google.protobuf.DescriptorProto.toObject(message.nestedType[j], options);
                }
                if (message.enumType && message.enumType.length) {
                    object.enumType = [];
                    for (var j = 0; j < message.enumType.length; ++j)
                        object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                }
                if (message.extensionRange && message.extensionRange.length) {
                    object.extensionRange = [];
                    for (var j = 0; j < message.extensionRange.length; ++j)
                        object.extensionRange[j] = $root.google.protobuf.DescriptorProto.ExtensionRange.toObject(message.extensionRange[j], options);
                }
                if (message.extension && message.extension.length) {
                    object.extension = [];
                    for (var j = 0; j < message.extension.length; ++j)
                        object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.MessageOptions.toObject(message.options, options);
                if (message.oneofDecl && message.oneofDecl.length) {
                    object.oneofDecl = [];
                    for (var j = 0; j < message.oneofDecl.length; ++j)
                        object.oneofDecl[j] = $root.google.protobuf.OneofDescriptorProto.toObject(message.oneofDecl[j], options);
                }
                if (message.reservedRange && message.reservedRange.length) {
                    object.reservedRange = [];
                    for (var j = 0; j < message.reservedRange.length; ++j)
                        object.reservedRange[j] = $root.google.protobuf.DescriptorProto.ReservedRange.toObject(message.reservedRange[j], options);
                }
                if (message.reservedName && message.reservedName.length) {
                    object.reservedName = [];
                    for (var j = 0; j < message.reservedName.length; ++j)
                        object.reservedName[j] = message.reservedName[j];
                }
                return object;
            };

            /**
             * Creates a plain object from this DescriptorProto message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DescriptorProto.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            DescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            DescriptorProto.ExtensionRange = (function() {

                /**
                 * Properties of an ExtensionRange.
                 * @typedef google.protobuf.DescriptorProto.ExtensionRange$Properties
                 * @type {Object}
                 * @property {number} [start] ExtensionRange start.
                 * @property {number} [end] ExtensionRange end.
                 */

                /**
                 * Constructs a new ExtensionRange.
                 * @exports google.protobuf.DescriptorProto.ExtensionRange
                 * @constructor
                 * @param {google.protobuf.DescriptorProto.ExtensionRange$Properties=} [properties] Properties to set
                 */
                function ExtensionRange(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ExtensionRange start.
                 * @type {number}
                 */
                ExtensionRange.prototype.start = 0;

                /**
                 * ExtensionRange end.
                 * @type {number}
                 */
                ExtensionRange.prototype.end = 0;

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param {google.protobuf.DescriptorProto.ExtensionRange$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange instance
                 */
                ExtensionRange.create = function create(properties) {
                    return new ExtensionRange(properties);
                };

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param {google.protobuf.DescriptorProto.ExtensionRange$Properties} message ExtensionRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.start != null && message.hasOwnProperty("start"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                    if (message.end != null && message.hasOwnProperty("end"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                    return writer;
                };

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param {google.protobuf.DescriptorProto.ExtensionRange$Properties} message ExtensionRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRange.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.start = reader.int32();
                            break;
                        case 2:
                            message.end = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRange.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an ExtensionRange message.
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                ExtensionRange.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.start != null && message.hasOwnProperty("start"))
                        if (!$util.isInteger(message.start))
                            return "start: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 */
                ExtensionRange.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto.ExtensionRange)
                        return object;
                    var message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                    if (object.start != null)
                        message.start = object.start | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.DescriptorProto.ExtensionRange.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 */
                ExtensionRange.from = ExtensionRange.fromObject;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param {google.protobuf.DescriptorProto.ExtensionRange} message ExtensionRange
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ExtensionRange.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.start = 0;
                        object.end = 0;
                    }
                    if (message.start != null && message.hasOwnProperty("start"))
                        object.start = message.start;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Creates a plain object from this ExtensionRange message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ExtensionRange.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                ExtensionRange.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ExtensionRange;
            })();

            DescriptorProto.ReservedRange = (function() {

                /**
                 * Properties of a ReservedRange.
                 * @typedef google.protobuf.DescriptorProto.ReservedRange$Properties
                 * @type {Object}
                 * @property {number} [start] ReservedRange start.
                 * @property {number} [end] ReservedRange end.
                 */

                /**
                 * Constructs a new ReservedRange.
                 * @exports google.protobuf.DescriptorProto.ReservedRange
                 * @constructor
                 * @param {google.protobuf.DescriptorProto.ReservedRange$Properties=} [properties] Properties to set
                 */
                function ReservedRange(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ReservedRange start.
                 * @type {number}
                 */
                ReservedRange.prototype.start = 0;

                /**
                 * ReservedRange end.
                 * @type {number}
                 */
                ReservedRange.prototype.end = 0;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param {google.protobuf.DescriptorProto.ReservedRange$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange instance
                 */
                ReservedRange.create = function create(properties) {
                    return new ReservedRange(properties);
                };

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param {google.protobuf.DescriptorProto.ReservedRange$Properties} message ReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReservedRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.start != null && message.hasOwnProperty("start"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                    if (message.end != null && message.hasOwnProperty("end"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                    return writer;
                };

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param {google.protobuf.DescriptorProto.ReservedRange$Properties} message ReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReservedRange.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReservedRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.start = reader.int32();
                            break;
                        case 2:
                            message.end = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReservedRange.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReservedRange message.
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                ReservedRange.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.start != null && message.hasOwnProperty("start"))
                        if (!$util.isInteger(message.start))
                            return "start: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 */
                ReservedRange.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto.ReservedRange)
                        return object;
                    var message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                    if (object.start != null)
                        message.start = object.start | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.DescriptorProto.ReservedRange.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 */
                ReservedRange.from = ReservedRange.fromObject;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param {google.protobuf.DescriptorProto.ReservedRange} message ReservedRange
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReservedRange.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.start = 0;
                        object.end = 0;
                    }
                    if (message.start != null && message.hasOwnProperty("start"))
                        object.start = message.start;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Creates a plain object from this ReservedRange message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReservedRange.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                ReservedRange.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ReservedRange;
            })();

            return DescriptorProto;
        })();

        protobuf.FieldDescriptorProto = (function() {

            /**
             * Properties of a FieldDescriptorProto.
             * @typedef google.protobuf.FieldDescriptorProto$Properties
             * @type {Object}
             * @property {string} [name] FieldDescriptorProto name.
             * @property {number} [number] FieldDescriptorProto number.
             * @property {google.protobuf.FieldDescriptorProto.Label} [label] FieldDescriptorProto label.
             * @property {google.protobuf.FieldDescriptorProto.Type} [type] FieldDescriptorProto type.
             * @property {string} [typeName] FieldDescriptorProto typeName.
             * @property {string} [extendee] FieldDescriptorProto extendee.
             * @property {string} [defaultValue] FieldDescriptorProto defaultValue.
             * @property {number} [oneofIndex] FieldDescriptorProto oneofIndex.
             * @property {string} [jsonName] FieldDescriptorProto jsonName.
             * @property {google.protobuf.FieldOptions$Properties} [options] FieldDescriptorProto options.
             */

            /**
             * Constructs a new FieldDescriptorProto.
             * @exports google.protobuf.FieldDescriptorProto
             * @constructor
             * @param {google.protobuf.FieldDescriptorProto$Properties=} [properties] Properties to set
             */
            function FieldDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FieldDescriptorProto name.
             * @type {string}
             */
            FieldDescriptorProto.prototype.name = "";

            /**
             * FieldDescriptorProto number.
             * @type {number}
             */
            FieldDescriptorProto.prototype.number = 0;

            /**
             * FieldDescriptorProto label.
             * @type {google.protobuf.FieldDescriptorProto.Label}
             */
            FieldDescriptorProto.prototype.label = 1;

            /**
             * FieldDescriptorProto type.
             * @type {google.protobuf.FieldDescriptorProto.Type}
             */
            FieldDescriptorProto.prototype.type = 1;

            /**
             * FieldDescriptorProto typeName.
             * @type {string}
             */
            FieldDescriptorProto.prototype.typeName = "";

            /**
             * FieldDescriptorProto extendee.
             * @type {string}
             */
            FieldDescriptorProto.prototype.extendee = "";

            /**
             * FieldDescriptorProto defaultValue.
             * @type {string}
             */
            FieldDescriptorProto.prototype.defaultValue = "";

            /**
             * FieldDescriptorProto oneofIndex.
             * @type {number}
             */
            FieldDescriptorProto.prototype.oneofIndex = 0;

            /**
             * FieldDescriptorProto jsonName.
             * @type {string}
             */
            FieldDescriptorProto.prototype.jsonName = "";

            /**
             * FieldDescriptorProto options.
             * @type {(google.protobuf.FieldOptions$Properties|null)}
             */
            FieldDescriptorProto.prototype.options = null;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param {google.protobuf.FieldDescriptorProto$Properties=} [properties] Properties to set
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto instance
             */
            FieldDescriptorProto.create = function create(properties) {
                return new FieldDescriptorProto(properties);
            };

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param {google.protobuf.FieldDescriptorProto$Properties} message FieldDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.extendee != null && message.hasOwnProperty("extendee"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.extendee);
                if (message.number != null && message.hasOwnProperty("number"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
                if (message.label != null && message.hasOwnProperty("label"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.label);
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.type);
                if (message.typeName != null && message.hasOwnProperty("typeName"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.typeName);
                if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.defaultValue);
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.FieldOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.oneofIndex);
                if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.jsonName);
                return writer;
            };

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param {google.protobuf.FieldDescriptorProto$Properties} message FieldDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.number = reader.int32();
                        break;
                    case 4:
                        message.label = reader.uint32();
                        break;
                    case 5:
                        message.type = reader.uint32();
                        break;
                    case 6:
                        message.typeName = reader.string();
                        break;
                    case 2:
                        message.extendee = reader.string();
                        break;
                    case 7:
                        message.defaultValue = reader.string();
                        break;
                    case 9:
                        message.oneofIndex = reader.int32();
                        break;
                    case 10:
                        message.jsonName = reader.string();
                        break;
                    case 8:
                        message.options = $root.google.protobuf.FieldOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FieldDescriptorProto message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            FieldDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.label != null && message.hasOwnProperty("label"))
                    switch (message.label) {
                    default:
                        return "label: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                        break;
                    }
                if (message.typeName != null && message.hasOwnProperty("typeName"))
                    if (!$util.isString(message.typeName))
                        return "typeName: string expected";
                if (message.extendee != null && message.hasOwnProperty("extendee"))
                    if (!$util.isString(message.extendee))
                        return "extendee: string expected";
                if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                    if (!$util.isString(message.defaultValue))
                        return "defaultValue: string expected";
                if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                    if (!$util.isInteger(message.oneofIndex))
                        return "oneofIndex: integer expected";
                if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                    if (!$util.isString(message.jsonName))
                        return "jsonName: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.FieldOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             */
            FieldDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FieldDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.FieldDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.number != null)
                    message.number = object.number | 0;
                switch (object.label) {
                case "LABEL_OPTIONAL":
                case 1:
                    message.label = 1;
                    break;
                case "LABEL_REQUIRED":
                case 2:
                    message.label = 2;
                    break;
                case "LABEL_REPEATED":
                case 3:
                    message.label = 3;
                    break;
                }
                switch (object.type) {
                case "TYPE_DOUBLE":
                case 1:
                    message.type = 1;
                    break;
                case "TYPE_FLOAT":
                case 2:
                    message.type = 2;
                    break;
                case "TYPE_INT64":
                case 3:
                    message.type = 3;
                    break;
                case "TYPE_UINT64":
                case 4:
                    message.type = 4;
                    break;
                case "TYPE_INT32":
                case 5:
                    message.type = 5;
                    break;
                case "TYPE_FIXED64":
                case 6:
                    message.type = 6;
                    break;
                case "TYPE_FIXED32":
                case 7:
                    message.type = 7;
                    break;
                case "TYPE_BOOL":
                case 8:
                    message.type = 8;
                    break;
                case "TYPE_STRING":
                case 9:
                    message.type = 9;
                    break;
                case "TYPE_GROUP":
                case 10:
                    message.type = 10;
                    break;
                case "TYPE_MESSAGE":
                case 11:
                    message.type = 11;
                    break;
                case "TYPE_BYTES":
                case 12:
                    message.type = 12;
                    break;
                case "TYPE_UINT32":
                case 13:
                    message.type = 13;
                    break;
                case "TYPE_ENUM":
                case 14:
                    message.type = 14;
                    break;
                case "TYPE_SFIXED32":
                case 15:
                    message.type = 15;
                    break;
                case "TYPE_SFIXED64":
                case 16:
                    message.type = 16;
                    break;
                case "TYPE_SINT32":
                case 17:
                    message.type = 17;
                    break;
                case "TYPE_SINT64":
                case 18:
                    message.type = 18;
                    break;
                }
                if (object.typeName != null)
                    message.typeName = String(object.typeName);
                if (object.extendee != null)
                    message.extendee = String(object.extendee);
                if (object.defaultValue != null)
                    message.defaultValue = String(object.defaultValue);
                if (object.oneofIndex != null)
                    message.oneofIndex = object.oneofIndex | 0;
                if (object.jsonName != null)
                    message.jsonName = String(object.jsonName);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.FieldDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.FieldOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.FieldDescriptorProto.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             */
            FieldDescriptorProto.from = FieldDescriptorProto.fromObject;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param {google.protobuf.FieldDescriptorProto} message FieldDescriptorProto
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.extendee = "";
                    object.number = 0;
                    object.label = options.enums === String ? "LABEL_OPTIONAL" : 1;
                    object.type = options.enums === String ? "TYPE_DOUBLE" : 1;
                    object.typeName = "";
                    object.defaultValue = "";
                    object.options = null;
                    object.oneofIndex = 0;
                    object.jsonName = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.extendee != null && message.hasOwnProperty("extendee"))
                    object.extendee = message.extendee;
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.label != null && message.hasOwnProperty("label"))
                    object.label = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Label[message.label] : message.label;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Type[message.type] : message.type;
                if (message.typeName != null && message.hasOwnProperty("typeName"))
                    object.typeName = message.typeName;
                if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                    object.defaultValue = message.defaultValue;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.FieldOptions.toObject(message.options, options);
                if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                    object.oneofIndex = message.oneofIndex;
                if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                    object.jsonName = message.jsonName;
                return object;
            };

            /**
             * Creates a plain object from this FieldDescriptorProto message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldDescriptorProto.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            FieldDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Type enum.
             * @name Type
             * @memberof google.protobuf.FieldDescriptorProto
             * @enum {number}
             * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
             * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
             * @property {number} TYPE_INT64=3 TYPE_INT64 value
             * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
             * @property {number} TYPE_INT32=5 TYPE_INT32 value
             * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
             * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
             * @property {number} TYPE_BOOL=8 TYPE_BOOL value
             * @property {number} TYPE_STRING=9 TYPE_STRING value
             * @property {number} TYPE_GROUP=10 TYPE_GROUP value
             * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
             * @property {number} TYPE_BYTES=12 TYPE_BYTES value
             * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
             * @property {number} TYPE_ENUM=14 TYPE_ENUM value
             * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
             * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
             * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
             * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
             */
            FieldDescriptorProto.Type = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "TYPE_DOUBLE"] = 1;
                values[valuesById[2] = "TYPE_FLOAT"] = 2;
                values[valuesById[3] = "TYPE_INT64"] = 3;
                values[valuesById[4] = "TYPE_UINT64"] = 4;
                values[valuesById[5] = "TYPE_INT32"] = 5;
                values[valuesById[6] = "TYPE_FIXED64"] = 6;
                values[valuesById[7] = "TYPE_FIXED32"] = 7;
                values[valuesById[8] = "TYPE_BOOL"] = 8;
                values[valuesById[9] = "TYPE_STRING"] = 9;
                values[valuesById[10] = "TYPE_GROUP"] = 10;
                values[valuesById[11] = "TYPE_MESSAGE"] = 11;
                values[valuesById[12] = "TYPE_BYTES"] = 12;
                values[valuesById[13] = "TYPE_UINT32"] = 13;
                values[valuesById[14] = "TYPE_ENUM"] = 14;
                values[valuesById[15] = "TYPE_SFIXED32"] = 15;
                values[valuesById[16] = "TYPE_SFIXED64"] = 16;
                values[valuesById[17] = "TYPE_SINT32"] = 17;
                values[valuesById[18] = "TYPE_SINT64"] = 18;
                return values;
            })();

            /**
             * Label enum.
             * @name Label
             * @memberof google.protobuf.FieldDescriptorProto
             * @enum {number}
             * @property {number} LABEL_OPTIONAL=1 LABEL_OPTIONAL value
             * @property {number} LABEL_REQUIRED=2 LABEL_REQUIRED value
             * @property {number} LABEL_REPEATED=3 LABEL_REPEATED value
             */
            FieldDescriptorProto.Label = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "LABEL_OPTIONAL"] = 1;
                values[valuesById[2] = "LABEL_REQUIRED"] = 2;
                values[valuesById[3] = "LABEL_REPEATED"] = 3;
                return values;
            })();

            return FieldDescriptorProto;
        })();

        protobuf.OneofDescriptorProto = (function() {

            /**
             * Properties of an OneofDescriptorProto.
             * @typedef google.protobuf.OneofDescriptorProto$Properties
             * @type {Object}
             * @property {string} [name] OneofDescriptorProto name.
             * @property {google.protobuf.OneofOptions$Properties} [options] OneofDescriptorProto options.
             */

            /**
             * Constructs a new OneofDescriptorProto.
             * @exports google.protobuf.OneofDescriptorProto
             * @constructor
             * @param {google.protobuf.OneofDescriptorProto$Properties=} [properties] Properties to set
             */
            function OneofDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OneofDescriptorProto name.
             * @type {string}
             */
            OneofDescriptorProto.prototype.name = "";

            /**
             * OneofDescriptorProto options.
             * @type {(google.protobuf.OneofOptions$Properties|null)}
             */
            OneofDescriptorProto.prototype.options = null;

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param {google.protobuf.OneofDescriptorProto$Properties=} [properties] Properties to set
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto instance
             */
            OneofDescriptorProto.create = function create(properties) {
                return new OneofDescriptorProto(properties);
            };

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param {google.protobuf.OneofDescriptorProto$Properties} message OneofDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.OneofOptions.encode(message.options, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param {google.protobuf.OneofDescriptorProto$Properties} message OneofDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.options = $root.google.protobuf.OneofOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OneofDescriptorProto message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            OneofDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.OneofOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             */
            OneofDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.OneofDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.OneofDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.OneofDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.OneofOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.OneofDescriptorProto.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             */
            OneofDescriptorProto.from = OneofDescriptorProto.fromObject;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param {google.protobuf.OneofDescriptorProto} message OneofDescriptorProto
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OneofDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.OneofOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Creates a plain object from this OneofDescriptorProto message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OneofDescriptorProto.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            OneofDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return OneofDescriptorProto;
        })();

        protobuf.EnumDescriptorProto = (function() {

            /**
             * Properties of an EnumDescriptorProto.
             * @typedef google.protobuf.EnumDescriptorProto$Properties
             * @type {Object}
             * @property {string} [name] EnumDescriptorProto name.
             * @property {Array.<google.protobuf.EnumValueDescriptorProto$Properties>} [value] EnumDescriptorProto value.
             * @property {google.protobuf.EnumOptions$Properties} [options] EnumDescriptorProto options.
             */

            /**
             * Constructs a new EnumDescriptorProto.
             * @exports google.protobuf.EnumDescriptorProto
             * @constructor
             * @param {google.protobuf.EnumDescriptorProto$Properties=} [properties] Properties to set
             */
            function EnumDescriptorProto(properties) {
                this.value = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumDescriptorProto name.
             * @type {string}
             */
            EnumDescriptorProto.prototype.name = "";

            /**
             * EnumDescriptorProto value.
             * @type {Array.<google.protobuf.EnumValueDescriptorProto$Properties>}
             */
            EnumDescriptorProto.prototype.value = $util.emptyArray;

            /**
             * EnumDescriptorProto options.
             * @type {(google.protobuf.EnumOptions$Properties|null)}
             */
            EnumDescriptorProto.prototype.options = null;

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param {google.protobuf.EnumDescriptorProto$Properties=} [properties] Properties to set
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto instance
             */
            EnumDescriptorProto.create = function create(properties) {
                return new EnumDescriptorProto(properties);
            };

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param {google.protobuf.EnumDescriptorProto$Properties} message EnumDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.value != null && message.value.length)
                    for (var i = 0; i < message.value.length; ++i)
                        $root.google.protobuf.EnumValueDescriptorProto.encode(message.value[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.EnumOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param {google.protobuf.EnumDescriptorProto$Properties} message EnumDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.value && message.value.length))
                            message.value = [];
                        message.value.push($root.google.protobuf.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.options = $root.google.protobuf.EnumOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumDescriptorProto message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            EnumDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!Array.isArray(message.value))
                        return "value: array expected";
                    for (var i = 0; i < message.value.length; ++i) {
                        var error = $root.google.protobuf.EnumValueDescriptorProto.verify(message.value[i]);
                        if (error)
                            return "value." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.EnumOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             */
            EnumDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.EnumDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.value) {
                    if (!Array.isArray(object.value))
                        throw TypeError(".google.protobuf.EnumDescriptorProto.value: array expected");
                    message.value = [];
                    for (var i = 0; i < object.value.length; ++i) {
                        if (typeof object.value[i] !== "object")
                            throw TypeError(".google.protobuf.EnumDescriptorProto.value: object expected");
                        message.value[i] = $root.google.protobuf.EnumValueDescriptorProto.fromObject(object.value[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.EnumDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.EnumOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.EnumDescriptorProto.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             */
            EnumDescriptorProto.from = EnumDescriptorProto.fromObject;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param {google.protobuf.EnumDescriptorProto} message EnumDescriptorProto
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.value = [];
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.value && message.value.length) {
                    object.value = [];
                    for (var j = 0; j < message.value.length; ++j)
                        object.value[j] = $root.google.protobuf.EnumValueDescriptorProto.toObject(message.value[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.EnumOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Creates a plain object from this EnumDescriptorProto message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumDescriptorProto.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            EnumDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumDescriptorProto;
        })();

        protobuf.EnumValueDescriptorProto = (function() {

            /**
             * Properties of an EnumValueDescriptorProto.
             * @typedef google.protobuf.EnumValueDescriptorProto$Properties
             * @type {Object}
             * @property {string} [name] EnumValueDescriptorProto name.
             * @property {number} [number] EnumValueDescriptorProto number.
             * @property {google.protobuf.EnumValueOptions$Properties} [options] EnumValueDescriptorProto options.
             */

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @exports google.protobuf.EnumValueDescriptorProto
             * @constructor
             * @param {google.protobuf.EnumValueDescriptorProto$Properties=} [properties] Properties to set
             */
            function EnumValueDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumValueDescriptorProto name.
             * @type {string}
             */
            EnumValueDescriptorProto.prototype.name = "";

            /**
             * EnumValueDescriptorProto number.
             * @type {number}
             */
            EnumValueDescriptorProto.prototype.number = 0;

            /**
             * EnumValueDescriptorProto options.
             * @type {(google.protobuf.EnumValueOptions$Properties|null)}
             */
            EnumValueDescriptorProto.prototype.options = null;

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param {google.protobuf.EnumValueDescriptorProto$Properties=} [properties] Properties to set
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto instance
             */
            EnumValueDescriptorProto.create = function create(properties) {
                return new EnumValueDescriptorProto(properties);
            };

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param {google.protobuf.EnumValueDescriptorProto$Properties} message EnumValueDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.number != null && message.hasOwnProperty("number"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.EnumValueOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param {google.protobuf.EnumValueDescriptorProto$Properties} message EnumValueDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.number = reader.int32();
                        break;
                    case 3:
                        message.options = $root.google.protobuf.EnumValueOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            EnumValueDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.EnumValueOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             */
            EnumValueDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumValueDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.EnumValueDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.number != null)
                    message.number = object.number | 0;
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.EnumValueDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.EnumValueOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.EnumValueDescriptorProto.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             */
            EnumValueDescriptorProto.from = EnumValueDescriptorProto.fromObject;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param {google.protobuf.EnumValueDescriptorProto} message EnumValueDescriptorProto
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.number = 0;
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.EnumValueOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Creates a plain object from this EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueDescriptorProto.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            EnumValueDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumValueDescriptorProto;
        })();

        protobuf.ServiceDescriptorProto = (function() {

            /**
             * Properties of a ServiceDescriptorProto.
             * @typedef google.protobuf.ServiceDescriptorProto$Properties
             * @type {Object}
             * @property {string} [name] ServiceDescriptorProto name.
             * @property {Array.<google.protobuf.MethodDescriptorProto$Properties>} [method] ServiceDescriptorProto method.
             * @property {google.protobuf.ServiceOptions$Properties} [options] ServiceDescriptorProto options.
             */

            /**
             * Constructs a new ServiceDescriptorProto.
             * @exports google.protobuf.ServiceDescriptorProto
             * @constructor
             * @param {google.protobuf.ServiceDescriptorProto$Properties=} [properties] Properties to set
             */
            function ServiceDescriptorProto(properties) {
                this.method = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceDescriptorProto name.
             * @type {string}
             */
            ServiceDescriptorProto.prototype.name = "";

            /**
             * ServiceDescriptorProto method.
             * @type {Array.<google.protobuf.MethodDescriptorProto$Properties>}
             */
            ServiceDescriptorProto.prototype.method = $util.emptyArray;

            /**
             * ServiceDescriptorProto options.
             * @type {(google.protobuf.ServiceOptions$Properties|null)}
             */
            ServiceDescriptorProto.prototype.options = null;

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param {google.protobuf.ServiceDescriptorProto$Properties=} [properties] Properties to set
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto instance
             */
            ServiceDescriptorProto.create = function create(properties) {
                return new ServiceDescriptorProto(properties);
            };

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param {google.protobuf.ServiceDescriptorProto$Properties} message ServiceDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.method != null && message.method.length)
                    for (var i = 0; i < message.method.length; ++i)
                        $root.google.protobuf.MethodDescriptorProto.encode(message.method[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.ServiceOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param {google.protobuf.ServiceDescriptorProto$Properties} message ServiceDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.method && message.method.length))
                            message.method = [];
                        message.method.push($root.google.protobuf.MethodDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.options = $root.google.protobuf.ServiceOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            ServiceDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.method != null && message.hasOwnProperty("method")) {
                    if (!Array.isArray(message.method))
                        return "method: array expected";
                    for (var i = 0; i < message.method.length; ++i) {
                        var error = $root.google.protobuf.MethodDescriptorProto.verify(message.method[i]);
                        if (error)
                            return "method." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.ServiceOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             */
            ServiceDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ServiceDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.ServiceDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.method) {
                    if (!Array.isArray(object.method))
                        throw TypeError(".google.protobuf.ServiceDescriptorProto.method: array expected");
                    message.method = [];
                    for (var i = 0; i < object.method.length; ++i) {
                        if (typeof object.method[i] !== "object")
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.method: object expected");
                        message.method[i] = $root.google.protobuf.MethodDescriptorProto.fromObject(object.method[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.ServiceDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.ServiceOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.ServiceDescriptorProto.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             */
            ServiceDescriptorProto.from = ServiceDescriptorProto.fromObject;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param {google.protobuf.ServiceDescriptorProto} message ServiceDescriptorProto
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.method = [];
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.method && message.method.length) {
                    object.method = [];
                    for (var j = 0; j < message.method.length; ++j)
                        object.method[j] = $root.google.protobuf.MethodDescriptorProto.toObject(message.method[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.ServiceOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Creates a plain object from this ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceDescriptorProto.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            ServiceDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ServiceDescriptorProto;
        })();

        protobuf.MethodDescriptorProto = (function() {

            /**
             * Properties of a MethodDescriptorProto.
             * @typedef google.protobuf.MethodDescriptorProto$Properties
             * @type {Object}
             * @property {string} [name] MethodDescriptorProto name.
             * @property {string} [inputType] MethodDescriptorProto inputType.
             * @property {string} [outputType] MethodDescriptorProto outputType.
             * @property {google.protobuf.MethodOptions$Properties} [options] MethodDescriptorProto options.
             * @property {boolean} [clientStreaming] MethodDescriptorProto clientStreaming.
             * @property {boolean} [serverStreaming] MethodDescriptorProto serverStreaming.
             */

            /**
             * Constructs a new MethodDescriptorProto.
             * @exports google.protobuf.MethodDescriptorProto
             * @constructor
             * @param {google.protobuf.MethodDescriptorProto$Properties=} [properties] Properties to set
             */
            function MethodDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MethodDescriptorProto name.
             * @type {string}
             */
            MethodDescriptorProto.prototype.name = "";

            /**
             * MethodDescriptorProto inputType.
             * @type {string}
             */
            MethodDescriptorProto.prototype.inputType = "";

            /**
             * MethodDescriptorProto outputType.
             * @type {string}
             */
            MethodDescriptorProto.prototype.outputType = "";

            /**
             * MethodDescriptorProto options.
             * @type {(google.protobuf.MethodOptions$Properties|null)}
             */
            MethodDescriptorProto.prototype.options = null;

            /**
             * MethodDescriptorProto clientStreaming.
             * @type {boolean}
             */
            MethodDescriptorProto.prototype.clientStreaming = false;

            /**
             * MethodDescriptorProto serverStreaming.
             * @type {boolean}
             */
            MethodDescriptorProto.prototype.serverStreaming = false;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param {google.protobuf.MethodDescriptorProto$Properties=} [properties] Properties to set
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto instance
             */
            MethodDescriptorProto.create = function create(properties) {
                return new MethodDescriptorProto(properties);
            };

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param {google.protobuf.MethodDescriptorProto$Properties} message MethodDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.inputType != null && message.hasOwnProperty("inputType"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.inputType);
                if (message.outputType != null && message.hasOwnProperty("outputType"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.outputType);
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.MethodOptions.encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.clientStreaming);
                if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.serverStreaming);
                return writer;
            };

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param {google.protobuf.MethodDescriptorProto$Properties} message MethodDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.inputType = reader.string();
                        break;
                    case 3:
                        message.outputType = reader.string();
                        break;
                    case 4:
                        message.options = $root.google.protobuf.MethodOptions.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.clientStreaming = reader.bool();
                        break;
                    case 6:
                        message.serverStreaming = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MethodDescriptorProto message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            MethodDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.inputType != null && message.hasOwnProperty("inputType"))
                    if (!$util.isString(message.inputType))
                        return "inputType: string expected";
                if (message.outputType != null && message.hasOwnProperty("outputType"))
                    if (!$util.isString(message.outputType))
                        return "outputType: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.MethodOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                    if (typeof message.clientStreaming !== "boolean")
                        return "clientStreaming: boolean expected";
                if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                    if (typeof message.serverStreaming !== "boolean")
                        return "serverStreaming: boolean expected";
                return null;
            };

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             */
            MethodDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MethodDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.MethodDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.inputType != null)
                    message.inputType = String(object.inputType);
                if (object.outputType != null)
                    message.outputType = String(object.outputType);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.MethodDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.MethodOptions.fromObject(object.options);
                }
                if (object.clientStreaming != null)
                    message.clientStreaming = Boolean(object.clientStreaming);
                if (object.serverStreaming != null)
                    message.serverStreaming = Boolean(object.serverStreaming);
                return message;
            };

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.MethodDescriptorProto.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             */
            MethodDescriptorProto.from = MethodDescriptorProto.fromObject;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param {google.protobuf.MethodDescriptorProto} message MethodDescriptorProto
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.inputType = "";
                    object.outputType = "";
                    object.options = null;
                    object.clientStreaming = false;
                    object.serverStreaming = false;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.inputType != null && message.hasOwnProperty("inputType"))
                    object.inputType = message.inputType;
                if (message.outputType != null && message.hasOwnProperty("outputType"))
                    object.outputType = message.outputType;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.MethodOptions.toObject(message.options, options);
                if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                    object.clientStreaming = message.clientStreaming;
                if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                    object.serverStreaming = message.serverStreaming;
                return object;
            };

            /**
             * Creates a plain object from this MethodDescriptorProto message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodDescriptorProto.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            MethodDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MethodDescriptorProto;
        })();

        protobuf.FileOptions = (function() {

            /**
             * Properties of a FileOptions.
             * @typedef google.protobuf.FileOptions$Properties
             * @type {Object}
             * @property {string} [javaPackage] FileOptions javaPackage.
             * @property {string} [javaOuterClassname] FileOptions javaOuterClassname.
             * @property {boolean} [javaMultipleFiles] FileOptions javaMultipleFiles.
             * @property {boolean} [javaGenerateEqualsAndHash] FileOptions javaGenerateEqualsAndHash.
             * @property {boolean} [javaStringCheckUtf8] FileOptions javaStringCheckUtf8.
             * @property {google.protobuf.FileOptions.OptimizeMode} [optimizeFor] FileOptions optimizeFor.
             * @property {string} [goPackage] FileOptions goPackage.
             * @property {boolean} [ccGenericServices] FileOptions ccGenericServices.
             * @property {boolean} [javaGenericServices] FileOptions javaGenericServices.
             * @property {boolean} [pyGenericServices] FileOptions pyGenericServices.
             * @property {boolean} [deprecated] FileOptions deprecated.
             * @property {boolean} [ccEnableArenas] FileOptions ccEnableArenas.
             * @property {string} [objcClassPrefix] FileOptions objcClassPrefix.
             * @property {string} [csharpNamespace] FileOptions csharpNamespace.
             * @property {Array.<google.protobuf.UninterpretedOption$Properties>} [uninterpretedOption] FileOptions uninterpretedOption.
             * @property {boolean} [".gogoproto.goprotoGettersAll"] FileOptions .gogoproto.goprotoGettersAll.
             * @property {boolean} [".gogoproto.goprotoEnumPrefixAll"] FileOptions .gogoproto.goprotoEnumPrefixAll.
             * @property {boolean} [".gogoproto.goprotoStringerAll"] FileOptions .gogoproto.goprotoStringerAll.
             * @property {boolean} [".gogoproto.verboseEqualAll"] FileOptions .gogoproto.verboseEqualAll.
             * @property {boolean} [".gogoproto.faceAll"] FileOptions .gogoproto.faceAll.
             * @property {boolean} [".gogoproto.gostringAll"] FileOptions .gogoproto.gostringAll.
             * @property {boolean} [".gogoproto.populateAll"] FileOptions .gogoproto.populateAll.
             * @property {boolean} [".gogoproto.stringerAll"] FileOptions .gogoproto.stringerAll.
             * @property {boolean} [".gogoproto.onlyoneAll"] FileOptions .gogoproto.onlyoneAll.
             * @property {boolean} [".gogoproto.equalAll"] FileOptions .gogoproto.equalAll.
             * @property {boolean} [".gogoproto.descriptionAll"] FileOptions .gogoproto.descriptionAll.
             * @property {boolean} [".gogoproto.testgenAll"] FileOptions .gogoproto.testgenAll.
             * @property {boolean} [".gogoproto.benchgenAll"] FileOptions .gogoproto.benchgenAll.
             * @property {boolean} [".gogoproto.marshalerAll"] FileOptions .gogoproto.marshalerAll.
             * @property {boolean} [".gogoproto.unmarshalerAll"] FileOptions .gogoproto.unmarshalerAll.
             * @property {boolean} [".gogoproto.stableMarshalerAll"] FileOptions .gogoproto.stableMarshalerAll.
             * @property {boolean} [".gogoproto.sizerAll"] FileOptions .gogoproto.sizerAll.
             * @property {boolean} [".gogoproto.goprotoEnumStringerAll"] FileOptions .gogoproto.goprotoEnumStringerAll.
             * @property {boolean} [".gogoproto.enumStringerAll"] FileOptions .gogoproto.enumStringerAll.
             * @property {boolean} [".gogoproto.unsafeMarshalerAll"] FileOptions .gogoproto.unsafeMarshalerAll.
             * @property {boolean} [".gogoproto.unsafeUnmarshalerAll"] FileOptions .gogoproto.unsafeUnmarshalerAll.
             * @property {boolean} [".gogoproto.goprotoExtensionsMapAll"] FileOptions .gogoproto.goprotoExtensionsMapAll.
             * @property {boolean} [".gogoproto.goprotoUnrecognizedAll"] FileOptions .gogoproto.goprotoUnrecognizedAll.
             * @property {boolean} [".gogoproto.gogoprotoImport"] FileOptions .gogoproto.gogoprotoImport.
             * @property {boolean} [".gogoproto.protosizerAll"] FileOptions .gogoproto.protosizerAll.
             * @property {boolean} [".gogoproto.compareAll"] FileOptions .gogoproto.compareAll.
             * @property {boolean} [".gogoproto.typedeclAll"] FileOptions .gogoproto.typedeclAll.
             * @property {boolean} [".gogoproto.enumdeclAll"] FileOptions .gogoproto.enumdeclAll.
             * @property {boolean} [".gogoproto.goprotoRegistration"] FileOptions .gogoproto.goprotoRegistration.
             */

            /**
             * Constructs a new FileOptions.
             * @exports google.protobuf.FileOptions
             * @constructor
             * @param {google.protobuf.FileOptions$Properties=} [properties] Properties to set
             */
            function FileOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileOptions javaPackage.
             * @type {string}
             */
            FileOptions.prototype.javaPackage = "";

            /**
             * FileOptions javaOuterClassname.
             * @type {string}
             */
            FileOptions.prototype.javaOuterClassname = "";

            /**
             * FileOptions javaMultipleFiles.
             * @type {boolean}
             */
            FileOptions.prototype.javaMultipleFiles = false;

            /**
             * FileOptions javaGenerateEqualsAndHash.
             * @type {boolean}
             */
            FileOptions.prototype.javaGenerateEqualsAndHash = false;

            /**
             * FileOptions javaStringCheckUtf8.
             * @type {boolean}
             */
            FileOptions.prototype.javaStringCheckUtf8 = false;

            /**
             * FileOptions optimizeFor.
             * @type {google.protobuf.FileOptions.OptimizeMode}
             */
            FileOptions.prototype.optimizeFor = 1;

            /**
             * FileOptions goPackage.
             * @type {string}
             */
            FileOptions.prototype.goPackage = "";

            /**
             * FileOptions ccGenericServices.
             * @type {boolean}
             */
            FileOptions.prototype.ccGenericServices = false;

            /**
             * FileOptions javaGenericServices.
             * @type {boolean}
             */
            FileOptions.prototype.javaGenericServices = false;

            /**
             * FileOptions pyGenericServices.
             * @type {boolean}
             */
            FileOptions.prototype.pyGenericServices = false;

            /**
             * FileOptions deprecated.
             * @type {boolean}
             */
            FileOptions.prototype.deprecated = false;

            /**
             * FileOptions ccEnableArenas.
             * @type {boolean}
             */
            FileOptions.prototype.ccEnableArenas = false;

            /**
             * FileOptions objcClassPrefix.
             * @type {string}
             */
            FileOptions.prototype.objcClassPrefix = "";

            /**
             * FileOptions csharpNamespace.
             * @type {string}
             */
            FileOptions.prototype.csharpNamespace = "";

            /**
             * FileOptions uninterpretedOption.
             * @type {Array.<google.protobuf.UninterpretedOption$Properties>}
             */
            FileOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * FileOptions .gogoproto.goprotoGettersAll.
             * @type {boolean}
             */
            FileOptions.prototype[".gogoproto.goprotoGettersAll"] = false;

            /**
             * FileOptions .gogoproto.goprotoEnumPrefixAll.
             * @type {boolean}
             */
            FileOptions.prototype[".gogoproto.goprotoEnumPrefixAll"] = false;

            /**
             * FileOptions .gogoproto.goprotoStringerAll.
             * @type {boolean}
             */
            FileOptions.prototype[".gogoproto.goprotoStringerAll"] = false;

            /**
             * FileOptions .gogoproto.verboseEqualAll.
             * @type {boolean}
             */
            FileOptions.prototype[".gogoproto.verboseEqualAll"] = false;

            /**
             * FileOptions .gogoproto.faceAll.
             * @type {boolean}
             */
            FileOptions.prototype[".gogoproto.faceAll"] = false;

            /**
             * FileOptions .gogoproto.gostringAll.
             * @type {boolean}
             */
            FileOptions.prototype[".gogoproto.gostringAll"] = false;

            /**
             * FileOptions .gogoproto.populateAll.
             * @type {boolean}
             */
            FileOptions.prototype[".gogoproto.populateAll"] = false;

            /**
             * FileOptions .gogoproto.stringerAll.
             * @type {boolean}
             */
            FileOptions.prototype[".gogoproto.stringerAll"] = false;

            /**
             * FileOptions .gogoproto.onlyoneAll.
             * @type {boolean}
             */
            FileOptions.prototype[".gogoproto.onlyoneAll"] = false;

            /**
             * FileOptions .gogoproto.equalAll.
             * @type {boolean}
             */
            FileOptions.prototype[".gogoproto.equalAll"] = false;

            /**
             * FileOptions .gogoproto.descriptionAll.
             * @type {boolean}
             */
            FileOptions.prototype[".gogoproto.descriptionAll"] = false;

            /**
             * FileOptions .gogoproto.testgenAll.
             * @type {boolean}
             */
            FileOptions.prototype[".gogoproto.testgenAll"] = false;

            /**
             * FileOptions .gogoproto.benchgenAll.
             * @type {boolean}
             */
            FileOptions.prototype[".gogoproto.benchgenAll"] = false;

            /**
             * FileOptions .gogoproto.marshalerAll.
             * @type {boolean}
             */
            FileOptions.prototype[".gogoproto.marshalerAll"] = false;

            /**
             * FileOptions .gogoproto.unmarshalerAll.
             * @type {boolean}
             */
            FileOptions.prototype[".gogoproto.unmarshalerAll"] = false;

            /**
             * FileOptions .gogoproto.stableMarshalerAll.
             * @type {boolean}
             */
            FileOptions.prototype[".gogoproto.stableMarshalerAll"] = false;

            /**
             * FileOptions .gogoproto.sizerAll.
             * @type {boolean}
             */
            FileOptions.prototype[".gogoproto.sizerAll"] = false;

            /**
             * FileOptions .gogoproto.goprotoEnumStringerAll.
             * @type {boolean}
             */
            FileOptions.prototype[".gogoproto.goprotoEnumStringerAll"] = false;

            /**
             * FileOptions .gogoproto.enumStringerAll.
             * @type {boolean}
             */
            FileOptions.prototype[".gogoproto.enumStringerAll"] = false;

            /**
             * FileOptions .gogoproto.unsafeMarshalerAll.
             * @type {boolean}
             */
            FileOptions.prototype[".gogoproto.unsafeMarshalerAll"] = false;

            /**
             * FileOptions .gogoproto.unsafeUnmarshalerAll.
             * @type {boolean}
             */
            FileOptions.prototype[".gogoproto.unsafeUnmarshalerAll"] = false;

            /**
             * FileOptions .gogoproto.goprotoExtensionsMapAll.
             * @type {boolean}
             */
            FileOptions.prototype[".gogoproto.goprotoExtensionsMapAll"] = false;

            /**
             * FileOptions .gogoproto.goprotoUnrecognizedAll.
             * @type {boolean}
             */
            FileOptions.prototype[".gogoproto.goprotoUnrecognizedAll"] = false;

            /**
             * FileOptions .gogoproto.gogoprotoImport.
             * @type {boolean}
             */
            FileOptions.prototype[".gogoproto.gogoprotoImport"] = false;

            /**
             * FileOptions .gogoproto.protosizerAll.
             * @type {boolean}
             */
            FileOptions.prototype[".gogoproto.protosizerAll"] = false;

            /**
             * FileOptions .gogoproto.compareAll.
             * @type {boolean}
             */
            FileOptions.prototype[".gogoproto.compareAll"] = false;

            /**
             * FileOptions .gogoproto.typedeclAll.
             * @type {boolean}
             */
            FileOptions.prototype[".gogoproto.typedeclAll"] = false;

            /**
             * FileOptions .gogoproto.enumdeclAll.
             * @type {boolean}
             */
            FileOptions.prototype[".gogoproto.enumdeclAll"] = false;

            /**
             * FileOptions .gogoproto.goprotoRegistration.
             * @type {boolean}
             */
            FileOptions.prototype[".gogoproto.goprotoRegistration"] = false;

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param {google.protobuf.FileOptions$Properties=} [properties] Properties to set
             * @returns {google.protobuf.FileOptions} FileOptions instance
             */
            FileOptions.create = function create(properties) {
                return new FileOptions(properties);
            };

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param {google.protobuf.FileOptions$Properties} message FileOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.javaPackage);
                if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.javaOuterClassname);
                if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                    writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.optimizeFor);
                if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.javaMultipleFiles);
                if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.goPackage);
                if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                    writer.uint32(/* id 16, wireType 0 =*/128).bool(message.ccGenericServices);
                if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                    writer.uint32(/* id 17, wireType 0 =*/136).bool(message.javaGenericServices);
                if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                    writer.uint32(/* id 18, wireType 0 =*/144).bool(message.pyGenericServices);
                if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                    writer.uint32(/* id 20, wireType 0 =*/160).bool(message.javaGenerateEqualsAndHash);
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 23, wireType 0 =*/184).bool(message.deprecated);
                if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                    writer.uint32(/* id 27, wireType 0 =*/216).bool(message.javaStringCheckUtf8);
                if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                    writer.uint32(/* id 31, wireType 0 =*/248).bool(message.ccEnableArenas);
                if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                    writer.uint32(/* id 36, wireType 2 =*/290).string(message.objcClassPrefix);
                if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                    writer.uint32(/* id 37, wireType 2 =*/298).string(message.csharpNamespace);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".gogoproto.goprotoGettersAll"] != null && message.hasOwnProperty(".gogoproto.goprotoGettersAll"))
                    writer.uint32(/* id 63001, wireType 0 =*/504008).bool(message[".gogoproto.goprotoGettersAll"]);
                if (message[".gogoproto.goprotoEnumPrefixAll"] != null && message.hasOwnProperty(".gogoproto.goprotoEnumPrefixAll"))
                    writer.uint32(/* id 63002, wireType 0 =*/504016).bool(message[".gogoproto.goprotoEnumPrefixAll"]);
                if (message[".gogoproto.goprotoStringerAll"] != null && message.hasOwnProperty(".gogoproto.goprotoStringerAll"))
                    writer.uint32(/* id 63003, wireType 0 =*/504024).bool(message[".gogoproto.goprotoStringerAll"]);
                if (message[".gogoproto.verboseEqualAll"] != null && message.hasOwnProperty(".gogoproto.verboseEqualAll"))
                    writer.uint32(/* id 63004, wireType 0 =*/504032).bool(message[".gogoproto.verboseEqualAll"]);
                if (message[".gogoproto.faceAll"] != null && message.hasOwnProperty(".gogoproto.faceAll"))
                    writer.uint32(/* id 63005, wireType 0 =*/504040).bool(message[".gogoproto.faceAll"]);
                if (message[".gogoproto.gostringAll"] != null && message.hasOwnProperty(".gogoproto.gostringAll"))
                    writer.uint32(/* id 63006, wireType 0 =*/504048).bool(message[".gogoproto.gostringAll"]);
                if (message[".gogoproto.populateAll"] != null && message.hasOwnProperty(".gogoproto.populateAll"))
                    writer.uint32(/* id 63007, wireType 0 =*/504056).bool(message[".gogoproto.populateAll"]);
                if (message[".gogoproto.stringerAll"] != null && message.hasOwnProperty(".gogoproto.stringerAll"))
                    writer.uint32(/* id 63008, wireType 0 =*/504064).bool(message[".gogoproto.stringerAll"]);
                if (message[".gogoproto.onlyoneAll"] != null && message.hasOwnProperty(".gogoproto.onlyoneAll"))
                    writer.uint32(/* id 63009, wireType 0 =*/504072).bool(message[".gogoproto.onlyoneAll"]);
                if (message[".gogoproto.equalAll"] != null && message.hasOwnProperty(".gogoproto.equalAll"))
                    writer.uint32(/* id 63013, wireType 0 =*/504104).bool(message[".gogoproto.equalAll"]);
                if (message[".gogoproto.descriptionAll"] != null && message.hasOwnProperty(".gogoproto.descriptionAll"))
                    writer.uint32(/* id 63014, wireType 0 =*/504112).bool(message[".gogoproto.descriptionAll"]);
                if (message[".gogoproto.testgenAll"] != null && message.hasOwnProperty(".gogoproto.testgenAll"))
                    writer.uint32(/* id 63015, wireType 0 =*/504120).bool(message[".gogoproto.testgenAll"]);
                if (message[".gogoproto.benchgenAll"] != null && message.hasOwnProperty(".gogoproto.benchgenAll"))
                    writer.uint32(/* id 63016, wireType 0 =*/504128).bool(message[".gogoproto.benchgenAll"]);
                if (message[".gogoproto.marshalerAll"] != null && message.hasOwnProperty(".gogoproto.marshalerAll"))
                    writer.uint32(/* id 63017, wireType 0 =*/504136).bool(message[".gogoproto.marshalerAll"]);
                if (message[".gogoproto.unmarshalerAll"] != null && message.hasOwnProperty(".gogoproto.unmarshalerAll"))
                    writer.uint32(/* id 63018, wireType 0 =*/504144).bool(message[".gogoproto.unmarshalerAll"]);
                if (message[".gogoproto.stableMarshalerAll"] != null && message.hasOwnProperty(".gogoproto.stableMarshalerAll"))
                    writer.uint32(/* id 63019, wireType 0 =*/504152).bool(message[".gogoproto.stableMarshalerAll"]);
                if (message[".gogoproto.sizerAll"] != null && message.hasOwnProperty(".gogoproto.sizerAll"))
                    writer.uint32(/* id 63020, wireType 0 =*/504160).bool(message[".gogoproto.sizerAll"]);
                if (message[".gogoproto.goprotoEnumStringerAll"] != null && message.hasOwnProperty(".gogoproto.goprotoEnumStringerAll"))
                    writer.uint32(/* id 63021, wireType 0 =*/504168).bool(message[".gogoproto.goprotoEnumStringerAll"]);
                if (message[".gogoproto.enumStringerAll"] != null && message.hasOwnProperty(".gogoproto.enumStringerAll"))
                    writer.uint32(/* id 63022, wireType 0 =*/504176).bool(message[".gogoproto.enumStringerAll"]);
                if (message[".gogoproto.unsafeMarshalerAll"] != null && message.hasOwnProperty(".gogoproto.unsafeMarshalerAll"))
                    writer.uint32(/* id 63023, wireType 0 =*/504184).bool(message[".gogoproto.unsafeMarshalerAll"]);
                if (message[".gogoproto.unsafeUnmarshalerAll"] != null && message.hasOwnProperty(".gogoproto.unsafeUnmarshalerAll"))
                    writer.uint32(/* id 63024, wireType 0 =*/504192).bool(message[".gogoproto.unsafeUnmarshalerAll"]);
                if (message[".gogoproto.goprotoExtensionsMapAll"] != null && message.hasOwnProperty(".gogoproto.goprotoExtensionsMapAll"))
                    writer.uint32(/* id 63025, wireType 0 =*/504200).bool(message[".gogoproto.goprotoExtensionsMapAll"]);
                if (message[".gogoproto.goprotoUnrecognizedAll"] != null && message.hasOwnProperty(".gogoproto.goprotoUnrecognizedAll"))
                    writer.uint32(/* id 63026, wireType 0 =*/504208).bool(message[".gogoproto.goprotoUnrecognizedAll"]);
                if (message[".gogoproto.gogoprotoImport"] != null && message.hasOwnProperty(".gogoproto.gogoprotoImport"))
                    writer.uint32(/* id 63027, wireType 0 =*/504216).bool(message[".gogoproto.gogoprotoImport"]);
                if (message[".gogoproto.protosizerAll"] != null && message.hasOwnProperty(".gogoproto.protosizerAll"))
                    writer.uint32(/* id 63028, wireType 0 =*/504224).bool(message[".gogoproto.protosizerAll"]);
                if (message[".gogoproto.compareAll"] != null && message.hasOwnProperty(".gogoproto.compareAll"))
                    writer.uint32(/* id 63029, wireType 0 =*/504232).bool(message[".gogoproto.compareAll"]);
                if (message[".gogoproto.typedeclAll"] != null && message.hasOwnProperty(".gogoproto.typedeclAll"))
                    writer.uint32(/* id 63030, wireType 0 =*/504240).bool(message[".gogoproto.typedeclAll"]);
                if (message[".gogoproto.enumdeclAll"] != null && message.hasOwnProperty(".gogoproto.enumdeclAll"))
                    writer.uint32(/* id 63031, wireType 0 =*/504248).bool(message[".gogoproto.enumdeclAll"]);
                if (message[".gogoproto.goprotoRegistration"] != null && message.hasOwnProperty(".gogoproto.goprotoRegistration"))
                    writer.uint32(/* id 63032, wireType 0 =*/504256).bool(message[".gogoproto.goprotoRegistration"]);
                return writer;
            };

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param {google.protobuf.FileOptions$Properties} message FileOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileOptions} FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.javaPackage = reader.string();
                        break;
                    case 8:
                        message.javaOuterClassname = reader.string();
                        break;
                    case 10:
                        message.javaMultipleFiles = reader.bool();
                        break;
                    case 20:
                        message.javaGenerateEqualsAndHash = reader.bool();
                        break;
                    case 27:
                        message.javaStringCheckUtf8 = reader.bool();
                        break;
                    case 9:
                        message.optimizeFor = reader.uint32();
                        break;
                    case 11:
                        message.goPackage = reader.string();
                        break;
                    case 16:
                        message.ccGenericServices = reader.bool();
                        break;
                    case 17:
                        message.javaGenericServices = reader.bool();
                        break;
                    case 18:
                        message.pyGenericServices = reader.bool();
                        break;
                    case 23:
                        message.deprecated = reader.bool();
                        break;
                    case 31:
                        message.ccEnableArenas = reader.bool();
                        break;
                    case 36:
                        message.objcClassPrefix = reader.string();
                        break;
                    case 37:
                        message.csharpNamespace = reader.string();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    case 63001:
                        message[".gogoproto.goprotoGettersAll"] = reader.bool();
                        break;
                    case 63002:
                        message[".gogoproto.goprotoEnumPrefixAll"] = reader.bool();
                        break;
                    case 63003:
                        message[".gogoproto.goprotoStringerAll"] = reader.bool();
                        break;
                    case 63004:
                        message[".gogoproto.verboseEqualAll"] = reader.bool();
                        break;
                    case 63005:
                        message[".gogoproto.faceAll"] = reader.bool();
                        break;
                    case 63006:
                        message[".gogoproto.gostringAll"] = reader.bool();
                        break;
                    case 63007:
                        message[".gogoproto.populateAll"] = reader.bool();
                        break;
                    case 63008:
                        message[".gogoproto.stringerAll"] = reader.bool();
                        break;
                    case 63009:
                        message[".gogoproto.onlyoneAll"] = reader.bool();
                        break;
                    case 63013:
                        message[".gogoproto.equalAll"] = reader.bool();
                        break;
                    case 63014:
                        message[".gogoproto.descriptionAll"] = reader.bool();
                        break;
                    case 63015:
                        message[".gogoproto.testgenAll"] = reader.bool();
                        break;
                    case 63016:
                        message[".gogoproto.benchgenAll"] = reader.bool();
                        break;
                    case 63017:
                        message[".gogoproto.marshalerAll"] = reader.bool();
                        break;
                    case 63018:
                        message[".gogoproto.unmarshalerAll"] = reader.bool();
                        break;
                    case 63019:
                        message[".gogoproto.stableMarshalerAll"] = reader.bool();
                        break;
                    case 63020:
                        message[".gogoproto.sizerAll"] = reader.bool();
                        break;
                    case 63021:
                        message[".gogoproto.goprotoEnumStringerAll"] = reader.bool();
                        break;
                    case 63022:
                        message[".gogoproto.enumStringerAll"] = reader.bool();
                        break;
                    case 63023:
                        message[".gogoproto.unsafeMarshalerAll"] = reader.bool();
                        break;
                    case 63024:
                        message[".gogoproto.unsafeUnmarshalerAll"] = reader.bool();
                        break;
                    case 63025:
                        message[".gogoproto.goprotoExtensionsMapAll"] = reader.bool();
                        break;
                    case 63026:
                        message[".gogoproto.goprotoUnrecognizedAll"] = reader.bool();
                        break;
                    case 63027:
                        message[".gogoproto.gogoprotoImport"] = reader.bool();
                        break;
                    case 63028:
                        message[".gogoproto.protosizerAll"] = reader.bool();
                        break;
                    case 63029:
                        message[".gogoproto.compareAll"] = reader.bool();
                        break;
                    case 63030:
                        message[".gogoproto.typedeclAll"] = reader.bool();
                        break;
                    case 63031:
                        message[".gogoproto.enumdeclAll"] = reader.bool();
                        break;
                    case 63032:
                        message[".gogoproto.goprotoRegistration"] = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileOptions} FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileOptions message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            FileOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                    if (!$util.isString(message.javaPackage))
                        return "javaPackage: string expected";
                if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                    if (!$util.isString(message.javaOuterClassname))
                        return "javaOuterClassname: string expected";
                if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                    if (typeof message.javaMultipleFiles !== "boolean")
                        return "javaMultipleFiles: boolean expected";
                if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                    if (typeof message.javaGenerateEqualsAndHash !== "boolean")
                        return "javaGenerateEqualsAndHash: boolean expected";
                if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                    if (typeof message.javaStringCheckUtf8 !== "boolean")
                        return "javaStringCheckUtf8: boolean expected";
                if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                    switch (message.optimizeFor) {
                    default:
                        return "optimizeFor: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                    if (!$util.isString(message.goPackage))
                        return "goPackage: string expected";
                if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                    if (typeof message.ccGenericServices !== "boolean")
                        return "ccGenericServices: boolean expected";
                if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                    if (typeof message.javaGenericServices !== "boolean")
                        return "javaGenericServices: boolean expected";
                if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                    if (typeof message.pyGenericServices !== "boolean")
                        return "pyGenericServices: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                    if (typeof message.ccEnableArenas !== "boolean")
                        return "ccEnableArenas: boolean expected";
                if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                    if (!$util.isString(message.objcClassPrefix))
                        return "objcClassPrefix: string expected";
                if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                    if (!$util.isString(message.csharpNamespace))
                        return "csharpNamespace: string expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                if (message[".gogoproto.goprotoGettersAll"] != null && message.hasOwnProperty(".gogoproto.goprotoGettersAll"))
                    if (typeof message[".gogoproto.goprotoGettersAll"] !== "boolean")
                        return ".gogoproto.goprotoGettersAll: boolean expected";
                if (message[".gogoproto.goprotoEnumPrefixAll"] != null && message.hasOwnProperty(".gogoproto.goprotoEnumPrefixAll"))
                    if (typeof message[".gogoproto.goprotoEnumPrefixAll"] !== "boolean")
                        return ".gogoproto.goprotoEnumPrefixAll: boolean expected";
                if (message[".gogoproto.goprotoStringerAll"] != null && message.hasOwnProperty(".gogoproto.goprotoStringerAll"))
                    if (typeof message[".gogoproto.goprotoStringerAll"] !== "boolean")
                        return ".gogoproto.goprotoStringerAll: boolean expected";
                if (message[".gogoproto.verboseEqualAll"] != null && message.hasOwnProperty(".gogoproto.verboseEqualAll"))
                    if (typeof message[".gogoproto.verboseEqualAll"] !== "boolean")
                        return ".gogoproto.verboseEqualAll: boolean expected";
                if (message[".gogoproto.faceAll"] != null && message.hasOwnProperty(".gogoproto.faceAll"))
                    if (typeof message[".gogoproto.faceAll"] !== "boolean")
                        return ".gogoproto.faceAll: boolean expected";
                if (message[".gogoproto.gostringAll"] != null && message.hasOwnProperty(".gogoproto.gostringAll"))
                    if (typeof message[".gogoproto.gostringAll"] !== "boolean")
                        return ".gogoproto.gostringAll: boolean expected";
                if (message[".gogoproto.populateAll"] != null && message.hasOwnProperty(".gogoproto.populateAll"))
                    if (typeof message[".gogoproto.populateAll"] !== "boolean")
                        return ".gogoproto.populateAll: boolean expected";
                if (message[".gogoproto.stringerAll"] != null && message.hasOwnProperty(".gogoproto.stringerAll"))
                    if (typeof message[".gogoproto.stringerAll"] !== "boolean")
                        return ".gogoproto.stringerAll: boolean expected";
                if (message[".gogoproto.onlyoneAll"] != null && message.hasOwnProperty(".gogoproto.onlyoneAll"))
                    if (typeof message[".gogoproto.onlyoneAll"] !== "boolean")
                        return ".gogoproto.onlyoneAll: boolean expected";
                if (message[".gogoproto.equalAll"] != null && message.hasOwnProperty(".gogoproto.equalAll"))
                    if (typeof message[".gogoproto.equalAll"] !== "boolean")
                        return ".gogoproto.equalAll: boolean expected";
                if (message[".gogoproto.descriptionAll"] != null && message.hasOwnProperty(".gogoproto.descriptionAll"))
                    if (typeof message[".gogoproto.descriptionAll"] !== "boolean")
                        return ".gogoproto.descriptionAll: boolean expected";
                if (message[".gogoproto.testgenAll"] != null && message.hasOwnProperty(".gogoproto.testgenAll"))
                    if (typeof message[".gogoproto.testgenAll"] !== "boolean")
                        return ".gogoproto.testgenAll: boolean expected";
                if (message[".gogoproto.benchgenAll"] != null && message.hasOwnProperty(".gogoproto.benchgenAll"))
                    if (typeof message[".gogoproto.benchgenAll"] !== "boolean")
                        return ".gogoproto.benchgenAll: boolean expected";
                if (message[".gogoproto.marshalerAll"] != null && message.hasOwnProperty(".gogoproto.marshalerAll"))
                    if (typeof message[".gogoproto.marshalerAll"] !== "boolean")
                        return ".gogoproto.marshalerAll: boolean expected";
                if (message[".gogoproto.unmarshalerAll"] != null && message.hasOwnProperty(".gogoproto.unmarshalerAll"))
                    if (typeof message[".gogoproto.unmarshalerAll"] !== "boolean")
                        return ".gogoproto.unmarshalerAll: boolean expected";
                if (message[".gogoproto.stableMarshalerAll"] != null && message.hasOwnProperty(".gogoproto.stableMarshalerAll"))
                    if (typeof message[".gogoproto.stableMarshalerAll"] !== "boolean")
                        return ".gogoproto.stableMarshalerAll: boolean expected";
                if (message[".gogoproto.sizerAll"] != null && message.hasOwnProperty(".gogoproto.sizerAll"))
                    if (typeof message[".gogoproto.sizerAll"] !== "boolean")
                        return ".gogoproto.sizerAll: boolean expected";
                if (message[".gogoproto.goprotoEnumStringerAll"] != null && message.hasOwnProperty(".gogoproto.goprotoEnumStringerAll"))
                    if (typeof message[".gogoproto.goprotoEnumStringerAll"] !== "boolean")
                        return ".gogoproto.goprotoEnumStringerAll: boolean expected";
                if (message[".gogoproto.enumStringerAll"] != null && message.hasOwnProperty(".gogoproto.enumStringerAll"))
                    if (typeof message[".gogoproto.enumStringerAll"] !== "boolean")
                        return ".gogoproto.enumStringerAll: boolean expected";
                if (message[".gogoproto.unsafeMarshalerAll"] != null && message.hasOwnProperty(".gogoproto.unsafeMarshalerAll"))
                    if (typeof message[".gogoproto.unsafeMarshalerAll"] !== "boolean")
                        return ".gogoproto.unsafeMarshalerAll: boolean expected";
                if (message[".gogoproto.unsafeUnmarshalerAll"] != null && message.hasOwnProperty(".gogoproto.unsafeUnmarshalerAll"))
                    if (typeof message[".gogoproto.unsafeUnmarshalerAll"] !== "boolean")
                        return ".gogoproto.unsafeUnmarshalerAll: boolean expected";
                if (message[".gogoproto.goprotoExtensionsMapAll"] != null && message.hasOwnProperty(".gogoproto.goprotoExtensionsMapAll"))
                    if (typeof message[".gogoproto.goprotoExtensionsMapAll"] !== "boolean")
                        return ".gogoproto.goprotoExtensionsMapAll: boolean expected";
                if (message[".gogoproto.goprotoUnrecognizedAll"] != null && message.hasOwnProperty(".gogoproto.goprotoUnrecognizedAll"))
                    if (typeof message[".gogoproto.goprotoUnrecognizedAll"] !== "boolean")
                        return ".gogoproto.goprotoUnrecognizedAll: boolean expected";
                if (message[".gogoproto.gogoprotoImport"] != null && message.hasOwnProperty(".gogoproto.gogoprotoImport"))
                    if (typeof message[".gogoproto.gogoprotoImport"] !== "boolean")
                        return ".gogoproto.gogoprotoImport: boolean expected";
                if (message[".gogoproto.protosizerAll"] != null && message.hasOwnProperty(".gogoproto.protosizerAll"))
                    if (typeof message[".gogoproto.protosizerAll"] !== "boolean")
                        return ".gogoproto.protosizerAll: boolean expected";
                if (message[".gogoproto.compareAll"] != null && message.hasOwnProperty(".gogoproto.compareAll"))
                    if (typeof message[".gogoproto.compareAll"] !== "boolean")
                        return ".gogoproto.compareAll: boolean expected";
                if (message[".gogoproto.typedeclAll"] != null && message.hasOwnProperty(".gogoproto.typedeclAll"))
                    if (typeof message[".gogoproto.typedeclAll"] !== "boolean")
                        return ".gogoproto.typedeclAll: boolean expected";
                if (message[".gogoproto.enumdeclAll"] != null && message.hasOwnProperty(".gogoproto.enumdeclAll"))
                    if (typeof message[".gogoproto.enumdeclAll"] !== "boolean")
                        return ".gogoproto.enumdeclAll: boolean expected";
                if (message[".gogoproto.goprotoRegistration"] != null && message.hasOwnProperty(".gogoproto.goprotoRegistration"))
                    if (typeof message[".gogoproto.goprotoRegistration"] !== "boolean")
                        return ".gogoproto.goprotoRegistration: boolean expected";
                return null;
            };

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileOptions} FileOptions
             */
            FileOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileOptions)
                    return object;
                var message = new $root.google.protobuf.FileOptions();
                if (object.javaPackage != null)
                    message.javaPackage = String(object.javaPackage);
                if (object.javaOuterClassname != null)
                    message.javaOuterClassname = String(object.javaOuterClassname);
                if (object.javaMultipleFiles != null)
                    message.javaMultipleFiles = Boolean(object.javaMultipleFiles);
                if (object.javaGenerateEqualsAndHash != null)
                    message.javaGenerateEqualsAndHash = Boolean(object.javaGenerateEqualsAndHash);
                if (object.javaStringCheckUtf8 != null)
                    message.javaStringCheckUtf8 = Boolean(object.javaStringCheckUtf8);
                switch (object.optimizeFor) {
                case "SPEED":
                case 1:
                    message.optimizeFor = 1;
                    break;
                case "CODE_SIZE":
                case 2:
                    message.optimizeFor = 2;
                    break;
                case "LITE_RUNTIME":
                case 3:
                    message.optimizeFor = 3;
                    break;
                }
                if (object.goPackage != null)
                    message.goPackage = String(object.goPackage);
                if (object.ccGenericServices != null)
                    message.ccGenericServices = Boolean(object.ccGenericServices);
                if (object.javaGenericServices != null)
                    message.javaGenericServices = Boolean(object.javaGenericServices);
                if (object.pyGenericServices != null)
                    message.pyGenericServices = Boolean(object.pyGenericServices);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.ccEnableArenas != null)
                    message.ccEnableArenas = Boolean(object.ccEnableArenas);
                if (object.objcClassPrefix != null)
                    message.objcClassPrefix = String(object.objcClassPrefix);
                if (object.csharpNamespace != null)
                    message.csharpNamespace = String(object.csharpNamespace);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                if (object[".gogoproto.goprotoGettersAll"] != null)
                    message[".gogoproto.goprotoGettersAll"] = Boolean(object[".gogoproto.goprotoGettersAll"]);
                if (object[".gogoproto.goprotoEnumPrefixAll"] != null)
                    message[".gogoproto.goprotoEnumPrefixAll"] = Boolean(object[".gogoproto.goprotoEnumPrefixAll"]);
                if (object[".gogoproto.goprotoStringerAll"] != null)
                    message[".gogoproto.goprotoStringerAll"] = Boolean(object[".gogoproto.goprotoStringerAll"]);
                if (object[".gogoproto.verboseEqualAll"] != null)
                    message[".gogoproto.verboseEqualAll"] = Boolean(object[".gogoproto.verboseEqualAll"]);
                if (object[".gogoproto.faceAll"] != null)
                    message[".gogoproto.faceAll"] = Boolean(object[".gogoproto.faceAll"]);
                if (object[".gogoproto.gostringAll"] != null)
                    message[".gogoproto.gostringAll"] = Boolean(object[".gogoproto.gostringAll"]);
                if (object[".gogoproto.populateAll"] != null)
                    message[".gogoproto.populateAll"] = Boolean(object[".gogoproto.populateAll"]);
                if (object[".gogoproto.stringerAll"] != null)
                    message[".gogoproto.stringerAll"] = Boolean(object[".gogoproto.stringerAll"]);
                if (object[".gogoproto.onlyoneAll"] != null)
                    message[".gogoproto.onlyoneAll"] = Boolean(object[".gogoproto.onlyoneAll"]);
                if (object[".gogoproto.equalAll"] != null)
                    message[".gogoproto.equalAll"] = Boolean(object[".gogoproto.equalAll"]);
                if (object[".gogoproto.descriptionAll"] != null)
                    message[".gogoproto.descriptionAll"] = Boolean(object[".gogoproto.descriptionAll"]);
                if (object[".gogoproto.testgenAll"] != null)
                    message[".gogoproto.testgenAll"] = Boolean(object[".gogoproto.testgenAll"]);
                if (object[".gogoproto.benchgenAll"] != null)
                    message[".gogoproto.benchgenAll"] = Boolean(object[".gogoproto.benchgenAll"]);
                if (object[".gogoproto.marshalerAll"] != null)
                    message[".gogoproto.marshalerAll"] = Boolean(object[".gogoproto.marshalerAll"]);
                if (object[".gogoproto.unmarshalerAll"] != null)
                    message[".gogoproto.unmarshalerAll"] = Boolean(object[".gogoproto.unmarshalerAll"]);
                if (object[".gogoproto.stableMarshalerAll"] != null)
                    message[".gogoproto.stableMarshalerAll"] = Boolean(object[".gogoproto.stableMarshalerAll"]);
                if (object[".gogoproto.sizerAll"] != null)
                    message[".gogoproto.sizerAll"] = Boolean(object[".gogoproto.sizerAll"]);
                if (object[".gogoproto.goprotoEnumStringerAll"] != null)
                    message[".gogoproto.goprotoEnumStringerAll"] = Boolean(object[".gogoproto.goprotoEnumStringerAll"]);
                if (object[".gogoproto.enumStringerAll"] != null)
                    message[".gogoproto.enumStringerAll"] = Boolean(object[".gogoproto.enumStringerAll"]);
                if (object[".gogoproto.unsafeMarshalerAll"] != null)
                    message[".gogoproto.unsafeMarshalerAll"] = Boolean(object[".gogoproto.unsafeMarshalerAll"]);
                if (object[".gogoproto.unsafeUnmarshalerAll"] != null)
                    message[".gogoproto.unsafeUnmarshalerAll"] = Boolean(object[".gogoproto.unsafeUnmarshalerAll"]);
                if (object[".gogoproto.goprotoExtensionsMapAll"] != null)
                    message[".gogoproto.goprotoExtensionsMapAll"] = Boolean(object[".gogoproto.goprotoExtensionsMapAll"]);
                if (object[".gogoproto.goprotoUnrecognizedAll"] != null)
                    message[".gogoproto.goprotoUnrecognizedAll"] = Boolean(object[".gogoproto.goprotoUnrecognizedAll"]);
                if (object[".gogoproto.gogoprotoImport"] != null)
                    message[".gogoproto.gogoprotoImport"] = Boolean(object[".gogoproto.gogoprotoImport"]);
                if (object[".gogoproto.protosizerAll"] != null)
                    message[".gogoproto.protosizerAll"] = Boolean(object[".gogoproto.protosizerAll"]);
                if (object[".gogoproto.compareAll"] != null)
                    message[".gogoproto.compareAll"] = Boolean(object[".gogoproto.compareAll"]);
                if (object[".gogoproto.typedeclAll"] != null)
                    message[".gogoproto.typedeclAll"] = Boolean(object[".gogoproto.typedeclAll"]);
                if (object[".gogoproto.enumdeclAll"] != null)
                    message[".gogoproto.enumdeclAll"] = Boolean(object[".gogoproto.enumdeclAll"]);
                if (object[".gogoproto.goprotoRegistration"] != null)
                    message[".gogoproto.goprotoRegistration"] = Boolean(object[".gogoproto.goprotoRegistration"]);
                return message;
            };

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.FileOptions.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileOptions} FileOptions
             */
            FileOptions.from = FileOptions.fromObject;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param {google.protobuf.FileOptions} message FileOptions
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.javaPackage = "";
                    object.javaOuterClassname = "";
                    object.optimizeFor = options.enums === String ? "SPEED" : 1;
                    object.javaMultipleFiles = false;
                    object.goPackage = "";
                    object.ccGenericServices = false;
                    object.javaGenericServices = false;
                    object.pyGenericServices = false;
                    object.javaGenerateEqualsAndHash = false;
                    object.deprecated = false;
                    object.javaStringCheckUtf8 = false;
                    object.ccEnableArenas = false;
                    object.objcClassPrefix = "";
                    object.csharpNamespace = "";
                    object[".gogoproto.goprotoGettersAll"] = false;
                    object[".gogoproto.goprotoEnumPrefixAll"] = false;
                    object[".gogoproto.goprotoStringerAll"] = false;
                    object[".gogoproto.verboseEqualAll"] = false;
                    object[".gogoproto.faceAll"] = false;
                    object[".gogoproto.gostringAll"] = false;
                    object[".gogoproto.populateAll"] = false;
                    object[".gogoproto.stringerAll"] = false;
                    object[".gogoproto.onlyoneAll"] = false;
                    object[".gogoproto.equalAll"] = false;
                    object[".gogoproto.descriptionAll"] = false;
                    object[".gogoproto.testgenAll"] = false;
                    object[".gogoproto.benchgenAll"] = false;
                    object[".gogoproto.marshalerAll"] = false;
                    object[".gogoproto.unmarshalerAll"] = false;
                    object[".gogoproto.stableMarshalerAll"] = false;
                    object[".gogoproto.sizerAll"] = false;
                    object[".gogoproto.goprotoEnumStringerAll"] = false;
                    object[".gogoproto.enumStringerAll"] = false;
                    object[".gogoproto.unsafeMarshalerAll"] = false;
                    object[".gogoproto.unsafeUnmarshalerAll"] = false;
                    object[".gogoproto.goprotoExtensionsMapAll"] = false;
                    object[".gogoproto.goprotoUnrecognizedAll"] = false;
                    object[".gogoproto.gogoprotoImport"] = false;
                    object[".gogoproto.protosizerAll"] = false;
                    object[".gogoproto.compareAll"] = false;
                    object[".gogoproto.typedeclAll"] = false;
                    object[".gogoproto.enumdeclAll"] = false;
                    object[".gogoproto.goprotoRegistration"] = false;
                }
                if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                    object.javaPackage = message.javaPackage;
                if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                    object.javaOuterClassname = message.javaOuterClassname;
                if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                    object.optimizeFor = options.enums === String ? $root.google.protobuf.FileOptions.OptimizeMode[message.optimizeFor] : message.optimizeFor;
                if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                    object.javaMultipleFiles = message.javaMultipleFiles;
                if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                    object.goPackage = message.goPackage;
                if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                    object.ccGenericServices = message.ccGenericServices;
                if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                    object.javaGenericServices = message.javaGenericServices;
                if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                    object.pyGenericServices = message.pyGenericServices;
                if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                    object.javaGenerateEqualsAndHash = message.javaGenerateEqualsAndHash;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                    object.javaStringCheckUtf8 = message.javaStringCheckUtf8;
                if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                    object.ccEnableArenas = message.ccEnableArenas;
                if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                    object.objcClassPrefix = message.objcClassPrefix;
                if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                    object.csharpNamespace = message.csharpNamespace;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                if (message[".gogoproto.goprotoGettersAll"] != null && message.hasOwnProperty(".gogoproto.goprotoGettersAll"))
                    object[".gogoproto.goprotoGettersAll"] = message[".gogoproto.goprotoGettersAll"];
                if (message[".gogoproto.goprotoEnumPrefixAll"] != null && message.hasOwnProperty(".gogoproto.goprotoEnumPrefixAll"))
                    object[".gogoproto.goprotoEnumPrefixAll"] = message[".gogoproto.goprotoEnumPrefixAll"];
                if (message[".gogoproto.goprotoStringerAll"] != null && message.hasOwnProperty(".gogoproto.goprotoStringerAll"))
                    object[".gogoproto.goprotoStringerAll"] = message[".gogoproto.goprotoStringerAll"];
                if (message[".gogoproto.verboseEqualAll"] != null && message.hasOwnProperty(".gogoproto.verboseEqualAll"))
                    object[".gogoproto.verboseEqualAll"] = message[".gogoproto.verboseEqualAll"];
                if (message[".gogoproto.faceAll"] != null && message.hasOwnProperty(".gogoproto.faceAll"))
                    object[".gogoproto.faceAll"] = message[".gogoproto.faceAll"];
                if (message[".gogoproto.gostringAll"] != null && message.hasOwnProperty(".gogoproto.gostringAll"))
                    object[".gogoproto.gostringAll"] = message[".gogoproto.gostringAll"];
                if (message[".gogoproto.populateAll"] != null && message.hasOwnProperty(".gogoproto.populateAll"))
                    object[".gogoproto.populateAll"] = message[".gogoproto.populateAll"];
                if (message[".gogoproto.stringerAll"] != null && message.hasOwnProperty(".gogoproto.stringerAll"))
                    object[".gogoproto.stringerAll"] = message[".gogoproto.stringerAll"];
                if (message[".gogoproto.onlyoneAll"] != null && message.hasOwnProperty(".gogoproto.onlyoneAll"))
                    object[".gogoproto.onlyoneAll"] = message[".gogoproto.onlyoneAll"];
                if (message[".gogoproto.equalAll"] != null && message.hasOwnProperty(".gogoproto.equalAll"))
                    object[".gogoproto.equalAll"] = message[".gogoproto.equalAll"];
                if (message[".gogoproto.descriptionAll"] != null && message.hasOwnProperty(".gogoproto.descriptionAll"))
                    object[".gogoproto.descriptionAll"] = message[".gogoproto.descriptionAll"];
                if (message[".gogoproto.testgenAll"] != null && message.hasOwnProperty(".gogoproto.testgenAll"))
                    object[".gogoproto.testgenAll"] = message[".gogoproto.testgenAll"];
                if (message[".gogoproto.benchgenAll"] != null && message.hasOwnProperty(".gogoproto.benchgenAll"))
                    object[".gogoproto.benchgenAll"] = message[".gogoproto.benchgenAll"];
                if (message[".gogoproto.marshalerAll"] != null && message.hasOwnProperty(".gogoproto.marshalerAll"))
                    object[".gogoproto.marshalerAll"] = message[".gogoproto.marshalerAll"];
                if (message[".gogoproto.unmarshalerAll"] != null && message.hasOwnProperty(".gogoproto.unmarshalerAll"))
                    object[".gogoproto.unmarshalerAll"] = message[".gogoproto.unmarshalerAll"];
                if (message[".gogoproto.stableMarshalerAll"] != null && message.hasOwnProperty(".gogoproto.stableMarshalerAll"))
                    object[".gogoproto.stableMarshalerAll"] = message[".gogoproto.stableMarshalerAll"];
                if (message[".gogoproto.sizerAll"] != null && message.hasOwnProperty(".gogoproto.sizerAll"))
                    object[".gogoproto.sizerAll"] = message[".gogoproto.sizerAll"];
                if (message[".gogoproto.goprotoEnumStringerAll"] != null && message.hasOwnProperty(".gogoproto.goprotoEnumStringerAll"))
                    object[".gogoproto.goprotoEnumStringerAll"] = message[".gogoproto.goprotoEnumStringerAll"];
                if (message[".gogoproto.enumStringerAll"] != null && message.hasOwnProperty(".gogoproto.enumStringerAll"))
                    object[".gogoproto.enumStringerAll"] = message[".gogoproto.enumStringerAll"];
                if (message[".gogoproto.unsafeMarshalerAll"] != null && message.hasOwnProperty(".gogoproto.unsafeMarshalerAll"))
                    object[".gogoproto.unsafeMarshalerAll"] = message[".gogoproto.unsafeMarshalerAll"];
                if (message[".gogoproto.unsafeUnmarshalerAll"] != null && message.hasOwnProperty(".gogoproto.unsafeUnmarshalerAll"))
                    object[".gogoproto.unsafeUnmarshalerAll"] = message[".gogoproto.unsafeUnmarshalerAll"];
                if (message[".gogoproto.goprotoExtensionsMapAll"] != null && message.hasOwnProperty(".gogoproto.goprotoExtensionsMapAll"))
                    object[".gogoproto.goprotoExtensionsMapAll"] = message[".gogoproto.goprotoExtensionsMapAll"];
                if (message[".gogoproto.goprotoUnrecognizedAll"] != null && message.hasOwnProperty(".gogoproto.goprotoUnrecognizedAll"))
                    object[".gogoproto.goprotoUnrecognizedAll"] = message[".gogoproto.goprotoUnrecognizedAll"];
                if (message[".gogoproto.gogoprotoImport"] != null && message.hasOwnProperty(".gogoproto.gogoprotoImport"))
                    object[".gogoproto.gogoprotoImport"] = message[".gogoproto.gogoprotoImport"];
                if (message[".gogoproto.protosizerAll"] != null && message.hasOwnProperty(".gogoproto.protosizerAll"))
                    object[".gogoproto.protosizerAll"] = message[".gogoproto.protosizerAll"];
                if (message[".gogoproto.compareAll"] != null && message.hasOwnProperty(".gogoproto.compareAll"))
                    object[".gogoproto.compareAll"] = message[".gogoproto.compareAll"];
                if (message[".gogoproto.typedeclAll"] != null && message.hasOwnProperty(".gogoproto.typedeclAll"))
                    object[".gogoproto.typedeclAll"] = message[".gogoproto.typedeclAll"];
                if (message[".gogoproto.enumdeclAll"] != null && message.hasOwnProperty(".gogoproto.enumdeclAll"))
                    object[".gogoproto.enumdeclAll"] = message[".gogoproto.enumdeclAll"];
                if (message[".gogoproto.goprotoRegistration"] != null && message.hasOwnProperty(".gogoproto.goprotoRegistration"))
                    object[".gogoproto.goprotoRegistration"] = message[".gogoproto.goprotoRegistration"];
                return object;
            };

            /**
             * Creates a plain object from this FileOptions message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileOptions.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this FileOptions to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            FileOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * OptimizeMode enum.
             * @name OptimizeMode
             * @memberof google.protobuf.FileOptions
             * @enum {number}
             * @property {number} SPEED=1 SPEED value
             * @property {number} CODE_SIZE=2 CODE_SIZE value
             * @property {number} LITE_RUNTIME=3 LITE_RUNTIME value
             */
            FileOptions.OptimizeMode = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "SPEED"] = 1;
                values[valuesById[2] = "CODE_SIZE"] = 2;
                values[valuesById[3] = "LITE_RUNTIME"] = 3;
                return values;
            })();

            return FileOptions;
        })();

        protobuf.MessageOptions = (function() {

            /**
             * Properties of a MessageOptions.
             * @typedef google.protobuf.MessageOptions$Properties
             * @type {Object}
             * @property {boolean} [messageSetWireFormat] MessageOptions messageSetWireFormat.
             * @property {boolean} [noStandardDescriptorAccessor] MessageOptions noStandardDescriptorAccessor.
             * @property {boolean} [deprecated] MessageOptions deprecated.
             * @property {boolean} [mapEntry] MessageOptions mapEntry.
             * @property {Array.<google.protobuf.UninterpretedOption$Properties>} [uninterpretedOption] MessageOptions uninterpretedOption.
             * @property {boolean} [".gogoproto.goprotoGetters"] MessageOptions .gogoproto.goprotoGetters.
             * @property {boolean} [".gogoproto.goprotoStringer"] MessageOptions .gogoproto.goprotoStringer.
             * @property {boolean} [".gogoproto.verboseEqual"] MessageOptions .gogoproto.verboseEqual.
             * @property {boolean} [".gogoproto.face"] MessageOptions .gogoproto.face.
             * @property {boolean} [".gogoproto.gostring"] MessageOptions .gogoproto.gostring.
             * @property {boolean} [".gogoproto.populate"] MessageOptions .gogoproto.populate.
             * @property {boolean} [".gogoproto.stringer"] MessageOptions .gogoproto.stringer.
             * @property {boolean} [".gogoproto.onlyone"] MessageOptions .gogoproto.onlyone.
             * @property {boolean} [".gogoproto.equal"] MessageOptions .gogoproto.equal.
             * @property {boolean} [".gogoproto.description"] MessageOptions .gogoproto.description.
             * @property {boolean} [".gogoproto.testgen"] MessageOptions .gogoproto.testgen.
             * @property {boolean} [".gogoproto.benchgen"] MessageOptions .gogoproto.benchgen.
             * @property {boolean} [".gogoproto.marshaler"] MessageOptions .gogoproto.marshaler.
             * @property {boolean} [".gogoproto.unmarshaler"] MessageOptions .gogoproto.unmarshaler.
             * @property {boolean} [".gogoproto.stableMarshaler"] MessageOptions .gogoproto.stableMarshaler.
             * @property {boolean} [".gogoproto.sizer"] MessageOptions .gogoproto.sizer.
             * @property {boolean} [".gogoproto.unsafeMarshaler"] MessageOptions .gogoproto.unsafeMarshaler.
             * @property {boolean} [".gogoproto.unsafeUnmarshaler"] MessageOptions .gogoproto.unsafeUnmarshaler.
             * @property {boolean} [".gogoproto.goprotoExtensionsMap"] MessageOptions .gogoproto.goprotoExtensionsMap.
             * @property {boolean} [".gogoproto.goprotoUnrecognized"] MessageOptions .gogoproto.goprotoUnrecognized.
             * @property {boolean} [".gogoproto.protosizer"] MessageOptions .gogoproto.protosizer.
             * @property {boolean} [".gogoproto.compare"] MessageOptions .gogoproto.compare.
             * @property {boolean} [".gogoproto.typedecl"] MessageOptions .gogoproto.typedecl.
             */

            /**
             * Constructs a new MessageOptions.
             * @exports google.protobuf.MessageOptions
             * @constructor
             * @param {google.protobuf.MessageOptions$Properties=} [properties] Properties to set
             */
            function MessageOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageOptions messageSetWireFormat.
             * @type {boolean}
             */
            MessageOptions.prototype.messageSetWireFormat = false;

            /**
             * MessageOptions noStandardDescriptorAccessor.
             * @type {boolean}
             */
            MessageOptions.prototype.noStandardDescriptorAccessor = false;

            /**
             * MessageOptions deprecated.
             * @type {boolean}
             */
            MessageOptions.prototype.deprecated = false;

            /**
             * MessageOptions mapEntry.
             * @type {boolean}
             */
            MessageOptions.prototype.mapEntry = false;

            /**
             * MessageOptions uninterpretedOption.
             * @type {Array.<google.protobuf.UninterpretedOption$Properties>}
             */
            MessageOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * MessageOptions .gogoproto.goprotoGetters.
             * @type {boolean}
             */
            MessageOptions.prototype[".gogoproto.goprotoGetters"] = false;

            /**
             * MessageOptions .gogoproto.goprotoStringer.
             * @type {boolean}
             */
            MessageOptions.prototype[".gogoproto.goprotoStringer"] = false;

            /**
             * MessageOptions .gogoproto.verboseEqual.
             * @type {boolean}
             */
            MessageOptions.prototype[".gogoproto.verboseEqual"] = false;

            /**
             * MessageOptions .gogoproto.face.
             * @type {boolean}
             */
            MessageOptions.prototype[".gogoproto.face"] = false;

            /**
             * MessageOptions .gogoproto.gostring.
             * @type {boolean}
             */
            MessageOptions.prototype[".gogoproto.gostring"] = false;

            /**
             * MessageOptions .gogoproto.populate.
             * @type {boolean}
             */
            MessageOptions.prototype[".gogoproto.populate"] = false;

            /**
             * MessageOptions .gogoproto.stringer.
             * @type {boolean}
             */
            MessageOptions.prototype[".gogoproto.stringer"] = false;

            /**
             * MessageOptions .gogoproto.onlyone.
             * @type {boolean}
             */
            MessageOptions.prototype[".gogoproto.onlyone"] = false;

            /**
             * MessageOptions .gogoproto.equal.
             * @type {boolean}
             */
            MessageOptions.prototype[".gogoproto.equal"] = false;

            /**
             * MessageOptions .gogoproto.description.
             * @type {boolean}
             */
            MessageOptions.prototype[".gogoproto.description"] = false;

            /**
             * MessageOptions .gogoproto.testgen.
             * @type {boolean}
             */
            MessageOptions.prototype[".gogoproto.testgen"] = false;

            /**
             * MessageOptions .gogoproto.benchgen.
             * @type {boolean}
             */
            MessageOptions.prototype[".gogoproto.benchgen"] = false;

            /**
             * MessageOptions .gogoproto.marshaler.
             * @type {boolean}
             */
            MessageOptions.prototype[".gogoproto.marshaler"] = false;

            /**
             * MessageOptions .gogoproto.unmarshaler.
             * @type {boolean}
             */
            MessageOptions.prototype[".gogoproto.unmarshaler"] = false;

            /**
             * MessageOptions .gogoproto.stableMarshaler.
             * @type {boolean}
             */
            MessageOptions.prototype[".gogoproto.stableMarshaler"] = false;

            /**
             * MessageOptions .gogoproto.sizer.
             * @type {boolean}
             */
            MessageOptions.prototype[".gogoproto.sizer"] = false;

            /**
             * MessageOptions .gogoproto.unsafeMarshaler.
             * @type {boolean}
             */
            MessageOptions.prototype[".gogoproto.unsafeMarshaler"] = false;

            /**
             * MessageOptions .gogoproto.unsafeUnmarshaler.
             * @type {boolean}
             */
            MessageOptions.prototype[".gogoproto.unsafeUnmarshaler"] = false;

            /**
             * MessageOptions .gogoproto.goprotoExtensionsMap.
             * @type {boolean}
             */
            MessageOptions.prototype[".gogoproto.goprotoExtensionsMap"] = false;

            /**
             * MessageOptions .gogoproto.goprotoUnrecognized.
             * @type {boolean}
             */
            MessageOptions.prototype[".gogoproto.goprotoUnrecognized"] = false;

            /**
             * MessageOptions .gogoproto.protosizer.
             * @type {boolean}
             */
            MessageOptions.prototype[".gogoproto.protosizer"] = false;

            /**
             * MessageOptions .gogoproto.compare.
             * @type {boolean}
             */
            MessageOptions.prototype[".gogoproto.compare"] = false;

            /**
             * MessageOptions .gogoproto.typedecl.
             * @type {boolean}
             */
            MessageOptions.prototype[".gogoproto.typedecl"] = false;

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param {google.protobuf.MessageOptions$Properties=} [properties] Properties to set
             * @returns {google.protobuf.MessageOptions} MessageOptions instance
             */
            MessageOptions.create = function create(properties) {
                return new MessageOptions(properties);
            };

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param {google.protobuf.MessageOptions$Properties} message MessageOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.messageSetWireFormat);
                if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.noStandardDescriptorAccessor);
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.mapEntry);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".gogoproto.goprotoGetters"] != null && message.hasOwnProperty(".gogoproto.goprotoGetters"))
                    writer.uint32(/* id 64001, wireType 0 =*/512008).bool(message[".gogoproto.goprotoGetters"]);
                if (message[".gogoproto.goprotoStringer"] != null && message.hasOwnProperty(".gogoproto.goprotoStringer"))
                    writer.uint32(/* id 64003, wireType 0 =*/512024).bool(message[".gogoproto.goprotoStringer"]);
                if (message[".gogoproto.verboseEqual"] != null && message.hasOwnProperty(".gogoproto.verboseEqual"))
                    writer.uint32(/* id 64004, wireType 0 =*/512032).bool(message[".gogoproto.verboseEqual"]);
                if (message[".gogoproto.face"] != null && message.hasOwnProperty(".gogoproto.face"))
                    writer.uint32(/* id 64005, wireType 0 =*/512040).bool(message[".gogoproto.face"]);
                if (message[".gogoproto.gostring"] != null && message.hasOwnProperty(".gogoproto.gostring"))
                    writer.uint32(/* id 64006, wireType 0 =*/512048).bool(message[".gogoproto.gostring"]);
                if (message[".gogoproto.populate"] != null && message.hasOwnProperty(".gogoproto.populate"))
                    writer.uint32(/* id 64007, wireType 0 =*/512056).bool(message[".gogoproto.populate"]);
                if (message[".gogoproto.onlyone"] != null && message.hasOwnProperty(".gogoproto.onlyone"))
                    writer.uint32(/* id 64009, wireType 0 =*/512072).bool(message[".gogoproto.onlyone"]);
                if (message[".gogoproto.equal"] != null && message.hasOwnProperty(".gogoproto.equal"))
                    writer.uint32(/* id 64013, wireType 0 =*/512104).bool(message[".gogoproto.equal"]);
                if (message[".gogoproto.description"] != null && message.hasOwnProperty(".gogoproto.description"))
                    writer.uint32(/* id 64014, wireType 0 =*/512112).bool(message[".gogoproto.description"]);
                if (message[".gogoproto.testgen"] != null && message.hasOwnProperty(".gogoproto.testgen"))
                    writer.uint32(/* id 64015, wireType 0 =*/512120).bool(message[".gogoproto.testgen"]);
                if (message[".gogoproto.benchgen"] != null && message.hasOwnProperty(".gogoproto.benchgen"))
                    writer.uint32(/* id 64016, wireType 0 =*/512128).bool(message[".gogoproto.benchgen"]);
                if (message[".gogoproto.marshaler"] != null && message.hasOwnProperty(".gogoproto.marshaler"))
                    writer.uint32(/* id 64017, wireType 0 =*/512136).bool(message[".gogoproto.marshaler"]);
                if (message[".gogoproto.unmarshaler"] != null && message.hasOwnProperty(".gogoproto.unmarshaler"))
                    writer.uint32(/* id 64018, wireType 0 =*/512144).bool(message[".gogoproto.unmarshaler"]);
                if (message[".gogoproto.stableMarshaler"] != null && message.hasOwnProperty(".gogoproto.stableMarshaler"))
                    writer.uint32(/* id 64019, wireType 0 =*/512152).bool(message[".gogoproto.stableMarshaler"]);
                if (message[".gogoproto.sizer"] != null && message.hasOwnProperty(".gogoproto.sizer"))
                    writer.uint32(/* id 64020, wireType 0 =*/512160).bool(message[".gogoproto.sizer"]);
                if (message[".gogoproto.unsafeMarshaler"] != null && message.hasOwnProperty(".gogoproto.unsafeMarshaler"))
                    writer.uint32(/* id 64023, wireType 0 =*/512184).bool(message[".gogoproto.unsafeMarshaler"]);
                if (message[".gogoproto.unsafeUnmarshaler"] != null && message.hasOwnProperty(".gogoproto.unsafeUnmarshaler"))
                    writer.uint32(/* id 64024, wireType 0 =*/512192).bool(message[".gogoproto.unsafeUnmarshaler"]);
                if (message[".gogoproto.goprotoExtensionsMap"] != null && message.hasOwnProperty(".gogoproto.goprotoExtensionsMap"))
                    writer.uint32(/* id 64025, wireType 0 =*/512200).bool(message[".gogoproto.goprotoExtensionsMap"]);
                if (message[".gogoproto.goprotoUnrecognized"] != null && message.hasOwnProperty(".gogoproto.goprotoUnrecognized"))
                    writer.uint32(/* id 64026, wireType 0 =*/512208).bool(message[".gogoproto.goprotoUnrecognized"]);
                if (message[".gogoproto.protosizer"] != null && message.hasOwnProperty(".gogoproto.protosizer"))
                    writer.uint32(/* id 64028, wireType 0 =*/512224).bool(message[".gogoproto.protosizer"]);
                if (message[".gogoproto.compare"] != null && message.hasOwnProperty(".gogoproto.compare"))
                    writer.uint32(/* id 64029, wireType 0 =*/512232).bool(message[".gogoproto.compare"]);
                if (message[".gogoproto.typedecl"] != null && message.hasOwnProperty(".gogoproto.typedecl"))
                    writer.uint32(/* id 64030, wireType 0 =*/512240).bool(message[".gogoproto.typedecl"]);
                if (message[".gogoproto.stringer"] != null && message.hasOwnProperty(".gogoproto.stringer"))
                    writer.uint32(/* id 67008, wireType 0 =*/536064).bool(message[".gogoproto.stringer"]);
                return writer;
            };

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param {google.protobuf.MessageOptions$Properties} message MessageOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MessageOptions} MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MessageOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.messageSetWireFormat = reader.bool();
                        break;
                    case 2:
                        message.noStandardDescriptorAccessor = reader.bool();
                        break;
                    case 3:
                        message.deprecated = reader.bool();
                        break;
                    case 7:
                        message.mapEntry = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    case 64001:
                        message[".gogoproto.goprotoGetters"] = reader.bool();
                        break;
                    case 64003:
                        message[".gogoproto.goprotoStringer"] = reader.bool();
                        break;
                    case 64004:
                        message[".gogoproto.verboseEqual"] = reader.bool();
                        break;
                    case 64005:
                        message[".gogoproto.face"] = reader.bool();
                        break;
                    case 64006:
                        message[".gogoproto.gostring"] = reader.bool();
                        break;
                    case 64007:
                        message[".gogoproto.populate"] = reader.bool();
                        break;
                    case 67008:
                        message[".gogoproto.stringer"] = reader.bool();
                        break;
                    case 64009:
                        message[".gogoproto.onlyone"] = reader.bool();
                        break;
                    case 64013:
                        message[".gogoproto.equal"] = reader.bool();
                        break;
                    case 64014:
                        message[".gogoproto.description"] = reader.bool();
                        break;
                    case 64015:
                        message[".gogoproto.testgen"] = reader.bool();
                        break;
                    case 64016:
                        message[".gogoproto.benchgen"] = reader.bool();
                        break;
                    case 64017:
                        message[".gogoproto.marshaler"] = reader.bool();
                        break;
                    case 64018:
                        message[".gogoproto.unmarshaler"] = reader.bool();
                        break;
                    case 64019:
                        message[".gogoproto.stableMarshaler"] = reader.bool();
                        break;
                    case 64020:
                        message[".gogoproto.sizer"] = reader.bool();
                        break;
                    case 64023:
                        message[".gogoproto.unsafeMarshaler"] = reader.bool();
                        break;
                    case 64024:
                        message[".gogoproto.unsafeUnmarshaler"] = reader.bool();
                        break;
                    case 64025:
                        message[".gogoproto.goprotoExtensionsMap"] = reader.bool();
                        break;
                    case 64026:
                        message[".gogoproto.goprotoUnrecognized"] = reader.bool();
                        break;
                    case 64028:
                        message[".gogoproto.protosizer"] = reader.bool();
                        break;
                    case 64029:
                        message[".gogoproto.compare"] = reader.bool();
                        break;
                    case 64030:
                        message[".gogoproto.typedecl"] = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MessageOptions} MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageOptions message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            MessageOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                    if (typeof message.messageSetWireFormat !== "boolean")
                        return "messageSetWireFormat: boolean expected";
                if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                    if (typeof message.noStandardDescriptorAccessor !== "boolean")
                        return "noStandardDescriptorAccessor: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                    if (typeof message.mapEntry !== "boolean")
                        return "mapEntry: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                if (message[".gogoproto.goprotoGetters"] != null && message.hasOwnProperty(".gogoproto.goprotoGetters"))
                    if (typeof message[".gogoproto.goprotoGetters"] !== "boolean")
                        return ".gogoproto.goprotoGetters: boolean expected";
                if (message[".gogoproto.goprotoStringer"] != null && message.hasOwnProperty(".gogoproto.goprotoStringer"))
                    if (typeof message[".gogoproto.goprotoStringer"] !== "boolean")
                        return ".gogoproto.goprotoStringer: boolean expected";
                if (message[".gogoproto.verboseEqual"] != null && message.hasOwnProperty(".gogoproto.verboseEqual"))
                    if (typeof message[".gogoproto.verboseEqual"] !== "boolean")
                        return ".gogoproto.verboseEqual: boolean expected";
                if (message[".gogoproto.face"] != null && message.hasOwnProperty(".gogoproto.face"))
                    if (typeof message[".gogoproto.face"] !== "boolean")
                        return ".gogoproto.face: boolean expected";
                if (message[".gogoproto.gostring"] != null && message.hasOwnProperty(".gogoproto.gostring"))
                    if (typeof message[".gogoproto.gostring"] !== "boolean")
                        return ".gogoproto.gostring: boolean expected";
                if (message[".gogoproto.populate"] != null && message.hasOwnProperty(".gogoproto.populate"))
                    if (typeof message[".gogoproto.populate"] !== "boolean")
                        return ".gogoproto.populate: boolean expected";
                if (message[".gogoproto.stringer"] != null && message.hasOwnProperty(".gogoproto.stringer"))
                    if (typeof message[".gogoproto.stringer"] !== "boolean")
                        return ".gogoproto.stringer: boolean expected";
                if (message[".gogoproto.onlyone"] != null && message.hasOwnProperty(".gogoproto.onlyone"))
                    if (typeof message[".gogoproto.onlyone"] !== "boolean")
                        return ".gogoproto.onlyone: boolean expected";
                if (message[".gogoproto.equal"] != null && message.hasOwnProperty(".gogoproto.equal"))
                    if (typeof message[".gogoproto.equal"] !== "boolean")
                        return ".gogoproto.equal: boolean expected";
                if (message[".gogoproto.description"] != null && message.hasOwnProperty(".gogoproto.description"))
                    if (typeof message[".gogoproto.description"] !== "boolean")
                        return ".gogoproto.description: boolean expected";
                if (message[".gogoproto.testgen"] != null && message.hasOwnProperty(".gogoproto.testgen"))
                    if (typeof message[".gogoproto.testgen"] !== "boolean")
                        return ".gogoproto.testgen: boolean expected";
                if (message[".gogoproto.benchgen"] != null && message.hasOwnProperty(".gogoproto.benchgen"))
                    if (typeof message[".gogoproto.benchgen"] !== "boolean")
                        return ".gogoproto.benchgen: boolean expected";
                if (message[".gogoproto.marshaler"] != null && message.hasOwnProperty(".gogoproto.marshaler"))
                    if (typeof message[".gogoproto.marshaler"] !== "boolean")
                        return ".gogoproto.marshaler: boolean expected";
                if (message[".gogoproto.unmarshaler"] != null && message.hasOwnProperty(".gogoproto.unmarshaler"))
                    if (typeof message[".gogoproto.unmarshaler"] !== "boolean")
                        return ".gogoproto.unmarshaler: boolean expected";
                if (message[".gogoproto.stableMarshaler"] != null && message.hasOwnProperty(".gogoproto.stableMarshaler"))
                    if (typeof message[".gogoproto.stableMarshaler"] !== "boolean")
                        return ".gogoproto.stableMarshaler: boolean expected";
                if (message[".gogoproto.sizer"] != null && message.hasOwnProperty(".gogoproto.sizer"))
                    if (typeof message[".gogoproto.sizer"] !== "boolean")
                        return ".gogoproto.sizer: boolean expected";
                if (message[".gogoproto.unsafeMarshaler"] != null && message.hasOwnProperty(".gogoproto.unsafeMarshaler"))
                    if (typeof message[".gogoproto.unsafeMarshaler"] !== "boolean")
                        return ".gogoproto.unsafeMarshaler: boolean expected";
                if (message[".gogoproto.unsafeUnmarshaler"] != null && message.hasOwnProperty(".gogoproto.unsafeUnmarshaler"))
                    if (typeof message[".gogoproto.unsafeUnmarshaler"] !== "boolean")
                        return ".gogoproto.unsafeUnmarshaler: boolean expected";
                if (message[".gogoproto.goprotoExtensionsMap"] != null && message.hasOwnProperty(".gogoproto.goprotoExtensionsMap"))
                    if (typeof message[".gogoproto.goprotoExtensionsMap"] !== "boolean")
                        return ".gogoproto.goprotoExtensionsMap: boolean expected";
                if (message[".gogoproto.goprotoUnrecognized"] != null && message.hasOwnProperty(".gogoproto.goprotoUnrecognized"))
                    if (typeof message[".gogoproto.goprotoUnrecognized"] !== "boolean")
                        return ".gogoproto.goprotoUnrecognized: boolean expected";
                if (message[".gogoproto.protosizer"] != null && message.hasOwnProperty(".gogoproto.protosizer"))
                    if (typeof message[".gogoproto.protosizer"] !== "boolean")
                        return ".gogoproto.protosizer: boolean expected";
                if (message[".gogoproto.compare"] != null && message.hasOwnProperty(".gogoproto.compare"))
                    if (typeof message[".gogoproto.compare"] !== "boolean")
                        return ".gogoproto.compare: boolean expected";
                if (message[".gogoproto.typedecl"] != null && message.hasOwnProperty(".gogoproto.typedecl"))
                    if (typeof message[".gogoproto.typedecl"] !== "boolean")
                        return ".gogoproto.typedecl: boolean expected";
                return null;
            };

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MessageOptions} MessageOptions
             */
            MessageOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MessageOptions)
                    return object;
                var message = new $root.google.protobuf.MessageOptions();
                if (object.messageSetWireFormat != null)
                    message.messageSetWireFormat = Boolean(object.messageSetWireFormat);
                if (object.noStandardDescriptorAccessor != null)
                    message.noStandardDescriptorAccessor = Boolean(object.noStandardDescriptorAccessor);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.mapEntry != null)
                    message.mapEntry = Boolean(object.mapEntry);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                if (object[".gogoproto.goprotoGetters"] != null)
                    message[".gogoproto.goprotoGetters"] = Boolean(object[".gogoproto.goprotoGetters"]);
                if (object[".gogoproto.goprotoStringer"] != null)
                    message[".gogoproto.goprotoStringer"] = Boolean(object[".gogoproto.goprotoStringer"]);
                if (object[".gogoproto.verboseEqual"] != null)
                    message[".gogoproto.verboseEqual"] = Boolean(object[".gogoproto.verboseEqual"]);
                if (object[".gogoproto.face"] != null)
                    message[".gogoproto.face"] = Boolean(object[".gogoproto.face"]);
                if (object[".gogoproto.gostring"] != null)
                    message[".gogoproto.gostring"] = Boolean(object[".gogoproto.gostring"]);
                if (object[".gogoproto.populate"] != null)
                    message[".gogoproto.populate"] = Boolean(object[".gogoproto.populate"]);
                if (object[".gogoproto.stringer"] != null)
                    message[".gogoproto.stringer"] = Boolean(object[".gogoproto.stringer"]);
                if (object[".gogoproto.onlyone"] != null)
                    message[".gogoproto.onlyone"] = Boolean(object[".gogoproto.onlyone"]);
                if (object[".gogoproto.equal"] != null)
                    message[".gogoproto.equal"] = Boolean(object[".gogoproto.equal"]);
                if (object[".gogoproto.description"] != null)
                    message[".gogoproto.description"] = Boolean(object[".gogoproto.description"]);
                if (object[".gogoproto.testgen"] != null)
                    message[".gogoproto.testgen"] = Boolean(object[".gogoproto.testgen"]);
                if (object[".gogoproto.benchgen"] != null)
                    message[".gogoproto.benchgen"] = Boolean(object[".gogoproto.benchgen"]);
                if (object[".gogoproto.marshaler"] != null)
                    message[".gogoproto.marshaler"] = Boolean(object[".gogoproto.marshaler"]);
                if (object[".gogoproto.unmarshaler"] != null)
                    message[".gogoproto.unmarshaler"] = Boolean(object[".gogoproto.unmarshaler"]);
                if (object[".gogoproto.stableMarshaler"] != null)
                    message[".gogoproto.stableMarshaler"] = Boolean(object[".gogoproto.stableMarshaler"]);
                if (object[".gogoproto.sizer"] != null)
                    message[".gogoproto.sizer"] = Boolean(object[".gogoproto.sizer"]);
                if (object[".gogoproto.unsafeMarshaler"] != null)
                    message[".gogoproto.unsafeMarshaler"] = Boolean(object[".gogoproto.unsafeMarshaler"]);
                if (object[".gogoproto.unsafeUnmarshaler"] != null)
                    message[".gogoproto.unsafeUnmarshaler"] = Boolean(object[".gogoproto.unsafeUnmarshaler"]);
                if (object[".gogoproto.goprotoExtensionsMap"] != null)
                    message[".gogoproto.goprotoExtensionsMap"] = Boolean(object[".gogoproto.goprotoExtensionsMap"]);
                if (object[".gogoproto.goprotoUnrecognized"] != null)
                    message[".gogoproto.goprotoUnrecognized"] = Boolean(object[".gogoproto.goprotoUnrecognized"]);
                if (object[".gogoproto.protosizer"] != null)
                    message[".gogoproto.protosizer"] = Boolean(object[".gogoproto.protosizer"]);
                if (object[".gogoproto.compare"] != null)
                    message[".gogoproto.compare"] = Boolean(object[".gogoproto.compare"]);
                if (object[".gogoproto.typedecl"] != null)
                    message[".gogoproto.typedecl"] = Boolean(object[".gogoproto.typedecl"]);
                return message;
            };

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.MessageOptions.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MessageOptions} MessageOptions
             */
            MessageOptions.from = MessageOptions.fromObject;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param {google.protobuf.MessageOptions} message MessageOptions
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.messageSetWireFormat = false;
                    object.noStandardDescriptorAccessor = false;
                    object.deprecated = false;
                    object.mapEntry = false;
                    object[".gogoproto.goprotoGetters"] = false;
                    object[".gogoproto.goprotoStringer"] = false;
                    object[".gogoproto.verboseEqual"] = false;
                    object[".gogoproto.face"] = false;
                    object[".gogoproto.gostring"] = false;
                    object[".gogoproto.populate"] = false;
                    object[".gogoproto.onlyone"] = false;
                    object[".gogoproto.equal"] = false;
                    object[".gogoproto.description"] = false;
                    object[".gogoproto.testgen"] = false;
                    object[".gogoproto.benchgen"] = false;
                    object[".gogoproto.marshaler"] = false;
                    object[".gogoproto.unmarshaler"] = false;
                    object[".gogoproto.stableMarshaler"] = false;
                    object[".gogoproto.sizer"] = false;
                    object[".gogoproto.unsafeMarshaler"] = false;
                    object[".gogoproto.unsafeUnmarshaler"] = false;
                    object[".gogoproto.goprotoExtensionsMap"] = false;
                    object[".gogoproto.goprotoUnrecognized"] = false;
                    object[".gogoproto.protosizer"] = false;
                    object[".gogoproto.compare"] = false;
                    object[".gogoproto.typedecl"] = false;
                    object[".gogoproto.stringer"] = false;
                }
                if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                    object.messageSetWireFormat = message.messageSetWireFormat;
                if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                    object.noStandardDescriptorAccessor = message.noStandardDescriptorAccessor;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                    object.mapEntry = message.mapEntry;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                if (message[".gogoproto.goprotoGetters"] != null && message.hasOwnProperty(".gogoproto.goprotoGetters"))
                    object[".gogoproto.goprotoGetters"] = message[".gogoproto.goprotoGetters"];
                if (message[".gogoproto.goprotoStringer"] != null && message.hasOwnProperty(".gogoproto.goprotoStringer"))
                    object[".gogoproto.goprotoStringer"] = message[".gogoproto.goprotoStringer"];
                if (message[".gogoproto.verboseEqual"] != null && message.hasOwnProperty(".gogoproto.verboseEqual"))
                    object[".gogoproto.verboseEqual"] = message[".gogoproto.verboseEqual"];
                if (message[".gogoproto.face"] != null && message.hasOwnProperty(".gogoproto.face"))
                    object[".gogoproto.face"] = message[".gogoproto.face"];
                if (message[".gogoproto.gostring"] != null && message.hasOwnProperty(".gogoproto.gostring"))
                    object[".gogoproto.gostring"] = message[".gogoproto.gostring"];
                if (message[".gogoproto.populate"] != null && message.hasOwnProperty(".gogoproto.populate"))
                    object[".gogoproto.populate"] = message[".gogoproto.populate"];
                if (message[".gogoproto.onlyone"] != null && message.hasOwnProperty(".gogoproto.onlyone"))
                    object[".gogoproto.onlyone"] = message[".gogoproto.onlyone"];
                if (message[".gogoproto.equal"] != null && message.hasOwnProperty(".gogoproto.equal"))
                    object[".gogoproto.equal"] = message[".gogoproto.equal"];
                if (message[".gogoproto.description"] != null && message.hasOwnProperty(".gogoproto.description"))
                    object[".gogoproto.description"] = message[".gogoproto.description"];
                if (message[".gogoproto.testgen"] != null && message.hasOwnProperty(".gogoproto.testgen"))
                    object[".gogoproto.testgen"] = message[".gogoproto.testgen"];
                if (message[".gogoproto.benchgen"] != null && message.hasOwnProperty(".gogoproto.benchgen"))
                    object[".gogoproto.benchgen"] = message[".gogoproto.benchgen"];
                if (message[".gogoproto.marshaler"] != null && message.hasOwnProperty(".gogoproto.marshaler"))
                    object[".gogoproto.marshaler"] = message[".gogoproto.marshaler"];
                if (message[".gogoproto.unmarshaler"] != null && message.hasOwnProperty(".gogoproto.unmarshaler"))
                    object[".gogoproto.unmarshaler"] = message[".gogoproto.unmarshaler"];
                if (message[".gogoproto.stableMarshaler"] != null && message.hasOwnProperty(".gogoproto.stableMarshaler"))
                    object[".gogoproto.stableMarshaler"] = message[".gogoproto.stableMarshaler"];
                if (message[".gogoproto.sizer"] != null && message.hasOwnProperty(".gogoproto.sizer"))
                    object[".gogoproto.sizer"] = message[".gogoproto.sizer"];
                if (message[".gogoproto.unsafeMarshaler"] != null && message.hasOwnProperty(".gogoproto.unsafeMarshaler"))
                    object[".gogoproto.unsafeMarshaler"] = message[".gogoproto.unsafeMarshaler"];
                if (message[".gogoproto.unsafeUnmarshaler"] != null && message.hasOwnProperty(".gogoproto.unsafeUnmarshaler"))
                    object[".gogoproto.unsafeUnmarshaler"] = message[".gogoproto.unsafeUnmarshaler"];
                if (message[".gogoproto.goprotoExtensionsMap"] != null && message.hasOwnProperty(".gogoproto.goprotoExtensionsMap"))
                    object[".gogoproto.goprotoExtensionsMap"] = message[".gogoproto.goprotoExtensionsMap"];
                if (message[".gogoproto.goprotoUnrecognized"] != null && message.hasOwnProperty(".gogoproto.goprotoUnrecognized"))
                    object[".gogoproto.goprotoUnrecognized"] = message[".gogoproto.goprotoUnrecognized"];
                if (message[".gogoproto.protosizer"] != null && message.hasOwnProperty(".gogoproto.protosizer"))
                    object[".gogoproto.protosizer"] = message[".gogoproto.protosizer"];
                if (message[".gogoproto.compare"] != null && message.hasOwnProperty(".gogoproto.compare"))
                    object[".gogoproto.compare"] = message[".gogoproto.compare"];
                if (message[".gogoproto.typedecl"] != null && message.hasOwnProperty(".gogoproto.typedecl"))
                    object[".gogoproto.typedecl"] = message[".gogoproto.typedecl"];
                if (message[".gogoproto.stringer"] != null && message.hasOwnProperty(".gogoproto.stringer"))
                    object[".gogoproto.stringer"] = message[".gogoproto.stringer"];
                return object;
            };

            /**
             * Creates a plain object from this MessageOptions message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageOptions.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this MessageOptions to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            MessageOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageOptions;
        })();

        protobuf.FieldOptions = (function() {

            /**
             * Properties of a FieldOptions.
             * @typedef google.protobuf.FieldOptions$Properties
             * @type {Object}
             * @property {google.protobuf.FieldOptions.CType} [ctype] FieldOptions ctype.
             * @property {boolean} [packed] FieldOptions packed.
             * @property {google.protobuf.FieldOptions.JSType} [jstype] FieldOptions jstype.
             * @property {boolean} [lazy] FieldOptions lazy.
             * @property {boolean} [deprecated] FieldOptions deprecated.
             * @property {boolean} [weak] FieldOptions weak.
             * @property {Array.<google.protobuf.UninterpretedOption$Properties>} [uninterpretedOption] FieldOptions uninterpretedOption.
             * @property {boolean} [".gogoproto.nullable"] FieldOptions .gogoproto.nullable.
             * @property {boolean} [".gogoproto.embed"] FieldOptions .gogoproto.embed.
             * @property {string} [".gogoproto.customtype"] FieldOptions .gogoproto.customtype.
             * @property {string} [".gogoproto.customname"] FieldOptions .gogoproto.customname.
             * @property {string} [".gogoproto.jsontag"] FieldOptions .gogoproto.jsontag.
             * @property {string} [".gogoproto.moretags"] FieldOptions .gogoproto.moretags.
             * @property {string} [".gogoproto.casttype"] FieldOptions .gogoproto.casttype.
             * @property {string} [".gogoproto.castkey"] FieldOptions .gogoproto.castkey.
             * @property {string} [".gogoproto.castvalue"] FieldOptions .gogoproto.castvalue.
             * @property {boolean} [".gogoproto.stdtime"] FieldOptions .gogoproto.stdtime.
             * @property {boolean} [".gogoproto.stdduration"] FieldOptions .gogoproto.stdduration.
             */

            /**
             * Constructs a new FieldOptions.
             * @exports google.protobuf.FieldOptions
             * @constructor
             * @param {google.protobuf.FieldOptions$Properties=} [properties] Properties to set
             */
            function FieldOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FieldOptions ctype.
             * @type {google.protobuf.FieldOptions.CType}
             */
            FieldOptions.prototype.ctype = 0;

            /**
             * FieldOptions packed.
             * @type {boolean}
             */
            FieldOptions.prototype.packed = false;

            /**
             * FieldOptions jstype.
             * @type {google.protobuf.FieldOptions.JSType}
             */
            FieldOptions.prototype.jstype = 0;

            /**
             * FieldOptions lazy.
             * @type {boolean}
             */
            FieldOptions.prototype.lazy = false;

            /**
             * FieldOptions deprecated.
             * @type {boolean}
             */
            FieldOptions.prototype.deprecated = false;

            /**
             * FieldOptions weak.
             * @type {boolean}
             */
            FieldOptions.prototype.weak = false;

            /**
             * FieldOptions uninterpretedOption.
             * @type {Array.<google.protobuf.UninterpretedOption$Properties>}
             */
            FieldOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * FieldOptions .gogoproto.nullable.
             * @type {boolean}
             */
            FieldOptions.prototype[".gogoproto.nullable"] = false;

            /**
             * FieldOptions .gogoproto.embed.
             * @type {boolean}
             */
            FieldOptions.prototype[".gogoproto.embed"] = false;

            /**
             * FieldOptions .gogoproto.customtype.
             * @type {string}
             */
            FieldOptions.prototype[".gogoproto.customtype"] = "";

            /**
             * FieldOptions .gogoproto.customname.
             * @type {string}
             */
            FieldOptions.prototype[".gogoproto.customname"] = "";

            /**
             * FieldOptions .gogoproto.jsontag.
             * @type {string}
             */
            FieldOptions.prototype[".gogoproto.jsontag"] = "";

            /**
             * FieldOptions .gogoproto.moretags.
             * @type {string}
             */
            FieldOptions.prototype[".gogoproto.moretags"] = "";

            /**
             * FieldOptions .gogoproto.casttype.
             * @type {string}
             */
            FieldOptions.prototype[".gogoproto.casttype"] = "";

            /**
             * FieldOptions .gogoproto.castkey.
             * @type {string}
             */
            FieldOptions.prototype[".gogoproto.castkey"] = "";

            /**
             * FieldOptions .gogoproto.castvalue.
             * @type {string}
             */
            FieldOptions.prototype[".gogoproto.castvalue"] = "";

            /**
             * FieldOptions .gogoproto.stdtime.
             * @type {boolean}
             */
            FieldOptions.prototype[".gogoproto.stdtime"] = false;

            /**
             * FieldOptions .gogoproto.stdduration.
             * @type {boolean}
             */
            FieldOptions.prototype[".gogoproto.stdduration"] = false;

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param {google.protobuf.FieldOptions$Properties=} [properties] Properties to set
             * @returns {google.protobuf.FieldOptions} FieldOptions instance
             */
            FieldOptions.create = function create(properties) {
                return new FieldOptions(properties);
            };

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param {google.protobuf.FieldOptions$Properties} message FieldOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ctype != null && message.hasOwnProperty("ctype"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ctype);
                if (message.packed != null && message.hasOwnProperty("packed"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.packed);
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.lazy != null && message.hasOwnProperty("lazy"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.lazy);
                if (message.jstype != null && message.hasOwnProperty("jstype"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.jstype);
                if (message.weak != null && message.hasOwnProperty("weak"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.weak);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".gogoproto.nullable"] != null && message.hasOwnProperty(".gogoproto.nullable"))
                    writer.uint32(/* id 65001, wireType 0 =*/520008).bool(message[".gogoproto.nullable"]);
                if (message[".gogoproto.embed"] != null && message.hasOwnProperty(".gogoproto.embed"))
                    writer.uint32(/* id 65002, wireType 0 =*/520016).bool(message[".gogoproto.embed"]);
                if (message[".gogoproto.customtype"] != null && message.hasOwnProperty(".gogoproto.customtype"))
                    writer.uint32(/* id 65003, wireType 2 =*/520026).string(message[".gogoproto.customtype"]);
                if (message[".gogoproto.customname"] != null && message.hasOwnProperty(".gogoproto.customname"))
                    writer.uint32(/* id 65004, wireType 2 =*/520034).string(message[".gogoproto.customname"]);
                if (message[".gogoproto.jsontag"] != null && message.hasOwnProperty(".gogoproto.jsontag"))
                    writer.uint32(/* id 65005, wireType 2 =*/520042).string(message[".gogoproto.jsontag"]);
                if (message[".gogoproto.moretags"] != null && message.hasOwnProperty(".gogoproto.moretags"))
                    writer.uint32(/* id 65006, wireType 2 =*/520050).string(message[".gogoproto.moretags"]);
                if (message[".gogoproto.casttype"] != null && message.hasOwnProperty(".gogoproto.casttype"))
                    writer.uint32(/* id 65007, wireType 2 =*/520058).string(message[".gogoproto.casttype"]);
                if (message[".gogoproto.castkey"] != null && message.hasOwnProperty(".gogoproto.castkey"))
                    writer.uint32(/* id 65008, wireType 2 =*/520066).string(message[".gogoproto.castkey"]);
                if (message[".gogoproto.castvalue"] != null && message.hasOwnProperty(".gogoproto.castvalue"))
                    writer.uint32(/* id 65009, wireType 2 =*/520074).string(message[".gogoproto.castvalue"]);
                if (message[".gogoproto.stdtime"] != null && message.hasOwnProperty(".gogoproto.stdtime"))
                    writer.uint32(/* id 65010, wireType 0 =*/520080).bool(message[".gogoproto.stdtime"]);
                if (message[".gogoproto.stdduration"] != null && message.hasOwnProperty(".gogoproto.stdduration"))
                    writer.uint32(/* id 65011, wireType 0 =*/520088).bool(message[".gogoproto.stdduration"]);
                return writer;
            };

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param {google.protobuf.FieldOptions$Properties} message FieldOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldOptions} FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ctype = reader.uint32();
                        break;
                    case 2:
                        message.packed = reader.bool();
                        break;
                    case 6:
                        message.jstype = reader.uint32();
                        break;
                    case 5:
                        message.lazy = reader.bool();
                        break;
                    case 3:
                        message.deprecated = reader.bool();
                        break;
                    case 10:
                        message.weak = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    case 65001:
                        message[".gogoproto.nullable"] = reader.bool();
                        break;
                    case 65002:
                        message[".gogoproto.embed"] = reader.bool();
                        break;
                    case 65003:
                        message[".gogoproto.customtype"] = reader.string();
                        break;
                    case 65004:
                        message[".gogoproto.customname"] = reader.string();
                        break;
                    case 65005:
                        message[".gogoproto.jsontag"] = reader.string();
                        break;
                    case 65006:
                        message[".gogoproto.moretags"] = reader.string();
                        break;
                    case 65007:
                        message[".gogoproto.casttype"] = reader.string();
                        break;
                    case 65008:
                        message[".gogoproto.castkey"] = reader.string();
                        break;
                    case 65009:
                        message[".gogoproto.castvalue"] = reader.string();
                        break;
                    case 65010:
                        message[".gogoproto.stdtime"] = reader.bool();
                        break;
                    case 65011:
                        message[".gogoproto.stdduration"] = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FieldOptions} FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FieldOptions message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            FieldOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ctype != null && message.hasOwnProperty("ctype"))
                    switch (message.ctype) {
                    default:
                        return "ctype: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.packed != null && message.hasOwnProperty("packed"))
                    if (typeof message.packed !== "boolean")
                        return "packed: boolean expected";
                if (message.jstype != null && message.hasOwnProperty("jstype"))
                    switch (message.jstype) {
                    default:
                        return "jstype: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.lazy != null && message.hasOwnProperty("lazy"))
                    if (typeof message.lazy !== "boolean")
                        return "lazy: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.weak != null && message.hasOwnProperty("weak"))
                    if (typeof message.weak !== "boolean")
                        return "weak: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                if (message[".gogoproto.nullable"] != null && message.hasOwnProperty(".gogoproto.nullable"))
                    if (typeof message[".gogoproto.nullable"] !== "boolean")
                        return ".gogoproto.nullable: boolean expected";
                if (message[".gogoproto.embed"] != null && message.hasOwnProperty(".gogoproto.embed"))
                    if (typeof message[".gogoproto.embed"] !== "boolean")
                        return ".gogoproto.embed: boolean expected";
                if (message[".gogoproto.customtype"] != null && message.hasOwnProperty(".gogoproto.customtype"))
                    if (!$util.isString(message[".gogoproto.customtype"]))
                        return ".gogoproto.customtype: string expected";
                if (message[".gogoproto.customname"] != null && message.hasOwnProperty(".gogoproto.customname"))
                    if (!$util.isString(message[".gogoproto.customname"]))
                        return ".gogoproto.customname: string expected";
                if (message[".gogoproto.jsontag"] != null && message.hasOwnProperty(".gogoproto.jsontag"))
                    if (!$util.isString(message[".gogoproto.jsontag"]))
                        return ".gogoproto.jsontag: string expected";
                if (message[".gogoproto.moretags"] != null && message.hasOwnProperty(".gogoproto.moretags"))
                    if (!$util.isString(message[".gogoproto.moretags"]))
                        return ".gogoproto.moretags: string expected";
                if (message[".gogoproto.casttype"] != null && message.hasOwnProperty(".gogoproto.casttype"))
                    if (!$util.isString(message[".gogoproto.casttype"]))
                        return ".gogoproto.casttype: string expected";
                if (message[".gogoproto.castkey"] != null && message.hasOwnProperty(".gogoproto.castkey"))
                    if (!$util.isString(message[".gogoproto.castkey"]))
                        return ".gogoproto.castkey: string expected";
                if (message[".gogoproto.castvalue"] != null && message.hasOwnProperty(".gogoproto.castvalue"))
                    if (!$util.isString(message[".gogoproto.castvalue"]))
                        return ".gogoproto.castvalue: string expected";
                if (message[".gogoproto.stdtime"] != null && message.hasOwnProperty(".gogoproto.stdtime"))
                    if (typeof message[".gogoproto.stdtime"] !== "boolean")
                        return ".gogoproto.stdtime: boolean expected";
                if (message[".gogoproto.stdduration"] != null && message.hasOwnProperty(".gogoproto.stdduration"))
                    if (typeof message[".gogoproto.stdduration"] !== "boolean")
                        return ".gogoproto.stdduration: boolean expected";
                return null;
            };

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldOptions} FieldOptions
             */
            FieldOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FieldOptions)
                    return object;
                var message = new $root.google.protobuf.FieldOptions();
                switch (object.ctype) {
                case "STRING":
                case 0:
                    message.ctype = 0;
                    break;
                case "CORD":
                case 1:
                    message.ctype = 1;
                    break;
                case "STRING_PIECE":
                case 2:
                    message.ctype = 2;
                    break;
                }
                if (object.packed != null)
                    message.packed = Boolean(object.packed);
                switch (object.jstype) {
                case "JS_NORMAL":
                case 0:
                    message.jstype = 0;
                    break;
                case "JS_STRING":
                case 1:
                    message.jstype = 1;
                    break;
                case "JS_NUMBER":
                case 2:
                    message.jstype = 2;
                    break;
                }
                if (object.lazy != null)
                    message.lazy = Boolean(object.lazy);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.weak != null)
                    message.weak = Boolean(object.weak);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                if (object[".gogoproto.nullable"] != null)
                    message[".gogoproto.nullable"] = Boolean(object[".gogoproto.nullable"]);
                if (object[".gogoproto.embed"] != null)
                    message[".gogoproto.embed"] = Boolean(object[".gogoproto.embed"]);
                if (object[".gogoproto.customtype"] != null)
                    message[".gogoproto.customtype"] = String(object[".gogoproto.customtype"]);
                if (object[".gogoproto.customname"] != null)
                    message[".gogoproto.customname"] = String(object[".gogoproto.customname"]);
                if (object[".gogoproto.jsontag"] != null)
                    message[".gogoproto.jsontag"] = String(object[".gogoproto.jsontag"]);
                if (object[".gogoproto.moretags"] != null)
                    message[".gogoproto.moretags"] = String(object[".gogoproto.moretags"]);
                if (object[".gogoproto.casttype"] != null)
                    message[".gogoproto.casttype"] = String(object[".gogoproto.casttype"]);
                if (object[".gogoproto.castkey"] != null)
                    message[".gogoproto.castkey"] = String(object[".gogoproto.castkey"]);
                if (object[".gogoproto.castvalue"] != null)
                    message[".gogoproto.castvalue"] = String(object[".gogoproto.castvalue"]);
                if (object[".gogoproto.stdtime"] != null)
                    message[".gogoproto.stdtime"] = Boolean(object[".gogoproto.stdtime"]);
                if (object[".gogoproto.stdduration"] != null)
                    message[".gogoproto.stdduration"] = Boolean(object[".gogoproto.stdduration"]);
                return message;
            };

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.FieldOptions.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldOptions} FieldOptions
             */
            FieldOptions.from = FieldOptions.fromObject;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param {google.protobuf.FieldOptions} message FieldOptions
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.ctype = options.enums === String ? "STRING" : 0;
                    object.packed = false;
                    object.deprecated = false;
                    object.lazy = false;
                    object.jstype = options.enums === String ? "JS_NORMAL" : 0;
                    object.weak = false;
                    object[".gogoproto.nullable"] = false;
                    object[".gogoproto.embed"] = false;
                    object[".gogoproto.customtype"] = "";
                    object[".gogoproto.customname"] = "";
                    object[".gogoproto.jsontag"] = "";
                    object[".gogoproto.moretags"] = "";
                    object[".gogoproto.casttype"] = "";
                    object[".gogoproto.castkey"] = "";
                    object[".gogoproto.castvalue"] = "";
                    object[".gogoproto.stdtime"] = false;
                    object[".gogoproto.stdduration"] = false;
                }
                if (message.ctype != null && message.hasOwnProperty("ctype"))
                    object.ctype = options.enums === String ? $root.google.protobuf.FieldOptions.CType[message.ctype] : message.ctype;
                if (message.packed != null && message.hasOwnProperty("packed"))
                    object.packed = message.packed;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.lazy != null && message.hasOwnProperty("lazy"))
                    object.lazy = message.lazy;
                if (message.jstype != null && message.hasOwnProperty("jstype"))
                    object.jstype = options.enums === String ? $root.google.protobuf.FieldOptions.JSType[message.jstype] : message.jstype;
                if (message.weak != null && message.hasOwnProperty("weak"))
                    object.weak = message.weak;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                if (message[".gogoproto.nullable"] != null && message.hasOwnProperty(".gogoproto.nullable"))
                    object[".gogoproto.nullable"] = message[".gogoproto.nullable"];
                if (message[".gogoproto.embed"] != null && message.hasOwnProperty(".gogoproto.embed"))
                    object[".gogoproto.embed"] = message[".gogoproto.embed"];
                if (message[".gogoproto.customtype"] != null && message.hasOwnProperty(".gogoproto.customtype"))
                    object[".gogoproto.customtype"] = message[".gogoproto.customtype"];
                if (message[".gogoproto.customname"] != null && message.hasOwnProperty(".gogoproto.customname"))
                    object[".gogoproto.customname"] = message[".gogoproto.customname"];
                if (message[".gogoproto.jsontag"] != null && message.hasOwnProperty(".gogoproto.jsontag"))
                    object[".gogoproto.jsontag"] = message[".gogoproto.jsontag"];
                if (message[".gogoproto.moretags"] != null && message.hasOwnProperty(".gogoproto.moretags"))
                    object[".gogoproto.moretags"] = message[".gogoproto.moretags"];
                if (message[".gogoproto.casttype"] != null && message.hasOwnProperty(".gogoproto.casttype"))
                    object[".gogoproto.casttype"] = message[".gogoproto.casttype"];
                if (message[".gogoproto.castkey"] != null && message.hasOwnProperty(".gogoproto.castkey"))
                    object[".gogoproto.castkey"] = message[".gogoproto.castkey"];
                if (message[".gogoproto.castvalue"] != null && message.hasOwnProperty(".gogoproto.castvalue"))
                    object[".gogoproto.castvalue"] = message[".gogoproto.castvalue"];
                if (message[".gogoproto.stdtime"] != null && message.hasOwnProperty(".gogoproto.stdtime"))
                    object[".gogoproto.stdtime"] = message[".gogoproto.stdtime"];
                if (message[".gogoproto.stdduration"] != null && message.hasOwnProperty(".gogoproto.stdduration"))
                    object[".gogoproto.stdduration"] = message[".gogoproto.stdduration"];
                return object;
            };

            /**
             * Creates a plain object from this FieldOptions message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldOptions.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this FieldOptions to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            FieldOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * CType enum.
             * @name CType
             * @memberof google.protobuf.FieldOptions
             * @enum {number}
             * @property {number} STRING=0 STRING value
             * @property {number} CORD=1 CORD value
             * @property {number} STRING_PIECE=2 STRING_PIECE value
             */
            FieldOptions.CType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "STRING"] = 0;
                values[valuesById[1] = "CORD"] = 1;
                values[valuesById[2] = "STRING_PIECE"] = 2;
                return values;
            })();

            /**
             * JSType enum.
             * @name JSType
             * @memberof google.protobuf.FieldOptions
             * @enum {number}
             * @property {number} JS_NORMAL=0 JS_NORMAL value
             * @property {number} JS_STRING=1 JS_STRING value
             * @property {number} JS_NUMBER=2 JS_NUMBER value
             */
            FieldOptions.JSType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "JS_NORMAL"] = 0;
                values[valuesById[1] = "JS_STRING"] = 1;
                values[valuesById[2] = "JS_NUMBER"] = 2;
                return values;
            })();

            return FieldOptions;
        })();

        protobuf.OneofOptions = (function() {

            /**
             * Properties of an OneofOptions.
             * @typedef google.protobuf.OneofOptions$Properties
             * @type {Object}
             * @property {Array.<google.protobuf.UninterpretedOption$Properties>} [uninterpretedOption] OneofOptions uninterpretedOption.
             */

            /**
             * Constructs a new OneofOptions.
             * @exports google.protobuf.OneofOptions
             * @constructor
             * @param {google.protobuf.OneofOptions$Properties=} [properties] Properties to set
             */
            function OneofOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OneofOptions uninterpretedOption.
             * @type {Array.<google.protobuf.UninterpretedOption$Properties>}
             */
            OneofOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param {google.protobuf.OneofOptions$Properties=} [properties] Properties to set
             * @returns {google.protobuf.OneofOptions} OneofOptions instance
             */
            OneofOptions.create = function create(properties) {
                return new OneofOptions(properties);
            };

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param {google.protobuf.OneofOptions$Properties} message OneofOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param {google.protobuf.OneofOptions$Properties} message OneofOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.OneofOptions} OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.OneofOptions} OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OneofOptions message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            OneofOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.OneofOptions} OneofOptions
             */
            OneofOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.OneofOptions)
                    return object;
                var message = new $root.google.protobuf.OneofOptions();
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.OneofOptions.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.OneofOptions} OneofOptions
             */
            OneofOptions.from = OneofOptions.fromObject;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param {google.protobuf.OneofOptions} message OneofOptions
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OneofOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Creates a plain object from this OneofOptions message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OneofOptions.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this OneofOptions to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            OneofOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return OneofOptions;
        })();

        protobuf.EnumOptions = (function() {

            /**
             * Properties of an EnumOptions.
             * @typedef google.protobuf.EnumOptions$Properties
             * @type {Object}
             * @property {boolean} [allowAlias] EnumOptions allowAlias.
             * @property {boolean} [deprecated] EnumOptions deprecated.
             * @property {Array.<google.protobuf.UninterpretedOption$Properties>} [uninterpretedOption] EnumOptions uninterpretedOption.
             * @property {boolean} [".gogoproto.goprotoEnumPrefix"] EnumOptions .gogoproto.goprotoEnumPrefix.
             * @property {boolean} [".gogoproto.goprotoEnumStringer"] EnumOptions .gogoproto.goprotoEnumStringer.
             * @property {boolean} [".gogoproto.enumStringer"] EnumOptions .gogoproto.enumStringer.
             * @property {string} [".gogoproto.enumCustomname"] EnumOptions .gogoproto.enumCustomname.
             * @property {boolean} [".gogoproto.enumdecl"] EnumOptions .gogoproto.enumdecl.
             */

            /**
             * Constructs a new EnumOptions.
             * @exports google.protobuf.EnumOptions
             * @constructor
             * @param {google.protobuf.EnumOptions$Properties=} [properties] Properties to set
             */
            function EnumOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumOptions allowAlias.
             * @type {boolean}
             */
            EnumOptions.prototype.allowAlias = false;

            /**
             * EnumOptions deprecated.
             * @type {boolean}
             */
            EnumOptions.prototype.deprecated = false;

            /**
             * EnumOptions uninterpretedOption.
             * @type {Array.<google.protobuf.UninterpretedOption$Properties>}
             */
            EnumOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * EnumOptions .gogoproto.goprotoEnumPrefix.
             * @type {boolean}
             */
            EnumOptions.prototype[".gogoproto.goprotoEnumPrefix"] = false;

            /**
             * EnumOptions .gogoproto.goprotoEnumStringer.
             * @type {boolean}
             */
            EnumOptions.prototype[".gogoproto.goprotoEnumStringer"] = false;

            /**
             * EnumOptions .gogoproto.enumStringer.
             * @type {boolean}
             */
            EnumOptions.prototype[".gogoproto.enumStringer"] = false;

            /**
             * EnumOptions .gogoproto.enumCustomname.
             * @type {string}
             */
            EnumOptions.prototype[".gogoproto.enumCustomname"] = "";

            /**
             * EnumOptions .gogoproto.enumdecl.
             * @type {boolean}
             */
            EnumOptions.prototype[".gogoproto.enumdecl"] = false;

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param {google.protobuf.EnumOptions$Properties=} [properties] Properties to set
             * @returns {google.protobuf.EnumOptions} EnumOptions instance
             */
            EnumOptions.create = function create(properties) {
                return new EnumOptions(properties);
            };

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param {google.protobuf.EnumOptions$Properties} message EnumOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allowAlias);
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".gogoproto.goprotoEnumPrefix"] != null && message.hasOwnProperty(".gogoproto.goprotoEnumPrefix"))
                    writer.uint32(/* id 62001, wireType 0 =*/496008).bool(message[".gogoproto.goprotoEnumPrefix"]);
                if (message[".gogoproto.goprotoEnumStringer"] != null && message.hasOwnProperty(".gogoproto.goprotoEnumStringer"))
                    writer.uint32(/* id 62021, wireType 0 =*/496168).bool(message[".gogoproto.goprotoEnumStringer"]);
                if (message[".gogoproto.enumStringer"] != null && message.hasOwnProperty(".gogoproto.enumStringer"))
                    writer.uint32(/* id 62022, wireType 0 =*/496176).bool(message[".gogoproto.enumStringer"]);
                if (message[".gogoproto.enumCustomname"] != null && message.hasOwnProperty(".gogoproto.enumCustomname"))
                    writer.uint32(/* id 62023, wireType 2 =*/496186).string(message[".gogoproto.enumCustomname"]);
                if (message[".gogoproto.enumdecl"] != null && message.hasOwnProperty(".gogoproto.enumdecl"))
                    writer.uint32(/* id 62024, wireType 0 =*/496192).bool(message[".gogoproto.enumdecl"]);
                return writer;
            };

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param {google.protobuf.EnumOptions$Properties} message EnumOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumOptions} EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        message.allowAlias = reader.bool();
                        break;
                    case 3:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    case 62001:
                        message[".gogoproto.goprotoEnumPrefix"] = reader.bool();
                        break;
                    case 62021:
                        message[".gogoproto.goprotoEnumStringer"] = reader.bool();
                        break;
                    case 62022:
                        message[".gogoproto.enumStringer"] = reader.bool();
                        break;
                    case 62023:
                        message[".gogoproto.enumCustomname"] = reader.string();
                        break;
                    case 62024:
                        message[".gogoproto.enumdecl"] = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumOptions} EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumOptions message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            EnumOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                    if (typeof message.allowAlias !== "boolean")
                        return "allowAlias: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                if (message[".gogoproto.goprotoEnumPrefix"] != null && message.hasOwnProperty(".gogoproto.goprotoEnumPrefix"))
                    if (typeof message[".gogoproto.goprotoEnumPrefix"] !== "boolean")
                        return ".gogoproto.goprotoEnumPrefix: boolean expected";
                if (message[".gogoproto.goprotoEnumStringer"] != null && message.hasOwnProperty(".gogoproto.goprotoEnumStringer"))
                    if (typeof message[".gogoproto.goprotoEnumStringer"] !== "boolean")
                        return ".gogoproto.goprotoEnumStringer: boolean expected";
                if (message[".gogoproto.enumStringer"] != null && message.hasOwnProperty(".gogoproto.enumStringer"))
                    if (typeof message[".gogoproto.enumStringer"] !== "boolean")
                        return ".gogoproto.enumStringer: boolean expected";
                if (message[".gogoproto.enumCustomname"] != null && message.hasOwnProperty(".gogoproto.enumCustomname"))
                    if (!$util.isString(message[".gogoproto.enumCustomname"]))
                        return ".gogoproto.enumCustomname: string expected";
                if (message[".gogoproto.enumdecl"] != null && message.hasOwnProperty(".gogoproto.enumdecl"))
                    if (typeof message[".gogoproto.enumdecl"] !== "boolean")
                        return ".gogoproto.enumdecl: boolean expected";
                return null;
            };

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumOptions} EnumOptions
             */
            EnumOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumOptions)
                    return object;
                var message = new $root.google.protobuf.EnumOptions();
                if (object.allowAlias != null)
                    message.allowAlias = Boolean(object.allowAlias);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                if (object[".gogoproto.goprotoEnumPrefix"] != null)
                    message[".gogoproto.goprotoEnumPrefix"] = Boolean(object[".gogoproto.goprotoEnumPrefix"]);
                if (object[".gogoproto.goprotoEnumStringer"] != null)
                    message[".gogoproto.goprotoEnumStringer"] = Boolean(object[".gogoproto.goprotoEnumStringer"]);
                if (object[".gogoproto.enumStringer"] != null)
                    message[".gogoproto.enumStringer"] = Boolean(object[".gogoproto.enumStringer"]);
                if (object[".gogoproto.enumCustomname"] != null)
                    message[".gogoproto.enumCustomname"] = String(object[".gogoproto.enumCustomname"]);
                if (object[".gogoproto.enumdecl"] != null)
                    message[".gogoproto.enumdecl"] = Boolean(object[".gogoproto.enumdecl"]);
                return message;
            };

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.EnumOptions.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumOptions} EnumOptions
             */
            EnumOptions.from = EnumOptions.fromObject;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param {google.protobuf.EnumOptions} message EnumOptions
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.allowAlias = false;
                    object.deprecated = false;
                    object[".gogoproto.goprotoEnumPrefix"] = false;
                    object[".gogoproto.goprotoEnumStringer"] = false;
                    object[".gogoproto.enumStringer"] = false;
                    object[".gogoproto.enumCustomname"] = "";
                    object[".gogoproto.enumdecl"] = false;
                }
                if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                    object.allowAlias = message.allowAlias;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                if (message[".gogoproto.goprotoEnumPrefix"] != null && message.hasOwnProperty(".gogoproto.goprotoEnumPrefix"))
                    object[".gogoproto.goprotoEnumPrefix"] = message[".gogoproto.goprotoEnumPrefix"];
                if (message[".gogoproto.goprotoEnumStringer"] != null && message.hasOwnProperty(".gogoproto.goprotoEnumStringer"))
                    object[".gogoproto.goprotoEnumStringer"] = message[".gogoproto.goprotoEnumStringer"];
                if (message[".gogoproto.enumStringer"] != null && message.hasOwnProperty(".gogoproto.enumStringer"))
                    object[".gogoproto.enumStringer"] = message[".gogoproto.enumStringer"];
                if (message[".gogoproto.enumCustomname"] != null && message.hasOwnProperty(".gogoproto.enumCustomname"))
                    object[".gogoproto.enumCustomname"] = message[".gogoproto.enumCustomname"];
                if (message[".gogoproto.enumdecl"] != null && message.hasOwnProperty(".gogoproto.enumdecl"))
                    object[".gogoproto.enumdecl"] = message[".gogoproto.enumdecl"];
                return object;
            };

            /**
             * Creates a plain object from this EnumOptions message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumOptions.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this EnumOptions to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            EnumOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumOptions;
        })();

        protobuf.EnumValueOptions = (function() {

            /**
             * Properties of an EnumValueOptions.
             * @typedef google.protobuf.EnumValueOptions$Properties
             * @type {Object}
             * @property {boolean} [deprecated] EnumValueOptions deprecated.
             * @property {Array.<google.protobuf.UninterpretedOption$Properties>} [uninterpretedOption] EnumValueOptions uninterpretedOption.
             * @property {string} [".gogoproto.enumvalueCustomname"] EnumValueOptions .gogoproto.enumvalueCustomname.
             */

            /**
             * Constructs a new EnumValueOptions.
             * @exports google.protobuf.EnumValueOptions
             * @constructor
             * @param {google.protobuf.EnumValueOptions$Properties=} [properties] Properties to set
             */
            function EnumValueOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumValueOptions deprecated.
             * @type {boolean}
             */
            EnumValueOptions.prototype.deprecated = false;

            /**
             * EnumValueOptions uninterpretedOption.
             * @type {Array.<google.protobuf.UninterpretedOption$Properties>}
             */
            EnumValueOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * EnumValueOptions .gogoproto.enumvalueCustomname.
             * @type {string}
             */
            EnumValueOptions.prototype[".gogoproto.enumvalueCustomname"] = "";

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param {google.protobuf.EnumValueOptions$Properties=} [properties] Properties to set
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions instance
             */
            EnumValueOptions.create = function create(properties) {
                return new EnumValueOptions(properties);
            };

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param {google.protobuf.EnumValueOptions$Properties} message EnumValueOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".gogoproto.enumvalueCustomname"] != null && message.hasOwnProperty(".gogoproto.enumvalueCustomname"))
                    writer.uint32(/* id 66001, wireType 2 =*/528010).string(message[".gogoproto.enumvalueCustomname"]);
                return writer;
            };

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param {google.protobuf.EnumValueOptions$Properties} message EnumValueOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    case 66001:
                        message[".gogoproto.enumvalueCustomname"] = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumValueOptions message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            EnumValueOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                if (message[".gogoproto.enumvalueCustomname"] != null && message.hasOwnProperty(".gogoproto.enumvalueCustomname"))
                    if (!$util.isString(message[".gogoproto.enumvalueCustomname"]))
                        return ".gogoproto.enumvalueCustomname: string expected";
                return null;
            };

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             */
            EnumValueOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumValueOptions)
                    return object;
                var message = new $root.google.protobuf.EnumValueOptions();
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                if (object[".gogoproto.enumvalueCustomname"] != null)
                    message[".gogoproto.enumvalueCustomname"] = String(object[".gogoproto.enumvalueCustomname"]);
                return message;
            };

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.EnumValueOptions.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             */
            EnumValueOptions.from = EnumValueOptions.fromObject;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param {google.protobuf.EnumValueOptions} message EnumValueOptions
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.deprecated = false;
                    object[".gogoproto.enumvalueCustomname"] = "";
                }
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                if (message[".gogoproto.enumvalueCustomname"] != null && message.hasOwnProperty(".gogoproto.enumvalueCustomname"))
                    object[".gogoproto.enumvalueCustomname"] = message[".gogoproto.enumvalueCustomname"];
                return object;
            };

            /**
             * Creates a plain object from this EnumValueOptions message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueOptions.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            EnumValueOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumValueOptions;
        })();

        protobuf.ServiceOptions = (function() {

            /**
             * Properties of a ServiceOptions.
             * @typedef google.protobuf.ServiceOptions$Properties
             * @type {Object}
             * @property {boolean} [deprecated] ServiceOptions deprecated.
             * @property {Array.<google.protobuf.UninterpretedOption$Properties>} [uninterpretedOption] ServiceOptions uninterpretedOption.
             */

            /**
             * Constructs a new ServiceOptions.
             * @exports google.protobuf.ServiceOptions
             * @constructor
             * @param {google.protobuf.ServiceOptions$Properties=} [properties] Properties to set
             */
            function ServiceOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceOptions deprecated.
             * @type {boolean}
             */
            ServiceOptions.prototype.deprecated = false;

            /**
             * ServiceOptions uninterpretedOption.
             * @type {Array.<google.protobuf.UninterpretedOption$Properties>}
             */
            ServiceOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param {google.protobuf.ServiceOptions$Properties=} [properties] Properties to set
             * @returns {google.protobuf.ServiceOptions} ServiceOptions instance
             */
            ServiceOptions.create = function create(properties) {
                return new ServiceOptions(properties);
            };

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param {google.protobuf.ServiceOptions$Properties} message ServiceOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param {google.protobuf.ServiceOptions$Properties} message ServiceOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 33:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServiceOptions message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            ServiceOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             */
            ServiceOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ServiceOptions)
                    return object;
                var message = new $root.google.protobuf.ServiceOptions();
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.ServiceOptions.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             */
            ServiceOptions.from = ServiceOptions.fromObject;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param {google.protobuf.ServiceOptions} message ServiceOptions
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults)
                    object.deprecated = false;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Creates a plain object from this ServiceOptions message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceOptions.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            ServiceOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ServiceOptions;
        })();

        protobuf.MethodOptions = (function() {

            /**
             * Properties of a MethodOptions.
             * @typedef google.protobuf.MethodOptions$Properties
             * @type {Object}
             * @property {boolean} [deprecated] MethodOptions deprecated.
             * @property {Array.<google.protobuf.UninterpretedOption$Properties>} [uninterpretedOption] MethodOptions uninterpretedOption.
             */

            /**
             * Constructs a new MethodOptions.
             * @exports google.protobuf.MethodOptions
             * @constructor
             * @param {google.protobuf.MethodOptions$Properties=} [properties] Properties to set
             */
            function MethodOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MethodOptions deprecated.
             * @type {boolean}
             */
            MethodOptions.prototype.deprecated = false;

            /**
             * MethodOptions uninterpretedOption.
             * @type {Array.<google.protobuf.UninterpretedOption$Properties>}
             */
            MethodOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param {google.protobuf.MethodOptions$Properties=} [properties] Properties to set
             * @returns {google.protobuf.MethodOptions} MethodOptions instance
             */
            MethodOptions.create = function create(properties) {
                return new MethodOptions(properties);
            };

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param {google.protobuf.MethodOptions$Properties} message MethodOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param {google.protobuf.MethodOptions$Properties} message MethodOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodOptions} MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 33:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MethodOptions} MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MethodOptions message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            MethodOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodOptions} MethodOptions
             */
            MethodOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MethodOptions)
                    return object;
                var message = new $root.google.protobuf.MethodOptions();
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.MethodOptions.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodOptions} MethodOptions
             */
            MethodOptions.from = MethodOptions.fromObject;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param {google.protobuf.MethodOptions} message MethodOptions
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults)
                    object.deprecated = false;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Creates a plain object from this MethodOptions message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodOptions.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this MethodOptions to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            MethodOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MethodOptions;
        })();

        protobuf.UninterpretedOption = (function() {

            /**
             * Properties of an UninterpretedOption.
             * @typedef google.protobuf.UninterpretedOption$Properties
             * @type {Object}
             * @property {Array.<google.protobuf.UninterpretedOption.NamePart$Properties>} [name] UninterpretedOption name.
             * @property {string} [identifierValue] UninterpretedOption identifierValue.
             * @property {number|Long} [positiveIntValue] UninterpretedOption positiveIntValue.
             * @property {number|Long} [negativeIntValue] UninterpretedOption negativeIntValue.
             * @property {number} [doubleValue] UninterpretedOption doubleValue.
             * @property {Uint8Array} [stringValue] UninterpretedOption stringValue.
             * @property {string} [aggregateValue] UninterpretedOption aggregateValue.
             */

            /**
             * Constructs a new UninterpretedOption.
             * @exports google.protobuf.UninterpretedOption
             * @constructor
             * @param {google.protobuf.UninterpretedOption$Properties=} [properties] Properties to set
             */
            function UninterpretedOption(properties) {
                this.name = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UninterpretedOption name.
             * @type {Array.<google.protobuf.UninterpretedOption.NamePart$Properties>}
             */
            UninterpretedOption.prototype.name = $util.emptyArray;

            /**
             * UninterpretedOption identifierValue.
             * @type {string}
             */
            UninterpretedOption.prototype.identifierValue = "";

            /**
             * UninterpretedOption positiveIntValue.
             * @type {number|Long}
             */
            UninterpretedOption.prototype.positiveIntValue = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * UninterpretedOption negativeIntValue.
             * @type {number|Long}
             */
            UninterpretedOption.prototype.negativeIntValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UninterpretedOption doubleValue.
             * @type {number}
             */
            UninterpretedOption.prototype.doubleValue = 0;

            /**
             * UninterpretedOption stringValue.
             * @type {Uint8Array}
             */
            UninterpretedOption.prototype.stringValue = $util.newBuffer([]);

            /**
             * UninterpretedOption aggregateValue.
             * @type {string}
             */
            UninterpretedOption.prototype.aggregateValue = "";

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param {google.protobuf.UninterpretedOption$Properties=} [properties] Properties to set
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption instance
             */
            UninterpretedOption.create = function create(properties) {
                return new UninterpretedOption(properties);
            };

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param {google.protobuf.UninterpretedOption$Properties} message UninterpretedOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UninterpretedOption.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.name.length)
                    for (var i = 0; i < message.name.length; ++i)
                        $root.google.protobuf.UninterpretedOption.NamePart.encode(message.name[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifierValue);
                if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.positiveIntValue);
                if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.negativeIntValue);
                if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                    writer.uint32(/* id 6, wireType 1 =*/49).double(message.doubleValue);
                if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                    writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.stringValue);
                if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.aggregateValue);
                return writer;
            };

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param {google.protobuf.UninterpretedOption$Properties} message UninterpretedOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UninterpretedOption.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UninterpretedOption.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        if (!(message.name && message.name.length))
                            message.name = [];
                        message.name.push($root.google.protobuf.UninterpretedOption.NamePart.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.identifierValue = reader.string();
                        break;
                    case 4:
                        message.positiveIntValue = reader.uint64();
                        break;
                    case 5:
                        message.negativeIntValue = reader.int64();
                        break;
                    case 6:
                        message.doubleValue = reader.double();
                        break;
                    case 7:
                        message.stringValue = reader.bytes();
                        break;
                    case 8:
                        message.aggregateValue = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UninterpretedOption.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UninterpretedOption message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            UninterpretedOption.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name")) {
                    if (!Array.isArray(message.name))
                        return "name: array expected";
                    for (var i = 0; i < message.name.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.NamePart.verify(message.name[i]);
                        if (error)
                            return "name." + error;
                    }
                }
                if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                    if (!$util.isString(message.identifierValue))
                        return "identifierValue: string expected";
                if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                    if (!$util.isInteger(message.positiveIntValue) && !(message.positiveIntValue && $util.isInteger(message.positiveIntValue.low) && $util.isInteger(message.positiveIntValue.high)))
                        return "positiveIntValue: integer|Long expected";
                if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                    if (!$util.isInteger(message.negativeIntValue) && !(message.negativeIntValue && $util.isInteger(message.negativeIntValue.low) && $util.isInteger(message.negativeIntValue.high)))
                        return "negativeIntValue: integer|Long expected";
                if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                    if (typeof message.doubleValue !== "number")
                        return "doubleValue: number expected";
                if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                    if (!(message.stringValue && typeof message.stringValue.length === "number" || $util.isString(message.stringValue)))
                        return "stringValue: buffer expected";
                if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                    if (!$util.isString(message.aggregateValue))
                        return "aggregateValue: string expected";
                return null;
            };

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             */
            UninterpretedOption.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UninterpretedOption)
                    return object;
                var message = new $root.google.protobuf.UninterpretedOption();
                if (object.name) {
                    if (!Array.isArray(object.name))
                        throw TypeError(".google.protobuf.UninterpretedOption.name: array expected");
                    message.name = [];
                    for (var i = 0; i < object.name.length; ++i) {
                        if (typeof object.name[i] !== "object")
                            throw TypeError(".google.protobuf.UninterpretedOption.name: object expected");
                        message.name[i] = $root.google.protobuf.UninterpretedOption.NamePart.fromObject(object.name[i]);
                    }
                }
                if (object.identifierValue != null)
                    message.identifierValue = String(object.identifierValue);
                if (object.positiveIntValue != null)
                    if ($util.Long)
                        (message.positiveIntValue = $util.Long.fromValue(object.positiveIntValue)).unsigned = true;
                    else if (typeof object.positiveIntValue === "string")
                        message.positiveIntValue = parseInt(object.positiveIntValue, 10);
                    else if (typeof object.positiveIntValue === "number")
                        message.positiveIntValue = object.positiveIntValue;
                    else if (typeof object.positiveIntValue === "object")
                        message.positiveIntValue = new $util.LongBits(object.positiveIntValue.low >>> 0, object.positiveIntValue.high >>> 0).toNumber(true);
                if (object.negativeIntValue != null)
                    if ($util.Long)
                        (message.negativeIntValue = $util.Long.fromValue(object.negativeIntValue)).unsigned = false;
                    else if (typeof object.negativeIntValue === "string")
                        message.negativeIntValue = parseInt(object.negativeIntValue, 10);
                    else if (typeof object.negativeIntValue === "number")
                        message.negativeIntValue = object.negativeIntValue;
                    else if (typeof object.negativeIntValue === "object")
                        message.negativeIntValue = new $util.LongBits(object.negativeIntValue.low >>> 0, object.negativeIntValue.high >>> 0).toNumber();
                if (object.doubleValue != null)
                    message.doubleValue = Number(object.doubleValue);
                if (object.stringValue != null)
                    if (typeof object.stringValue === "string")
                        $util.base64.decode(object.stringValue, message.stringValue = $util.newBuffer($util.base64.length(object.stringValue)), 0);
                    else if (object.stringValue.length)
                        message.stringValue = object.stringValue;
                if (object.aggregateValue != null)
                    message.aggregateValue = String(object.aggregateValue);
                return message;
            };

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.UninterpretedOption.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             */
            UninterpretedOption.from = UninterpretedOption.fromObject;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param {google.protobuf.UninterpretedOption} message UninterpretedOption
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UninterpretedOption.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.name = [];
                if (options.defaults) {
                    object.identifierValue = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.positiveIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.positiveIntValue = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.negativeIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.negativeIntValue = options.longs === String ? "0" : 0;
                    object.doubleValue = 0;
                    object.stringValue = options.bytes === String ? "" : [];
                    object.aggregateValue = "";
                }
                if (message.name && message.name.length) {
                    object.name = [];
                    for (var j = 0; j < message.name.length; ++j)
                        object.name[j] = $root.google.protobuf.UninterpretedOption.NamePart.toObject(message.name[j], options);
                }
                if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                    object.identifierValue = message.identifierValue;
                if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                    if (typeof message.positiveIntValue === "number")
                        object.positiveIntValue = options.longs === String ? String(message.positiveIntValue) : message.positiveIntValue;
                    else
                        object.positiveIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.positiveIntValue) : options.longs === Number ? new $util.LongBits(message.positiveIntValue.low >>> 0, message.positiveIntValue.high >>> 0).toNumber(true) : message.positiveIntValue;
                if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                    if (typeof message.negativeIntValue === "number")
                        object.negativeIntValue = options.longs === String ? String(message.negativeIntValue) : message.negativeIntValue;
                    else
                        object.negativeIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.negativeIntValue) : options.longs === Number ? new $util.LongBits(message.negativeIntValue.low >>> 0, message.negativeIntValue.high >>> 0).toNumber() : message.negativeIntValue;
                if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                    object.doubleValue = message.doubleValue;
                if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                    object.stringValue = options.bytes === String ? $util.base64.encode(message.stringValue, 0, message.stringValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.stringValue) : message.stringValue;
                if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                    object.aggregateValue = message.aggregateValue;
                return object;
            };

            /**
             * Creates a plain object from this UninterpretedOption message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UninterpretedOption.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            UninterpretedOption.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            UninterpretedOption.NamePart = (function() {

                /**
                 * Properties of a NamePart.
                 * @typedef google.protobuf.UninterpretedOption.NamePart$Properties
                 * @type {Object}
                 * @property {string} namePart NamePart namePart.
                 * @property {boolean} isExtension NamePart isExtension.
                 */

                /**
                 * Constructs a new NamePart.
                 * @exports google.protobuf.UninterpretedOption.NamePart
                 * @constructor
                 * @param {google.protobuf.UninterpretedOption.NamePart$Properties=} [properties] Properties to set
                 */
                function NamePart(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NamePart namePart.
                 * @type {string}
                 */
                NamePart.prototype.namePart = "";

                /**
                 * NamePart isExtension.
                 * @type {boolean}
                 */
                NamePart.prototype.isExtension = false;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param {google.protobuf.UninterpretedOption.NamePart$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart instance
                 */
                NamePart.create = function create(properties) {
                    return new NamePart(properties);
                };

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param {google.protobuf.UninterpretedOption.NamePart$Properties} message NamePart message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NamePart.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.namePart);
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isExtension);
                    return writer;
                };

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param {google.protobuf.UninterpretedOption.NamePart$Properties} message NamePart message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NamePart.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NamePart.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption.NamePart();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.namePart = reader.string();
                            break;
                        case 2:
                            message.isExtension = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("namePart"))
                        throw $util.ProtocolError("missing required 'namePart'", { instance: message });
                    if (!message.hasOwnProperty("isExtension"))
                        throw $util.ProtocolError("missing required 'isExtension'", { instance: message });
                    return message;
                };

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NamePart.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NamePart message.
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                NamePart.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isString(message.namePart))
                        return "namePart: string expected";
                    if (typeof message.isExtension !== "boolean")
                        return "isExtension: boolean expected";
                    return null;
                };

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 */
                NamePart.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.UninterpretedOption.NamePart)
                        return object;
                    var message = new $root.google.protobuf.UninterpretedOption.NamePart();
                    if (object.namePart != null)
                        message.namePart = String(object.namePart);
                    if (object.isExtension != null)
                        message.isExtension = Boolean(object.isExtension);
                    return message;
                };

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.UninterpretedOption.NamePart.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 */
                NamePart.from = NamePart.fromObject;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param {google.protobuf.UninterpretedOption.NamePart} message NamePart
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                NamePart.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.namePart = "";
                        object.isExtension = false;
                    }
                    if (message.namePart != null && message.hasOwnProperty("namePart"))
                        object.namePart = message.namePart;
                    if (message.isExtension != null && message.hasOwnProperty("isExtension"))
                        object.isExtension = message.isExtension;
                    return object;
                };

                /**
                 * Creates a plain object from this NamePart message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                NamePart.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this NamePart to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                NamePart.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return NamePart;
            })();

            return UninterpretedOption;
        })();

        protobuf.SourceCodeInfo = (function() {

            /**
             * Properties of a SourceCodeInfo.
             * @typedef google.protobuf.SourceCodeInfo$Properties
             * @type {Object}
             * @property {Array.<google.protobuf.SourceCodeInfo.Location$Properties>} [location] SourceCodeInfo location.
             */

            /**
             * Constructs a new SourceCodeInfo.
             * @exports google.protobuf.SourceCodeInfo
             * @constructor
             * @param {google.protobuf.SourceCodeInfo$Properties=} [properties] Properties to set
             */
            function SourceCodeInfo(properties) {
                this.location = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SourceCodeInfo location.
             * @type {Array.<google.protobuf.SourceCodeInfo.Location$Properties>}
             */
            SourceCodeInfo.prototype.location = $util.emptyArray;

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param {google.protobuf.SourceCodeInfo$Properties=} [properties] Properties to set
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo instance
             */
            SourceCodeInfo.create = function create(properties) {
                return new SourceCodeInfo(properties);
            };

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param {google.protobuf.SourceCodeInfo$Properties} message SourceCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SourceCodeInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.location != null && message.location.length)
                    for (var i = 0; i < message.location.length; ++i)
                        $root.google.protobuf.SourceCodeInfo.Location.encode(message.location[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param {google.protobuf.SourceCodeInfo$Properties} message SourceCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SourceCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SourceCodeInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.location && message.location.length))
                            message.location = [];
                        message.location.push($root.google.protobuf.SourceCodeInfo.Location.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SourceCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SourceCodeInfo message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            SourceCodeInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.location != null && message.hasOwnProperty("location")) {
                    if (!Array.isArray(message.location))
                        return "location: array expected";
                    for (var i = 0; i < message.location.length; ++i) {
                        var error = $root.google.protobuf.SourceCodeInfo.Location.verify(message.location[i]);
                        if (error)
                            return "location." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             */
            SourceCodeInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.SourceCodeInfo)
                    return object;
                var message = new $root.google.protobuf.SourceCodeInfo();
                if (object.location) {
                    if (!Array.isArray(object.location))
                        throw TypeError(".google.protobuf.SourceCodeInfo.location: array expected");
                    message.location = [];
                    for (var i = 0; i < object.location.length; ++i) {
                        if (typeof object.location[i] !== "object")
                            throw TypeError(".google.protobuf.SourceCodeInfo.location: object expected");
                        message.location[i] = $root.google.protobuf.SourceCodeInfo.Location.fromObject(object.location[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.SourceCodeInfo.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             */
            SourceCodeInfo.from = SourceCodeInfo.fromObject;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param {google.protobuf.SourceCodeInfo} message SourceCodeInfo
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SourceCodeInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.location = [];
                if (message.location && message.location.length) {
                    object.location = [];
                    for (var j = 0; j < message.location.length; ++j)
                        object.location[j] = $root.google.protobuf.SourceCodeInfo.Location.toObject(message.location[j], options);
                }
                return object;
            };

            /**
             * Creates a plain object from this SourceCodeInfo message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SourceCodeInfo.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            SourceCodeInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            SourceCodeInfo.Location = (function() {

                /**
                 * Properties of a Location.
                 * @typedef google.protobuf.SourceCodeInfo.Location$Properties
                 * @type {Object}
                 * @property {Array.<number>} [path] Location path.
                 * @property {Array.<number>} [span] Location span.
                 * @property {string} [leadingComments] Location leadingComments.
                 * @property {string} [trailingComments] Location trailingComments.
                 * @property {Array.<string>} [leadingDetachedComments] Location leadingDetachedComments.
                 */

                /**
                 * Constructs a new Location.
                 * @exports google.protobuf.SourceCodeInfo.Location
                 * @constructor
                 * @param {google.protobuf.SourceCodeInfo.Location$Properties=} [properties] Properties to set
                 */
                function Location(properties) {
                    this.path = [];
                    this.span = [];
                    this.leadingDetachedComments = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Location path.
                 * @type {Array.<number>}
                 */
                Location.prototype.path = $util.emptyArray;

                /**
                 * Location span.
                 * @type {Array.<number>}
                 */
                Location.prototype.span = $util.emptyArray;

                /**
                 * Location leadingComments.
                 * @type {string}
                 */
                Location.prototype.leadingComments = "";

                /**
                 * Location trailingComments.
                 * @type {string}
                 */
                Location.prototype.trailingComments = "";

                /**
                 * Location leadingDetachedComments.
                 * @type {Array.<string>}
                 */
                Location.prototype.leadingDetachedComments = $util.emptyArray;

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param {google.protobuf.SourceCodeInfo.Location$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location instance
                 */
                Location.create = function create(properties) {
                    return new Location(properties);
                };

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param {google.protobuf.SourceCodeInfo.Location$Properties} message Location message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Location.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.path != null && message.path.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (var i = 0; i < message.path.length; ++i)
                            writer.int32(message.path[i]);
                        writer.ldelim();
                    }
                    if (message.span != null && message.span.length) {
                        writer.uint32(/* id 2, wireType 2 =*/18).fork();
                        for (var i = 0; i < message.span.length; ++i)
                            writer.int32(message.span[i]);
                        writer.ldelim();
                    }
                    if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.leadingComments);
                    if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.trailingComments);
                    if (message.leadingDetachedComments != null && message.leadingDetachedComments.length)
                        for (var i = 0; i < message.leadingDetachedComments.length; ++i)
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.leadingDetachedComments[i]);
                    return writer;
                };

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param {google.protobuf.SourceCodeInfo.Location$Properties} message Location message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Location.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Location.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo.Location();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.path && message.path.length))
                                message.path = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.path.push(reader.int32());
                            } else
                                message.path.push(reader.int32());
                            break;
                        case 2:
                            if (!(message.span && message.span.length))
                                message.span = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.span.push(reader.int32());
                            } else
                                message.span.push(reader.int32());
                            break;
                        case 3:
                            message.leadingComments = reader.string();
                            break;
                        case 4:
                            message.trailingComments = reader.string();
                            break;
                        case 6:
                            if (!(message.leadingDetachedComments && message.leadingDetachedComments.length))
                                message.leadingDetachedComments = [];
                            message.leadingDetachedComments.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Location.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Location message.
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                Location.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.path != null && message.hasOwnProperty("path")) {
                        if (!Array.isArray(message.path))
                            return "path: array expected";
                        for (var i = 0; i < message.path.length; ++i)
                            if (!$util.isInteger(message.path[i]))
                                return "path: integer[] expected";
                    }
                    if (message.span != null && message.hasOwnProperty("span")) {
                        if (!Array.isArray(message.span))
                            return "span: array expected";
                        for (var i = 0; i < message.span.length; ++i)
                            if (!$util.isInteger(message.span[i]))
                                return "span: integer[] expected";
                    }
                    if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                        if (!$util.isString(message.leadingComments))
                            return "leadingComments: string expected";
                    if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                        if (!$util.isString(message.trailingComments))
                            return "trailingComments: string expected";
                    if (message.leadingDetachedComments != null && message.hasOwnProperty("leadingDetachedComments")) {
                        if (!Array.isArray(message.leadingDetachedComments))
                            return "leadingDetachedComments: array expected";
                        for (var i = 0; i < message.leadingDetachedComments.length; ++i)
                            if (!$util.isString(message.leadingDetachedComments[i]))
                                return "leadingDetachedComments: string[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 */
                Location.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.SourceCodeInfo.Location)
                        return object;
                    var message = new $root.google.protobuf.SourceCodeInfo.Location();
                    if (object.path) {
                        if (!Array.isArray(object.path))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.path: array expected");
                        message.path = [];
                        for (var i = 0; i < object.path.length; ++i)
                            message.path[i] = object.path[i] | 0;
                    }
                    if (object.span) {
                        if (!Array.isArray(object.span))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.span: array expected");
                        message.span = [];
                        for (var i = 0; i < object.span.length; ++i)
                            message.span[i] = object.span[i] | 0;
                    }
                    if (object.leadingComments != null)
                        message.leadingComments = String(object.leadingComments);
                    if (object.trailingComments != null)
                        message.trailingComments = String(object.trailingComments);
                    if (object.leadingDetachedComments) {
                        if (!Array.isArray(object.leadingDetachedComments))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.leadingDetachedComments: array expected");
                        message.leadingDetachedComments = [];
                        for (var i = 0; i < object.leadingDetachedComments.length; ++i)
                            message.leadingDetachedComments[i] = String(object.leadingDetachedComments[i]);
                    }
                    return message;
                };

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.SourceCodeInfo.Location.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 */
                Location.from = Location.fromObject;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param {google.protobuf.SourceCodeInfo.Location} message Location
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Location.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.path = [];
                        object.span = [];
                        object.leadingDetachedComments = [];
                    }
                    if (options.defaults) {
                        object.leadingComments = "";
                        object.trailingComments = "";
                    }
                    if (message.path && message.path.length) {
                        object.path = [];
                        for (var j = 0; j < message.path.length; ++j)
                            object.path[j] = message.path[j];
                    }
                    if (message.span && message.span.length) {
                        object.span = [];
                        for (var j = 0; j < message.span.length; ++j)
                            object.span[j] = message.span[j];
                    }
                    if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                        object.leadingComments = message.leadingComments;
                    if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                        object.trailingComments = message.trailingComments;
                    if (message.leadingDetachedComments && message.leadingDetachedComments.length) {
                        object.leadingDetachedComments = [];
                        for (var j = 0; j < message.leadingDetachedComments.length; ++j)
                            object.leadingDetachedComments[j] = message.leadingDetachedComments[j];
                    }
                    return object;
                };

                /**
                 * Creates a plain object from this Location message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Location.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this Location to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                Location.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Location;
            })();

            return SourceCodeInfo;
        })();

        protobuf.GeneratedCodeInfo = (function() {

            /**
             * Properties of a GeneratedCodeInfo.
             * @typedef google.protobuf.GeneratedCodeInfo$Properties
             * @type {Object}
             * @property {Array.<google.protobuf.GeneratedCodeInfo.Annotation$Properties>} [annotation] GeneratedCodeInfo annotation.
             */

            /**
             * Constructs a new GeneratedCodeInfo.
             * @exports google.protobuf.GeneratedCodeInfo
             * @constructor
             * @param {google.protobuf.GeneratedCodeInfo$Properties=} [properties] Properties to set
             */
            function GeneratedCodeInfo(properties) {
                this.annotation = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GeneratedCodeInfo annotation.
             * @type {Array.<google.protobuf.GeneratedCodeInfo.Annotation$Properties>}
             */
            GeneratedCodeInfo.prototype.annotation = $util.emptyArray;

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param {google.protobuf.GeneratedCodeInfo$Properties=} [properties] Properties to set
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo instance
             */
            GeneratedCodeInfo.create = function create(properties) {
                return new GeneratedCodeInfo(properties);
            };

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param {google.protobuf.GeneratedCodeInfo$Properties} message GeneratedCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeneratedCodeInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.annotation != null && message.annotation.length)
                    for (var i = 0; i < message.annotation.length; ++i)
                        $root.google.protobuf.GeneratedCodeInfo.Annotation.encode(message.annotation[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param {google.protobuf.GeneratedCodeInfo$Properties} message GeneratedCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeneratedCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GeneratedCodeInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.annotation && message.annotation.length))
                            message.annotation = [];
                        message.annotation.push($root.google.protobuf.GeneratedCodeInfo.Annotation.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GeneratedCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {?string} `null` if valid, otherwise the reason why it is not
             */
            GeneratedCodeInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.annotation != null && message.hasOwnProperty("annotation")) {
                    if (!Array.isArray(message.annotation))
                        return "annotation: array expected";
                    for (var i = 0; i < message.annotation.length; ++i) {
                        var error = $root.google.protobuf.GeneratedCodeInfo.Annotation.verify(message.annotation[i]);
                        if (error)
                            return "annotation." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             */
            GeneratedCodeInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.GeneratedCodeInfo)
                    return object;
                var message = new $root.google.protobuf.GeneratedCodeInfo();
                if (object.annotation) {
                    if (!Array.isArray(object.annotation))
                        throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: array expected");
                    message.annotation = [];
                    for (var i = 0; i < object.annotation.length; ++i) {
                        if (typeof object.annotation[i] !== "object")
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: object expected");
                        message.annotation[i] = $root.google.protobuf.GeneratedCodeInfo.Annotation.fromObject(object.annotation[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * This is an alias of {@link google.protobuf.GeneratedCodeInfo.fromObject}.
             * @function
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             */
            GeneratedCodeInfo.from = GeneratedCodeInfo.fromObject;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param {google.protobuf.GeneratedCodeInfo} message GeneratedCodeInfo
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GeneratedCodeInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.annotation = [];
                if (message.annotation && message.annotation.length) {
                    object.annotation = [];
                    for (var j = 0; j < message.annotation.length; ++j)
                        object.annotation[j] = $root.google.protobuf.GeneratedCodeInfo.Annotation.toObject(message.annotation[j], options);
                }
                return object;
            };

            /**
             * Creates a plain object from this GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param {$protobuf.ConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GeneratedCodeInfo.prototype.toObject = function toObject(options) {
                return this.constructor.toObject(this, options);
            };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns {Object.<string,*>} JSON object
             */
            GeneratedCodeInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            GeneratedCodeInfo.Annotation = (function() {

                /**
                 * Properties of an Annotation.
                 * @typedef google.protobuf.GeneratedCodeInfo.Annotation$Properties
                 * @type {Object}
                 * @property {Array.<number>} [path] Annotation path.
                 * @property {string} [sourceFile] Annotation sourceFile.
                 * @property {number} [begin] Annotation begin.
                 * @property {number} [end] Annotation end.
                 */

                /**
                 * Constructs a new Annotation.
                 * @exports google.protobuf.GeneratedCodeInfo.Annotation
                 * @constructor
                 * @param {google.protobuf.GeneratedCodeInfo.Annotation$Properties=} [properties] Properties to set
                 */
                function Annotation(properties) {
                    this.path = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Annotation path.
                 * @type {Array.<number>}
                 */
                Annotation.prototype.path = $util.emptyArray;

                /**
                 * Annotation sourceFile.
                 * @type {string}
                 */
                Annotation.prototype.sourceFile = "";

                /**
                 * Annotation begin.
                 * @type {number}
                 */
                Annotation.prototype.begin = 0;

                /**
                 * Annotation end.
                 * @type {number}
                 */
                Annotation.prototype.end = 0;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param {google.protobuf.GeneratedCodeInfo.Annotation$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation instance
                 */
                Annotation.create = function create(properties) {
                    return new Annotation(properties);
                };

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param {google.protobuf.GeneratedCodeInfo.Annotation$Properties} message Annotation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Annotation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.path != null && message.path.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (var i = 0; i < message.path.length; ++i)
                            writer.int32(message.path[i]);
                        writer.ldelim();
                    }
                    if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.sourceFile);
                    if (message.begin != null && message.hasOwnProperty("begin"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.begin);
                    if (message.end != null && message.hasOwnProperty("end"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.end);
                    return writer;
                };

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param {google.protobuf.GeneratedCodeInfo.Annotation$Properties} message Annotation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Annotation.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Annotation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.path && message.path.length))
                                message.path = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.path.push(reader.int32());
                            } else
                                message.path.push(reader.int32());
                            break;
                        case 2:
                            message.sourceFile = reader.string();
                            break;
                        case 3:
                            message.begin = reader.int32();
                            break;
                        case 4:
                            message.end = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Annotation.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Annotation message.
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                Annotation.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.path != null && message.hasOwnProperty("path")) {
                        if (!Array.isArray(message.path))
                            return "path: array expected";
                        for (var i = 0; i < message.path.length; ++i)
                            if (!$util.isInteger(message.path[i]))
                                return "path: integer[] expected";
                    }
                    if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                        if (!$util.isString(message.sourceFile))
                            return "sourceFile: string expected";
                    if (message.begin != null && message.hasOwnProperty("begin"))
                        if (!$util.isInteger(message.begin))
                            return "begin: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 */
                Annotation.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.GeneratedCodeInfo.Annotation)
                        return object;
                    var message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                    if (object.path) {
                        if (!Array.isArray(object.path))
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.Annotation.path: array expected");
                        message.path = [];
                        for (var i = 0; i < object.path.length; ++i)
                            message.path[i] = object.path[i] | 0;
                    }
                    if (object.sourceFile != null)
                        message.sourceFile = String(object.sourceFile);
                    if (object.begin != null)
                        message.begin = object.begin | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.GeneratedCodeInfo.Annotation.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 */
                Annotation.from = Annotation.fromObject;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param {google.protobuf.GeneratedCodeInfo.Annotation} message Annotation
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Annotation.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.path = [];
                    if (options.defaults) {
                        object.sourceFile = "";
                        object.begin = 0;
                        object.end = 0;
                    }
                    if (message.path && message.path.length) {
                        object.path = [];
                        for (var j = 0; j < message.path.length; ++j)
                            object.path[j] = message.path[j];
                    }
                    if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                        object.sourceFile = message.sourceFile;
                    if (message.begin != null && message.hasOwnProperty("begin"))
                        object.begin = message.begin;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Creates a plain object from this Annotation message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Annotation.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this Annotation to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                Annotation.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Annotation;
            })();

            return GeneratedCodeInfo;
        })();

        return protobuf;
    })();

    return google;
})();

$root.gogoproto = (function() {

    /**
     * Namespace gogoproto.
     * @exports gogoproto
     * @namespace
     */
    var gogoproto = {};

    return gogoproto;
})();

module.exports = $root;
