module.exports = {
    name: 'cancel',
    show: false,
    execute(msg, args) {
        const { MessageEmbed } = require('discord.js');
        const fs = require('fs')
        if(msg.author.id === "785469781163245569" && fs.existsSync('./flags/h.flag') && !fs.existsSync('./flags/cal.flag')) {
            console.log("Calibration cancelled.")
            fs.unlinkSync('./flags/h.flag', (err) => {
                console.log(err)
            })
            const calCanEmbed = new MessageEmbed()
            //83ccb0
                .setColor('#bc100d')
                .setTitle('Calibration')
                .setDescription('Calibration cancelled.')
                .setTimestamp()
                .setFooter({ text: 'Created with ❤️ for ST fans, by ST fans.' });
            msg.channel.send({embeds: [calCanEmbed]})
        } else if (msg.author.id === "785469781163245569" && fs.existsSync('./h2.flag') && !fs.existsSync('./test.flag')) {
            console.log("Test Mode initiation cancelled.")
            fs.unlinkSync('./flags/h2.flag', (err) => {
                console.log(err)
            })
            const calCanEmbed = new MessageEmbed()
            //83ccb0
                .setColor('#bc100d')
                .setTitle('Test Mode')
                .setDescription('Test Mode initiation cancelled.')
                .setTimestamp()
                .setFooter({ text: 'Created with ❤️ for ST fans, by ST fans.' });
            msg.channel.send({embeds: [calCanEmbed]})
        } else {
            return;
        } 
    }
}