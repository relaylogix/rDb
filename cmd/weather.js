module.exports = {
   name: 'weather',
   desription: "This command will create a embedded current weather forcast.",
   execute(message, args){
        const DISCORD = require('discord.js');
        const WTH = require('weather-js');
        WTH.find({search: args.join(" "), degreeType: 'F'}, function(err, result) {
                if(err) message.channel.send(err);
                if(undefined === result || result.length === 0) {
                        message.channel.send(`${message.author} there is no forecast for  your location. Please try again later.`);
                        return;
                }
                var cur = result[0].current;
                var loc = result[0].location;
                const WTHCHART = new DISCORD.MessageEmbed()
                        .setColor('#009900')
                        .setAuthor(`Current Conditions For: ${cur.observationpoint}`)
                        .setDescription(`**${cur.skytext}**`)
                        .setThumbnail(cur.imageUrl)
                        .addFields(
                                { name: 'Temperature: ', value: `${cur.temperature} °F` },
                                { name: '\u200B', value: `Current Mood ${cur.feelslike}` },
                                { name: '\u200B', value: `Have a smokey day ${message.author} come join us - [Smoke Network](https://smoke.io)`, inline: true }
                        )
                        .setImage('https://img.smoke.io/img0/relaylogix/8f0cebcb28d75b6d94863eb2161a8bca847d033a.jpeg', 'https://smoke.io')
                        .setFooter(`[the #1 cannabis community]`);


        message.channel.send(WTHCHART);
        });
   }
}
