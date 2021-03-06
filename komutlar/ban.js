const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
  let sunucu = client.guilds.get("?") /// Sunucu ID'si
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
if(!message.member.roles.has("?") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Bu komutu kullanmaya yetkin yok."); /// Ban Yetkisini Kullabilicek Rol ID
  let guild = message.guild
  let user = message.mentions.users.first();
  let sebep = args.slice(1).join(" ") || `Belirtilmemiş.`
  let yasaklayankisi = `Yasaklayan : ${message.author.tag} - ${message.author.id}`
  if (!user) return message.channel.send(`Kimi asacaksın kanka`)
  if(sunucu.members.get(user.id).roles.has("694656538379419699")) return message.channel.send("Bu kişiyi banlayamazsın!").then(m => m.delete(9000)); /// Banlanılmicak Rol ID
if (user == message.author) return message.channel.send(`Asacağın kişiyi etiketlemelisin kanka`)
   message.react('694659294377017345')
  let embed2 = new Discord.RichEmbed()
  .addField(`Biri asıldı mı sanki he?`, `<a:y_:694659294377017345> **Yasaklayan :** ${message.author.tag} \n <a:y_:694659294377017345> **Yasaklanan :** ${user.tag}\n <a:y_:694659294377017345> **Yasaklama Nedeni :** ${sebep} `)
  .setImage('https://media2.giphy.com/media/P4bLhbzfxDaM0/giphy.gif?cid=790b7611927a1206a32a987fa98e88a78b2a26dcabe41fd6&rid=giphy.gif')
  let userembed = new Discord.RichEmbed()
  .setColor("BLUE")
  .setAuthor(`Banlandın Xd`, user.avatarURL)
  .setDescription(`**${guild.name}** sunucusundan **${sebep}** sebebiyle asıldın.`)
  .setImage('https://media2.giphy.com/media/P4bLhbzfxDaM0/giphy.gif?cid=790b7611927a1206a32a987fa98e88a78b2a26dcabe41fd6&rid=giphy.gif')
  user.send(userembed)
 message.guild.member(user).ban(`${sebep} | ${yasaklayankisi}`).catch(error => message.reply("Üyeyi yasaklamak için yetkim yetmiyor."))  
 message.channel.send(embed2).then(m => m.delete(9000));
    let embed4 = new Discord.RichEmbed()
    .setColor("#000000")
    .setDescription("`"+user.tag+"`"+` Kullanıcısı ${message.author} Tarafından **${sebep}** Nedeniyle banlandı.`)
    .setFooter(`${client.user.tag}` , `${client.user.displayAvatarURL}`)
    .setTimestamp()  
    let kanal1 = message.guild.channels.get("?") /// Log Kanal ID
    if(!kanal1) return
    kanal1.send(embed4)
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yasakla'],
  permLevel: 0
};
exports.help = {
  name: 'ban',
  description: 'Belirttiğiniz kullanıcıyı sunucudan yasaklar.',
  usage: 'yasakla <@kullanıcı> sebep' 
};