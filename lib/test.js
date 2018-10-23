var Msging = require("./Messaging");

var msgSend = new Msging
/*
msgSend.sendSMS("19175354837","Test 123").then(rslt => {
    console.log(rslt);
}).catch(err => {
    console.log(err);
})*/

msgSend.sendEmail("john.steskal@ge.com","test","This is a test from node").then(rslt => {
    console.log(rslt);
}).catch(err =>{
    console.log(err);
})