const Discord = require('discord.js');
const db = require("quick.db")

exports.run = async (client, message, args) => {

if(!message.member.roles.has("?")) return message.channel.send(`**Bu komutu kullanabilmek için Yeterli Yetkiye Sahip Değilsin.**`); /// ? Yazan Yere Bu Rolü Kullanabilicek Rol ID
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send('**Kullanıcıyı etiketlemeyi unuttun kanka.**')
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  member.addRole('?')//Verilecek Rol ID
  member.removeRole('?')//Alınacak Rol ID
  let embed = new Discord.RichEmbed()
  .setColor('BLACK')
  .setDescription(`${kullanıcı} **üyesine** <@&?> **rolü verildi!**`)
  .setFooter(`Komutu kullanan yetkili : ${message.author.username}`) 
  message.react('emoji id')
  return message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kız" , "bayan"],
  kategori: "KULLANICI KOMUTLARI",
  permLevel: 0
}

exports.help = {
  name: 'kayıt',
  description: "qwe",
  usage: 'üye'
}