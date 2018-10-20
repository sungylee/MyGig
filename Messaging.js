var plivo = require('plivo');
var Mailjet = require('node-mailjet').connect('e29ebdddc7f4325e7158d3930300dee1', 'dd45b369e5462994f22a5289fb13a05e');;

var client = new plivo.Client('MANJI1N2E4ZTAWMGM0N2', 'YzI5YjMwNWIzOWZiY2RiMDAzMGZlODNjMDgzMzlk');
var sendEmail = Mailjet.post('send');

class SendMessage{
    constructor(){

    };
    sendSMS (ph,msg) {
        return new Promise((resolve,reject) => {
            client.messages.create(
                '678-231-2489',
                ph,
                msg
              ).then((message_created) => {
                resolve(message_created);
              }).catch((err) => {
                  reject(err);
              });
        });
    };

    sendEmail (eadd,msg){
        return new Promise((resolve,reject) => {
            var emailData = {
                'FromEmail': 'mygGig@GE.com',
                'FromName': 'MyGig',
                'Subject': 'Test with the NodeJS Mailjet wrapper',
                'Text-part': 'Hello NodeJs !',
                'Recipients': [{'Email': eadd}]
            }
            mailjet.sendContent('sender@example.com',
         ['recipient1@example.com', 'bcc:recipient2@example.com'],
         'This is a test !',
         'text',
         'Well, this is working !').

        });
    }
}