require("dotenv").config();
var plivo = require('plivo');
var Mailjet = require('node-mailjet').connect(process.env.MAILJET_AUTH_KEY, process.env.MAILJET_AUTH_SECRET);
//console.log(process.env.PlIVO_AUTH_ID);
var client = new plivo.Client(process.env.PlIVO_AUTH_ID, process.env.PlIVO_AUTH_TOKEN);
var sendEmail = Mailjet.post('send');

class SendMessage{
    constructor(){

    };
    sendSMS (ph,msg) {
        return new Promise((resolve,reject) => {
            client.messages.create(
                '17706915276',
                ph,
                msg
              ).then((message_created) => {
                resolve(message_created);
              }).catch((err) => {
                  reject(err);
              });
        });
    };

    sendEmail (eadd,sub,msg){
        return new Promise((resolve,reject) => {
            var emailData = {
                'FromEmail': 'john.steskal@ge.com',
                'FromName': 'MyGig',
                'Subject': sub,
                'Text-part': msg,
                'Recipients': [{'Email': eadd}]
            };
            sendEmail.request(emailData).then((response) => {
                resolve(response);
            })
            .catch((err) => {
                reject(err);
            });

        });
    }
}

module.exports = SendMessage;