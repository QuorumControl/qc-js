const Simpcert = require("./simpcert");

test('Can generate a new cert', () => {
   var cert = new Simpcert({
       orgName: "insaasity",
       commonName: "alice",
       isCa: false
   });
   cert.generate()
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