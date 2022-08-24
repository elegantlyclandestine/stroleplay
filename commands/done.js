module.exports = {
    name: 'done',
    show: false,
    execute(msg, args) {
        const { MessageEmbed, Client } = require('discord.js');
        const fs = require('fs')
        if(msg.author.id === "785469781163245569" && fs.existsSync('./flags//final.flag')) {
            console.log("Calibration finalised.")
            fs.unlinkSync('./flags/final.flag', (err) => {
                console.log(err)
            })
            const calCompEmbed = new MessageEmbed()
            //83ccb0
                .setColor('#83ccb0')
                .setTitle('Calibration')
                .setDescription('Calibration complete!')
                .setTimestamp()
                .setFooter({ text: 'Created with ❤️ for ST fans, by ST fans.' });
            msg.channel.send({embeds: [calCompEmbed]})
            //client.user.setActivity("for st/list and st/intro", { type: "WATCHING" });
            //client.user.setStatus('online')
        } else {
            return;
        }
    }
}