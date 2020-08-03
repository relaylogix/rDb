module.exports = {
   name: 'link',
   desription: "This command sends the Smoke.io link to the channel.",
   execute(message, args){
        message.channel.send('https://smoke.io');
   }
}
