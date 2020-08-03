module.exports = {
   name: 'gwc',
   desription: "This command returns the alltime smoke network registered witness count.",
   execute(message, args){

        // Load Smoke Library
        const SMK = require('@smokenetwork/smoke-js');

        SMK.api.getWitnessCount(function(err, result) {
                if(!err){
                console.log(`Witness Count Alltime: ${result}`);
                message.channel.send(`Since the beginning, the total Smoke Network witnesses count is: ${result}`);
                }
        });
        }
}
