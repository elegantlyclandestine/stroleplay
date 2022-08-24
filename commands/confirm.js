module.exports = {
    name: 'confirm',
    show: false,
    execute(msg, args) {
        const { MessageEmbed, Client } = require('discord.js');
        const fs = require('fs')
        const cal = require('../resources/cal.json')
        if(msg.author.id === "785469781163245569" && fs.existsSync('./flags/h.flag')) {
            console.log("Calibration confirmed.")
            fs.unlinkSync('./flags/h.flag', (err) => {
                console.log(err)
            })
            fs.writeFileSync('./flags/cal.flag', '.')
            const calCEmbed = new MessageEmbed()
                .setColor('#83ccb0')
                .setTitle('Calibration')
                .setDescription('Calibration successfully initiated.\nPlease wait, this may take a couple minutes depending on how many characters are available.')
                .setTimestamp()
                .setFooter({ text: 'Created with ❤️ for ST fans, by ST fans.' });
            msg.channel.send({embeds: [calCEmbed]})
            //client.user.setActivity("with calibration mode", { type: "PLAYING" });
            //client.user.setStatus('dnd')
            for (i = 1; i < 110; i++) {
                var timeMs = i*2500
                var pfpLink = cal[i]["lk"]
                var charName = cal[i]["cn"]
                repeatCal(pfpLink, charName, timeMs, i)
            }
            function repeatCal(pfp, name, ticks, cycle) {
                setTimeout(() => {
                    console.log("Now in character " + cycle + " (" + name + ")")
                    passCal(pfp, name, msg.channel)
                }, ticks)
            }
            setTimeout(() => {
            const calFinish = new MessageEmbed()
                .setColor('#83ccb0')
                .setTitle('Final Step')
                .setDescription('Check the profile pictures and names for each character.\nType `st/done` when finished.\nIf there are any errors, fix the problem in code.')
                .setTimestamp()
                .setFooter({ text: 'Created with ❤️ for ST fans, by ST fans.' });
            msg.channel.send({embeds: [calFinish]})
            fs.writeFileSync('./flags/final.flag', '.')
            fs.unlinkSync('./flags/cal.flag', (err) => {
                console.log(err)
            })
            }, 280000);
        } else if(msg.author.id === "785469781163245569" && fs.existsSync('./flags/h2.flag')) {
            console.log("Test mode activated.");
            fs.unlinkSync('./flags/h2.flag', (err) => {
                console.log(err)
            })
            fs.writeFileSync('./flags/test.flag', '.')
            const testCEmbed = new MessageEmbed()
                .setColor('#83ccb0')
                .setTitle('Test Mode')
                .setDescription('Test Mode successfully enabled.\nTo disable, restart the bot.')
                .setTimestamp()
                .setFooter({ text: 'Created with ❤️ for ST fans, by ST fans.' });
            msg.channel.send({embeds: [testCEmbed]})
            //client.user.setActivity("with test mode", { type: "PLAYING" });
            //client.user.setStatus('idle')
        }
        async function passCal(pfp, name, channel) {
            let wbs = await channel.fetchWebhooks()
            let wb;
            if(wbs.size == 0){
                wb = await channel.createWebhook(`Stranger Things Roleplay`)
            } else {
                wb = wbs.first();
            }
            await wb.send({
                content: "Calibration test",
                avatarURL: pfp,
                username: name,
                allowedMentions: {
                    parse:[""]
                }
            })
        }
    }
}