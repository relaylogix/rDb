module.exports = {
   name: 'commands',
   desription: "This command will create an embedded commands list.",
   execute(message, args){
    const DISCORD = require('discord.js');
    const CMDS = new DISCORD.MessageEmbed()
                        .setColor('#009900')
                        .setAuthor(`Commands For Relay`)
                        .setDescription()
                        .setThumbnail('https://img.smoke.io/img0/relaylogix/836b7e96f9d0d7a726971bf628ab64bad6b4ef09.jpeg')
                        .addFields(
                                { name: 'Test Connection', value: `]get` },
                                { name: 'Send Smoke.io Link', value: `]l` },
                                { name: 'Weater For Location', value: `]w location` },
                                { name: 'Get Current Alltime Smoke.io Witness Count', value: `]gwc` },
                                { name: 'Return Comment Authors For Post On Smoke.io', value: `]gr author permlink` },
                                
                                { name: '\u200B', value: `Have a smokey day ${message.author} come join us - [Smoke Network](https://smoke.io)`, inline: true }
                        )
                        .setImage('https://img.smoke.io/img0/relaylogix/8f0cebcb28d75b6d94863eb2161a8bca847d033a.jpeg', 'https://smoke.io')
                        .setFooter(`[the #1 cannabis community]`);


        message.channel.send(CMDS);
        });
   }
}
