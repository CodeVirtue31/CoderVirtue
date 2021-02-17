const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;

    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField("Sunucudaki üye sayısı", message.guild.memberCount)
        .addField("Seslideki üye sayısı", count)
        .setFooter(`virtue#1522 | Tarafından Yapıldı`)
    message.channel.send(embed);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['info'],
    permLevel: 0  
};

exports.help = {
    name: 'say',
    description: 'Say',
    usage: 'say'
};

