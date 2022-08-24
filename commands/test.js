module.exports = {
    name: 'test',
    desc: '**(Bot owner only)**\nPuts the bot in Test Mode, disabling all commands for regular users.',
    show: true,
    aliases: ['t'],
    execute(msg, args) {
        const { MessageEmbed } = require('discord.js');
        const fs = require('fs')
        if(msg.author.id === "785469781163245569" && !fs.existsSync('./flags/h2.flag') && !fs.existsSync('./flags/test.flag')) {
            fs.writeFileSync('./flags/h2.flag', '.', (err) => {
                console.log(err)
            })
            console.log("Test mode requested.")
            const testEmbed = new MessageEmbed()
                .setColor('#ffffff')
                .setTitle('Test Mode')
                .setDescription('This will disable commands for all users except you, to test new features in Stranger Roleplay.\nAre you sure you want to activate Test Mode?\n\nType `st/confirm` to enable Test Mode or `st/cancel` to cancel.')
                .setTimestamp()
                .setFooter({ text: 'Created with ❤️ for ST fans, by ST fans.' });
            msg.channel.send({embeds: [testEmbed]})
        } else if(fs.existsSync('./flags/h2.flag')) {
            return
        } else if(msg.author.id === "785469781163245569" && fs.existsSync('./flags/test.flag')) {
            const noPermsEmbed = new MessageEmbed()
                .setColor('#bc100d')
                .setTitle('Failed')
                .setDescription("You already have Test Mode turned on.")
                .setTimestamp()
                .setFooter({ text: 'Created with ❤️ for ST fans, by ST fans.' });
        msg.channel.send({embeds: [noPermsEmbed]})
            return
        }else {
            const messages = require('../resources/st_lines.json')
            var det = Math.floor(Math.random() * 20);
            var randomText = messages[det]
            const noPermsEmbed = new MessageEmbed()
                .setColor('#bc100d')
                .setTitle('Failed')
                .setDescription(randomText)
                .setTimestamp()
                .setFooter({ text: 'Created with ❤️ for ST fans, by ST fans.' });
            msg.channel.send({embeds: [noPermsEmbed]})
        }
    }
}