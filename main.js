const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();
//const TOKEN = process.env.TOKEN;

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('Music-bot is online now!');
    client.user.setActivity("-hug");
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'help'){
        client.commands.get('help').execute(message, args);
    } else if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    } else if(command === 'play'){
        client.commands.get('play').execute(message, args);
    } else if(command === 'leave'){
        client.commands.get('leave').execute(message, args);
    } else {
        message.channel.send('Unrecognized command. Enter -help for proper usage');
    }
});

client.login(process.env.CLIENT_TOKEN);