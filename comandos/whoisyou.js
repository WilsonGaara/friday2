//Vars:
var Discord = require('discord.js');
var fs = require('fs');
//Programação:
module.exports.run = async (bot, message, args, prefix, authornick, botnick) => {
let embed = new Discord.RichEmbed()
.setColor(`BLUE`)
.setAuthor("Olá, eu sou sua Assistente :-)", bot.user.avatarURL)
.setDescription(`Olá, meu nome é: ${authornick}. Bom, você deve ser **${botnick}**, _nice to meet you_. Bom, eu sou uma assistente _s.f_ eu fui desenvolvida por: **${bot.users.get("577271597564428299").tag}** e minha missão em seu mundo é ajudar no que você precisar, seja nas tarefas, emocionalmente, socialmente, entre outros. Eu acho que por isso é só. Até, senhor ^^ :wave:.\nUm robô ~~sem~~ fins lucrativos. :wink: _Doe pufavô_.`)
.setThumbnail(message.author.displayAvatarURL)
.setFooter(authornick+" / v3.6.9 | Status: Operacional (Ação imperativa por parte de: "+message.author.tag+" )", bot.user.displayAvatarURL)
message.channel.send(embed);
message.channel.send("_Um robô inspirado em F.R.I.D.A.Y_ e desenvolvido por um brasileiro.")
};
//Encerrado, vamos definir as aliases e o nome da função.
module.exports.config = {
    name: "whoisyou",
    aliases: ["quemevoce", "botinfo", "info", "biografia", "bio", "b-i", "infobot"]
}