// Relay Discord Bot
// Written By @relaylogix
// SD: Aug 2, 2020

// import libraries

// discord library
const DISCORD = require('discord.js');
// Set New Discord Client
const BOT = new DISCORD.Client();
// Set Remote Bot Command File Collection
BOT.commands = new DISCORD.Collection();

// FileSystem library
const FS = require('fs');
// Set File System Objects
const CMDF = FS.readdirSync('./cmd/').filter(file => file.endsWith('.js'));

// Populate Remote Bot Command Files
for(const file of CMDF){
  const command = require(`./cmd/${file}`);
  BOT.commands.set(command.name, command);
}

// Smoke Library
const SMK = require('@smokenetwork/smoke-js');

// Weather library
const WTH = require('weather-js');

// Set Global Constants

// Command Prefix To Use
const PRE = ']';


// Bot Connection message
BOT.on('ready', () => { console.log(`${BOT.user.tag} is online.`); });

// Bot Message Recieve
BOT.on('message', msg => {
// Start Of Command Handler
  // Setup Command Variables
  const args = msg.content.slice(PRE.length).split(/ +/);
  const cmd = args.shift().toLowerCase();

  if(!msg.author.BOT){
  // chat scanning code
  
  }
  // Does The Command Start With The Prefix And Command Not Sent By Bot - Exit On Bad Condition
  if(!msg.content.startsWith(PRE) || msg.author.BOT) return;
  

  // For Testing Control
        console.log(`${msg.author} - ${cmd} - ${args}`);

  // Start Of Command Interpretation


  // Base Command To Check For Connection And Functionality
  if(cmd === 'get'){
     BOT.commands.get('get').execute(msg, args);
  }

  if(cmd === ']]'){
     // List of commands
    BOT.commands.get('commands').execute(msg, args);
  }

  // Smoke Link Sender
  if(cmd === 'l'){
     BOT.commands.get('link').execute(msg, args);
  }

  // Smoke Active Accounts Count
  if(cmd === 'u'){
     BOT.commands.get('users').execute(msg, args);
  }

  if(cmd === 'w'){
     BOT.commands.get('weather').execute(msg, args);
  }
  if(cmd === 'gwc'){
     BOT.commands.get('gwc').execute(msg, args);
  }
  if(cmd === 'gr'){
     BOT.commands.get('get_reply').execute(msg, args);
  }
  if(cmd === 'nu'){
     BOT.commands.get('new_users').execute(msg, args);
  }

// End Of Command Handler
});
// Initial Bot Logon
BOT.login('<bot-token>');
