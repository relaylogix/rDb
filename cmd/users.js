module.exports = {
   name: 'users',
   desription: "This command sends the Smoke.io account count to the channel.",
   execute(message, args){
        const FS = require('fs');
        FS.readFile('./logs/accounts', (error, inputString) => {
                if(error) throw err;
                message.channel.send(`There are currently **${inputString.toString()}** registered users on the Smoke Network.`);
        });
   }
}
