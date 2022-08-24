module.exports = {
    name: 'calibrate',
    desc: '**(Bot owner only)**\nCalibrates the bot.',
    show: true,
    aliases: ['cal'],
    execute(msg, args) {
        const { MessageEmbed } = require('discord.js');
        const fs = require('fs')
        if(msg.author.id === "785469781163245569" && !fs.existsSync('./flags/h.flag')) {
            fs.writeFileSync('./flags/h.flag', '.', (err) => {
                console.log(err)
            })
            console.log("Calibration requested.")
            const calEmbed = new MessageEmbed()
                .setColor('#ffffff')
                .setTitle('Calibration')
                .setDescription('This will send messages as all available characters in the channel you executed it in.\nAre you sure you want to calibrate?\n\nType `st/confirm` to start calibration or `st/cancel` to cancel.')
                .setTimestamp()
                .setFooter({ text: 'Created with ❤️ for ST fans, by ST fans.' });
            msg.channel.send({embeds: [calEmbed]})
        } else if(fs.existsSync('./flags/h.flag')) {
            return
        } else {
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