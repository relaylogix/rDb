// Relay Discord Bot
// Written By @relaylogix
// SD: Aug 2, 2020

// import libraries

// discord library
const DISCORD = require('discord.js');

const BOT = new DISCORD.Client();

BOT.on('ready', () => { console.log(`${BOT.user.tag} is online.`); });
BOT.on('message', msg => {

});

// Initial Bot Logon
BOT.login('<BotToken>');
