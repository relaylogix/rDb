module.exports = {
   name: 'get_reply',
   desription: "This command returns the replies to a post on the Smoke Network.",
   execute(message, args){

        // Load Smoke Library
        const SMK = require('@smokenetwork/smoke-js');
        const resultP = SMK.api.getContentAsync('relaylogix', 'gorilla-passion-outdoor-grow-update');
        resultP.then(result => console.log(result));

        }
}
