var md5 = require('md5');

class PassHash{
    constructor(){};
    compare(pw,hash) {
        return new Promise((resolve,reject) =>{
            var passpw = md5(pw);
            if(pw === hash)
            {
                resolve(true);
            }
            else
            {
                reject(false);
            }
        
        }
        );
    }
    createhash(pw) {
        return new Promise((resolve,reject) =>{
            var passpw; 
            try{
                passwd = md5(pw);
                resolve(passwd);
            }
            catch(e){
                reject(e);
            }   
        
        }
        );
    }
}

module.exports = PassHash;