const Discord = require('discord.js');
const fs = require('fs');

module.exports= {
    name: 'help',
    description: "Sends a proper usage log to the chat",
    usage: "-help\n\n",
    execute(message, args){
        var list = [];

    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
    let result = commandFiles.forEach((file, i) => {
        let props = require(`./${file}`);
        var command = {
            name: props.usage,
            value: props.description,
        };

        list.push(command);
    });

    const embed = new Discord.MessageEmbed()
        .setColor('#693699')
        .setAuthor('Music-Bot Help')
        .setDescription('**Full Command List**')
        .addFields(
            list
        )
        .setFooter('Thanks for using music-bot!')
    message.channel.send(embed)
   }
}
