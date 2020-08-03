module.exports = {
   name: 'gwc',
   desription: "This is the first command interaction with the smoke-js library.",
   execute(message, args){
   
        // Load Smoke Library
        const SMK = require('@smokenetwork/smoke-js');
        
        SMK.api.getWitnessCount(function(err, result) {
          console.log(err, result);
        });
        
        
        message.channel.send('https://smoke.io');
   }
}
