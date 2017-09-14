const utils = require("./utils");


test('converts fluidly back and forth from datetime', ()=> {
    "use strict";
    var date = new Date(1000);

    var timestamp = utils.dateToTimestamp(date);
    expect(timestamp.seconds).toBe(1);

    var reconstitutedDate = utils.timestampToDate(timestamp);

    expect(reconstitutedDate.getTime()).toBe(1000);


    date = new Date(100);
    timestamp = utils.dateToTimestamp(date);
    expect(timestamp.seconds).toBe(0);
    expect(timestamp.nanos).toBe(100 * 1000000);

    expect(utils.timestampToDate(timestamp).getTime()).toBe(100);
});