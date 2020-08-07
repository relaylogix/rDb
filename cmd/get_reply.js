module.exports = {
   name: 'get_reply',
   desription: "This command returns the replies to a post on the Smoke Network.",
   execute(message, args){

        // Load Smoke Library
        const SMK = require('@smokenetwork/smoke-js');
        // Load File System
        const fs = require('fs');
        // Call For Content
        SMOKEDATA = SMK.api.getContentAsync('relaylogix', 'gorilla-passion-outdoor-grow-update');
        // Once content received write to file for later computation.
        SMOKEDATA.then(result => fs.writeFileSync('./logs/gr.RAM', JSON.stringify(result)));
        // Recall content for computation
        fs.readFile('./logs/gr.RAM', 'utf8', function(err, data){
                // Console test line ****TO BE REMOVED
                console.log(JSON.stringify(data));
                // var data now holds the JSON we want to work with(parse)

                });
        }
}

