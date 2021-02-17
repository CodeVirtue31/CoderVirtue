const Discord = require('discord.js');
exports.run = function (client, message, args) {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**Bunu Yapabilmek İçin Yeterli Yetkiye Sahib Değilsin**");
  if (!args[0]) return message.channel.send("Silinecek mesajın miktarını yaz!");
  message.delete()
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`• **${args[0]} Adet Mesaj Silindi.**`)
  })
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['clear' , 'sil'],
  permLevel: 1
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};  