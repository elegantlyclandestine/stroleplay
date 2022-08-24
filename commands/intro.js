module.exports = {
    name: 'intro',
    desc: 'Gives an introductory walkthrough on how to use *Stranger Roleplay.*',
    args: true,
    show: true,
    aliases: ['i'],
    execute(msg, args) {
        const { MessageEmbed } = require('discord.js');
        const introEmbed = new MessageEmbed()
            .setColor('#eeeeee')
            .setTitle('Stranger Roleplay')
            .setDescription('__Welcome to **Stranger Roleplay**!__\n\nThis bot can be used to create or continue roleplays should the original cast/other users be unavailable or busy.\n\nTo see the list of available characters, type `st/list [page number]` (without brackets).\n\nNow, type `st/character [message]` to talk as a Stranger Things character!\n\nIf you have any suggestions, feedback or bug reports, direct them to `brivy@0915`.\n\n__**Happy roleplaying!**__')
            .setTimestamp()
            .setFooter({ text: 'Created with ❤️ for ST fans, by ST fans.' });
        msg.channel.send({embeds: [introEmbed]})
        return;
    } 
}