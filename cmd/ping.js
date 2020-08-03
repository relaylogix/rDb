module.exports = {
   name: 'get',
   desription: "This is a test ping command.",
   execute(message, args){
        message.channel.send('**HIGH!**');
   }
}
