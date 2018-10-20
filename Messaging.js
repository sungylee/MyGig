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