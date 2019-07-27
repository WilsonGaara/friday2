//Vars:
var Discord = require('discord.js');
var fs = require('fs');
//Programação:
module.exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first() || message.author
if(!bot.users.get(args[0])) {
    let embed = new Discord.RichEmbed()
    .setColor('GOLD')
    .setImage(user.displayAvatarURL)
    .setFooter("(Ação imperativa por parte de: "+message.author.tag+")", message.author.displayAvatarURL)
   return message.channel.send(embed)
} else {
    let embed1 = new Discord.RichEmbed()
    .setColor('GOLD')
    .setImage(bot.users.get(args[0]).displayAvatarURL)
    .setFooter("(Ação imperativa por parte de: "+message.author.tag+")", message.author.displayAvatarURL)
    return message.channel.send(embed1)
}
};
//Encerrado, vamos definir as aliases e o nome da função.
module.exports.config = {
    name: "avatar",
    aliases: ["pfp", "profilepicture", "fotodeperfil", "pp"]
}