//import discord javascript api
const Discord = require('discord.js')
//open a new instance of the discord client
const bot = new Discord.Client()
// declare the command trigger to be used
const prefix = ']';
// import filesystem api
const fs = require('fs');
// weather add
const weather = require('weather-js');
var acts;

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./cmd/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
   const command = require(`./cmd/${file}`);

   bot.commands.set(command.name, command);
}

bot.on('ready', () => {
    console.log("Connected as " + bot.user.tag)
})

bot.on('message', msg => {
        fs.readFile('./logs/accounts', (error, inputString) => {
                if(error) throw err;
                if(!msg.content.startsWith(prefix) || msg.author.bot) return;
                        const args = msg.content.slice(prefix.length).split(/ +/);
                        const command = args.shift().toLowerCase();
                if(command === 'ping'){
                        bot.commands.get('ping').execute(msg, args);
                }
                if(command === 'link'){
                        console.log('Smoke.io Link request.');
                        bot.commands.get('link').execute(msg, args);
                }
                if(command === 'users'){
                        console.log('User count request.');
                        msg.channel.send('There are currently **' + inputString.toString() + '** registered accounts on the Smoke Network.');
                        acts = '';
                }
                if(command === 'maker'){
                        console.log('@relaylogix');
                        msg.channel.send('I was created by @relaylogix');
                }
                if(command === 'weather'){
                        weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) {
                                var cur = result[0].current;
                                var loc = result[0].location;
                                const weatherEmbed = new Discord.MessageEmbed()
                                .setColor('#0099ff')
                                .setTitle('SMK Weather')
                                .setAuthor('@relaylogix')
                                .setDescription(`**${cur.skytext}**`)
                                .setThumbnail(cur.imageUrl)
                                .addFields(
                                        { name: 'Temp', value: '${cur.temperature}' }
                                        { name: '\u200B', value: '\u200B' },
                                        { name: 'Inline field title', value: 'Some value here', inline: true },
                                        { name: 'Inline field title', value: 'Some value here', inline: true },
                                )
                                .addField('Inline field title', 'Some value here', true)
                                .setImage('https://i.imgur.com/wSTFkRM.png')
                                .setTimestamp()
                                .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
                                msg.channel.send(WeatherEmbed);
                                msg.channel.send(JSON.stringify(result[0].current, $
                        });

                }
        })

});

discord_token = "<token>"

bot.login(discord_token)

