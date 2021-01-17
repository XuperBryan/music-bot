module.exports= {
    name: 'ping',
    description: "This is a ping command!",
    usage: "-ping\n\n",
    execute(message, args){
        message.channel.send('pong!');
    }
}