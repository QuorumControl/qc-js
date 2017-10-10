const deviceInfo = require('./device');

test('can set deviceInfo', ()=> {
    "use strict";
    deviceInfo.setInfo({UUID: "custom"});
    expect(deviceInfo.getInfo().UUID).toBe("custom");
    deviceInfo.setInfo(null);
});