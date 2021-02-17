const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  if(!message.member.roles.has('?')) return message.reply(`**Bu Komudu Kullanabilmek İçin Gerekli Yetkiye Sahip Olmalısın**`); // bu role sahip olmadan kullanamayacak komutu
  let verilecekRol = message.guild.roles.get("?"); // Eklenecek Rolün ID'si
  let üye = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!üye) return message.channel.send(`Kime işlem yapılacağını belirtmelisin!`);
  üye.roles.has(verilecekRol.id) ? üye.removeRole(verilecekRol.id).then(a => message.reply(`<a:y_:679699053419692060> **Başarıyla \`${verilecekRol.name}\` rolü verildi!`)) : üye.addRole(verilecekRol.id).then(a => message.reply(`**Başarıyla \`${verilecekRol.name}\` rolü verildi!**`));
};

exports.conf = {
  enabled: true, 
  guildOnly: true,
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'vip', 
  description: 'Ayarlanan rolü verir.', 
  usage: 'rol',
  kategori: 'yetkili'
};