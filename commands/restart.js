module.exports = {
    name: 'restart',
    desc: '**(Mod only)**\nRestarts the bot.',
    show: true,
    args: true,
    aliases: ['r'],
    execute(msg, args) {
        const { MessageEmbed } = require('discord.js');
        const fs = require('fs')
        let userWhitelist = require('../resources/userWhitelist.json')
        if(userWhitelist.includes(msg.author.id)) {
            if(args[0] === "-q") {
                console.log('Quick restart initiated.')
                deleteFlags()
                setTimeout(() => {
                    process.exit()
                }, 500)
            } else if(msg.author.id === "785469781163245569" && args[0] === "-t" && fs.existsSync('./flags/test.flag')) {
                console.log('Restart with test mode flag initiated.')
                const restartEmbed = new MessageEmbed()
                    .setColor('#83ccb0')
                    .setTitle('Restart')
                    .setDescription('Successfully initiated restart. Test Mode flag will retain. Please wait...')
                    .setTimestamp()
                    .setFooter({ text: 'Created with ❤️ for ST fans, by ST fans.' });
                msg.channel.send({embeds: [restartEmbed]})
                fs.writeFileSync('./flags/keepTest.flag', ".", (err) => {
                    console.log(err)
                })
                deleteFlagsKeepTest()
                setTimeout(() => {
                    process.exit()
                }, 4500)
            } else {
        const restartEmbed = new MessageEmbed()
            .setColor('#83ccb0')
            .setTitle('Restart')
            .setDescription('Successfully initiated restart. Please wait...')
            .setTimestamp()
            .setFooter({ text: 'Created with ❤️ for ST fans, by ST fans.' });
        msg.channel.send({embeds: [restartEmbed]})
                deleteFlags()
        console.log('Restart initiated.')
        setTimeout(() => {
            process.exit()
        }, 4500)
        }
     } else {
        const messages = require('../resources/st_lines_mods.json')
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
        function deleteFlags() {
            if (fs.existsSync('./flags/cal.flag')) {
                fs.unlinkSync('./flags/cal.flag', (err) => {
                    console.log(err)
                    console.log("Calibration flag deleted from restart")
                })
            }
            if (fs.existsSync('./flags/h.flag')) {
                fs.unlinkSync('./flags/h.flag', (err) => {
                    console.log(err)
                    console.log("Initial calibration flag deleted from restart")
                })
            }
            if (fs.existsSync('./flags/h2.flag')) {
                fs.unlinkSync('./flags/h2.flag', (err) => {
                    console.log(err)
                    console.log("Initial Test Mode flag deleted from restart")
                })
            }
            if (fs.existsSync('./flags/final.flag')) {
                fs.unlinkSync('./flags/final.flag', (err) => {
                    console.log(err)
                    console.log("Final calibration flag deleted from restart")
                })
            }
            if (fs.existsSync('./flags/test.flag')) {
                fs.unlinkSync('./flags/test.flag', (err) => {
                    console.log(err)
                    console.log("Test Mode flag deleted from restart")
                })
            }
        }
        function deleteFlagsKeepTest() {
            if (fs.existsSync('./flags/cal.flag')) {
                fs.unlinkSync('./flags/cal.flag', (err) => {
                    console.log(err)
                    console.log("Calibration flag deleted from restart")
                })
            }
            if (fs.existsSync('./flags/h.flag')) {
                fs.unlinkSync('./flags/h.flag', (err) => {
                    console.log(err)
                    console.log("Initial calibration flag deleted from restart")
                })
            }
            if (fs.existsSync('./flags/h2.flag')) {
                fs.unlinkSync('./flags/h2.flag', (err) => {
                    console.log(err)
                    console.log("Initial Test Mode flag deleted from restart")
                })
            }
            if (fs.existsSync('./flags/final.flag')) {
                fs.unlinkSync('./flags/final.flag', (err) => {
                    console.log(err)
                    console.log("Final calibration flag deleted from restart")
                })
            }
        }
    }
}