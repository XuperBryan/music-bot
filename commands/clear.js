module.exports= {
    name: 'clear',
    description: "Description: Clears the discord chat",
    usage: "Usage: -clear <numberToClear>\n\n",
    async execute(message, args){
        if(!args[0]) return message.reply("Please enter the amount of messages to clear!");
        if(isNaN(args[0])) return message.reply("Please enter a real number!");

        if(args[0] > 100) return message.reply("You cannot delete more than 100 messages");
        if(args[0] < 1) return message.reply("Please enter a positive number");

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        });
    }
}