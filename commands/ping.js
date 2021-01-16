module.exports= {
    name: 'ping',
    description: "Description: This is a ping command!",
    usage: "Usage: -ping\n\n",
    execute(message, args){
        message.channel.send('pong!');
    }
}