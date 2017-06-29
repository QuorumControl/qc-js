const Simpcert = require("./simpcert");
const forge = require('./forge');

test('Can generate a new cert', () => {
   var cert = new Simpcert({
       orgName: "insaasity",
       commonName: "alice",
       isCa: false
   });
   cert.generate();
   expect(cert.commonName).toBe("alice");
});

test('can convert from pem', ()=> {
    "use strict";
    var simpcert = new Simpcert({
        orgName: "insaasity",
        commonName: "alice",
        isCa: false
    });
    simpcert.generate();

    var pem = simpcert.toPem()

    var reconstituted = Simpcert.fromPem(pem);

    expect(reconstituted.commonName).toBe(simpcert.commonName);
    expect(reconstituted.orgName).toBe(simpcert.orgName);
    expect(reconstituted.isCa).toBe(simpcert.isCa);
});

test('can sign', ()=> {
    "use strict";
    var data = "I am some data";
    var cert = new Simpcert({
        orgName: "insaasity",
        commonName: "alice",
        isCa: false
    });
    cert.generate();

    var sig = cert.sign(data);
    expect(sig.length).toBe(256);
});