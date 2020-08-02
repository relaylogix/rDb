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

// Bot Connection message
BOT.on('ready', () => { console.log(`${BOT.user.tag} is online.`); });

// Bot Message Recieve
BOT.on('message', msg => {
// Start Of Command Handler




// End Of Command Handler
});

// Initial Bot Logon
BOT.login('<BotToken>');
