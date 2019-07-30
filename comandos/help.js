//Vars:
var Discord = require('discord.js');
var fs = require('fs');
//Programação:
module.exports.run = async (bot, message, args, prefix, authornick, botnick) => {
    message.channel.send(`✅ Olá, ${botnick}, deseja ver o que posso fazer?`);
    message.channel.send("Meus comandos são: \n`"+bot.commands.map(c => "."+c.config.name).join(', ')+"`")  
    
    var embed = new Discord.RichEmbed()
    .setColor(`#00ffff`)
    .setTimestamp()
    .setAuthor("Oferecido por Friday ^^", message.author.displayAvatarURL)
    .setDescription("Ah, vamos lá.\nAqui estão os comandos de música:\n`play` `np` `queue` `skip`")
    .setFooter("Comandos de música 🎵", bot.user.avatarURL)
    message.channel.send(embed)
    };
//Encerrado, vamos definir as aliases e o nome da função.
module.exports.config = {
    name: "help",
    aliases: ["ajuda", "comandos", "cmds", "cmd", "commands"]
}
