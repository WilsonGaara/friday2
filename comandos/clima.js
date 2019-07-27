//Vars:
var Discord = require('discord.js');
var fs = require('fs');
//Programação:
module.exports.run = async (bot, message, args, prefix) => {
var weather = require("weather-js");
weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) { 
 const Discord2 = require('discord.js');

 const embed2 = new Discord2.RichEmbed()
.setAuthor(message.author.tag, message.author.displayAvatarURL)
.setColor('BLUE')
.setTitle(':thinking: .clima')
.setDescription('Exibe as informações "climáticas" de um específico lugar!\n\n:information_desk_person: **Como usar:** ,clima cidade\n\n:book: **Exemplo:**\n.clima `Caruaru`')
 .setFooter(`Utilitários • Website: Em trabalho`, message.author.displayAvatarURL)
 if(args.length < 1) return message.channel.send({embed : embed2});

if (result === undefined || result.length === 0) return message.channel.send(':x: **|** '+message.author+' Não encontrei nenhuma cidade chamada `'+args.join(' ')+'`')


 // Variáveis
 var current = result[0].current; 
 var location = result[0].location;
 var forecast = result[0].forecast[1];
 var amanha = result[0].forecast[2];
 
 // Abaixo ele vai enviar uma msg.channel falando o resumo da previsão do tempo para derteminado local! (inclui args)

// Vai constar a váriavel Discord que requer discord.js
 const Discord = require('discord.js');
let embed = new Discord.RichEmbed()
.setColor('BLUE')
.setAuthor(`Previsão do tempo para: ${location.name}`, bot.user.avatarURL)
.setDescription(`**${current.skytext}**\nNeste local faz: ${current.temperature}°C`)
.setThumbnail(current.imageUrl)
.addField('Temperaturas:', `Máximo: ${forecast.high}°C\n**Atual:** ${current.temperature}°C\nMais baixa: ${forecast.low}°C`, true)
.addField('Umidade:', `${current.humidity}% (Baixa umidade ajuda na proliferação de gripe!)`, true)
.addField('Data:', `${current.date} - ${current.day}`, true)
.addField('Placar do vento:', current.winddisplay, true)
.addField('Sensação térmica:', `${current.feelslike}°C`, true) 
.addField("Precipitação | Chance de chuva", forecast.precip+"%", true)
.setFooter(`Atualizado às: ${current.observationtime}`, message.author.displayAvatarURL)
message.channel.send(embed).then(message1 => {

message.channel.send(`**${amanha.skytextday}**\nPelo visto amanhã(${amanha.day}) em: ${location.name}, a média vai ser: ${amanha.high}/${amanha.low}°C \nChance de chuva: ${amanha.precip}%`)
});
});
};
//Encerrado, vamos definir as aliases e o nome da função.
module.exports.config = {
    name: "clima",
    aliases: ["weather", "pocketweater", "verclima", "accuweather"]
}