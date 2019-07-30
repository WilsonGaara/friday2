//Vars:
var Discord = require('discord.js');
var fs = require('fs');
//Programação:
module.exports.run = async (bot, message, args) => {
const moment = require('moment');
moment.locale('pt-BR');
 if (message.mentions.users.first()) {
         var userapelido = message.guild.member(message.mentions.users.first()).nickname
var us = message.mentions.users.first();
      var user = message.mentions.users.first().username;
      var userfoto = message.mentions.users.first().displayAvatarURL;
    var userstatus = message.mentions.users.first().presence.status;
    var usertag = message.mentions.users.first().tag;
    var usercolorole = message.guild.member(message.mentions.users.first()).displayHexColor;
    var usercriado = message.mentions.users.first().createdTimestamp;
    var userid = message.mentions.users.first().id;
  var game2 = message.mentions.users.first().presence.game;
  
  var userentrou = message.guild.member(message.mentions.users.first().id).joinedTimestamp;
  var usercargo = message.guild.member(message.mentions.users.first().id).roles;
  var userbot = message.mentions.users.first().bot;
  
    } else {
      us = message.author;
      user = message.author.username;
      userfoto = message.author.displayAvatarURL;
      userstatus = message.author.presence.status;
    usertag = message.author.tag;
    usercolorole = message.guild.member(message.author.id).highestRole.displayHexColor;
    usercriado = message.author.createdTimestamp;
    userid = message.author.id;
    game2 = message.author.presence.game;
     
    userentrou = message.guild.member(message.author.id).joinedTimestamp;
    usercargo = message.guild.member(message.author.id).roles;
    userapelido = message.guild.member(message.author.id).nickname
    userbot = message.author.bot;
    }
    function stats() {
      var status = userstatus
      if  (status == "online") {
      return "<:b_online2:585881537493467175> Disponível"
    } else if (status == "offline") {
      return ("<:b_offline2:585881529079824385> Indisponível")
      } else if  (status == "dnd") {
      return ("<:b_dnd2:585881517314539523> Ocupado")
      } else if (status == "idle") {
      return ("<:b_idle2:585881544124661801> Ausente")
      }
    }
    const cargus = usercargo.map(u => u.name).join(", ")
    function playing(){
      var playings = game2
      if(playings != undefined){
          return playings.name;
      }else{
          return "Não detectado";
      }
  }

const diasEntrouNoServer = moment.duration(message.createdTimestamp - userentrou).asDays()
const diasContaCriada = moment.duration(message.createdTimestamp - usercriado).asDays()
if(us.presence.game !== null) {
if(us.presence.game.type == 1) {
var embed3 = new Discord.RichEmbed()
.setAuthor('Informações de: '+user, userfoto)
.setThumbnail(userfoto)
.addField(`:satellite_orbital: Status:`, `${stats()}`)
.addField(":date: Criou a conta em:", `${moment(usercriado).format('lll')} (${Math.floor(diasContaCriada)} dias)`)
.addField(":date: Entrou aqui em:", `${moment(userentrou).format('lll')} (${Math.floor(diasEntrouNoServer)} dias)`)
.addField(`<:b_stream2:585881521320230942> Transmitindo:`, `[${us.presence.game.name}](${us.presence.game.url})`, true)
.addField(`:computer: ID:`, userid, true )
.addField(`:computer: Tag no Discord:`, usertag, true)
.addField(`▪ ▫ ▪ Cargos:`, cargus , true)
.setColor('BLUE')
.setTimestamp()
.setFooter('Obrigado por me apoiar nesta jornada', bot.user.avatarURL)
return message.channel.send(embed3)
}}
if(us.presence.game !== null) {
if(us.presence.game.type == 3) {
var embed3 = new Discord.RichEmbed()
.setAuthor('Informações de: '+user, userfoto)
.setThumbnail(userfoto)
.addField(`:satellite_orbital: Status:`, `${stats()}`)
.addField(":date: Criou a conta em:", `${moment(usercriado).format('lll')} (${Math.floor(diasContaCriada)} dias)`)
.addField(":date: Entrou aqui em:", `${moment(userentrou).format('lll')} (${Math.floor(diasEntrouNoServer)} dias)`)
.addField(`📺 Assistindo: `, `[${us.presence.game.name}](${us.presence.game.url})`, true)
.addField(`:computer: ID:`, userid, true )
.addField(`:computer: Tag no Discord:`, usertag, true)
.addField(`▪ ▫ ▪ Cargos:`, cargus , true)
.setColor('BLUE')
.setTimestamp()
.setFooter('Obrigado por me apoiar nesta jornada', bot.user.avatarURL)
return message.channel.send(embed3)
}}
if(us.presence.game !== null) {
if(us.presence.game.type == 2) {
var embed3 = new Discord.RichEmbed()
.setAuthor('Informações de: '+user, userfoto)
.setThumbnail(userfoto)
.addField(`:satellite_orbital: Status:`, `${stats()}`)
.addField(":date: Criou a conta em:", `${moment(usercriado).format('lll')} (${Math.floor(diasContaCriada)} dias)`)
.addField(":date: Entrou aqui em:", `${moment(userentrou).format('lll')} (${Math.floor(diasEntrouNoServer)} dias)`)
.addField(`🎵 Ouvindo: `, `[${us.presence.game.name}](${us.presence.game.url})`, true)
.addField(`:computer: ID:`, userid, true )
.addField(`:computer: Tag no Discord:`, usertag, true)
.addField(`▪ ▫ ▪ Cargos:`, cargus , true)
.setColor('BLUE')
.setTimestamp()
.setFooter('Obrigado por me apoiar nesta jornada', bot.user.avatarURL)
return message.channel.send(embed3)
}}
if(us.presence.game !== null) { 
var embed = new Discord.RichEmbed()
.setAuthor('Informações de: '+user, userfoto)
.setThumbnail(userfoto)
.addField(`:satellite_orbital: Status:`, `${stats()}`)
.addField(":date: Criou a conta em:", `${moment(usercriado).format('lll')} (${Math.floor(diasContaCriada)} dias)`)
.addField(":date: Entrou aqui em:", `${moment(userentrou).format('lll')} (${Math.floor(diasEntrouNoServer)} dias)`)
.addField(`🎮 Jogando 📰:`, `**${playing()}**\n${moment(us.presence.game.timestamps.start).startOf('minute').fromNow()}`, true)
.addField(`:computer: ID:`, userid, true )
.addField(`:computer: Tag no Discord:`, usertag, true)
.addField(`▪ ▫ ▪ Cargos:`, cargus , true)
.setColor('BLUE')
.setTimestamp()
.setFooter('Obrigado por me apoiar nesta jornada', bot.user.avatarURL)
return message.channel.send(embed)
} else {
var embed1 = new Discord.RichEmbed()
.setAuthor('Informações de: '+user, userfoto)
.setThumbnail(userfoto)
.addField(`:satellite_orbital: Status:`, `${stats()}`)
.addField(":date: Criou a conta em:", `${moment(usercriado).format('lll')} (${Math.floor(diasContaCriada)} dias)`)
.addField(":date: Entrou aqui em:", `${moment(userentrou).format('lll')} (${Math.floor(diasEntrouNoServer)} dias)`)
.addField(`🎮 Jogando:`, `**Nada no momento**`, true)
.addField(`:computer: ID:`, userid, true )
.addField(`:computer: Tag no Discord:`, usertag, true)
.addField(`▪ ▫ ▪ Cargos:`, cargus , true)
.setColor('BLUE')
.setTimestamp()
.setFooter('Obrigado por me apoiar nesta jornada', bot.user.avatarURL)
return message.channel.send(embed1)
};



  };
//Encerrado, vamos definir as aliases e o nome da função.
module.exports.config = {
    name: "userinfo",
    aliases: ["ui"]
}
