// Relay Discord Bot
// Written By @relaylogix
// SD: Aug 2, 2020

// import libraries

// discord library
const DISCORD = require('discord.js');
// Set New Discord Client
const BOT = new DISCORD.Client();

// FileSystem library
const FS = require('fs');

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
  // Does The Command Start With The Prefix And Command Not Sent By Bot - Exit On Bad Condition
  if(!msg.content.startswith(PRE) || msg.author.BOT) return;
  
  // Setup Command Variables
  const args = msg.content.slice(PRE, length).split(/ +/);
  const cmd = args.shift().toLowerCase();
  
  // Start Of Command Interpretation
  if(cmd === 'ping'){
     msg.channel.send('Pong');
  }

// End Of Command Handler
});

// Initial Bot Logon
BOT.login('<BotToken>');
