const Simpcert = require("./simpcert");

test('Can generate a new cert', () => {
   cert = new Simpcert({
       orgName: "insaasity",
       commonName: "alice",
       isCa: false
   });
   cert.generate()
   expect(cert.commonName).toBe("alice");
});