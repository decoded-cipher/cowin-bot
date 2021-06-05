require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client();
var PREFIX = "$"

client.login(process.env.DISCORDJS_BOT_TOKEN);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', (message) => {
    // console.log(`[${message.author.tag}] : ${message.content}`); 
    if (message.content.startsWith(PREFIX)) {
        var [CMD_NAME, ...args] = message.content.trim().substring(PREFIX.length).split("/\s+/");

        // console.log(CMD_NAME);
        // console.log(args);

        if (CMD_NAME === 'wakeup') {
            message.channel.send('Whats Up, Mahn...')
            message.reply('Bye, Let me take a Nap...')
        }
    }
})


client.on('guildMemberAdd', guildMember => {

    var welcomeImages = [
        "http://www.whykol.com/wp-content/uploads/2015/04/godfather-051.jpg",
        "http://www.whykol.com/wp-content/uploads/2015/04/godfather-050.jpg",
        "https://commentphotos.com/images/opengraph/CommentPhotos.com_1392031418.jpg",
        "http://www.whykol.com/wp-content/uploads/2014/11/punjabi-house-163.jpg"
    ]
    var randomIndex = Math.floor(Math.random() * welcomeImages.length);

    guildMember.guild.channels.cache.get('849255437228572703').send(`Welcome <@${guildMember.user.id}> to Inovus Labs IEDC Discord Server!\n`, {
        files: [`${welcomeImages[randomIndex]}`]
    })
})