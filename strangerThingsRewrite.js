// 412854070272 permission integer
// Require the necessary discord.js classes
console.log("It's time.")
const { SlashCommandBuilder } = require('@discordjs/builders');
const { time, assert } = require('console');
const { Collection, Client, Intents, Message, WebhookClient, MessageEmbed } = require('discord.js');
const { token } = require('./resources/config.json');
const fs = require('fs');
const prefix = "st/";
const characterList = require('./resources/characterList.json')
const characterHandler = require('./characterHandler.js')
const wordFilter = require('./resources/filterWords.json')
const bypassCharacters = require('./resources/bypassCharacters.json')

// Create a new client instance
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_PRESENCES]
});

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
    console.log("Successfully loaded "+command.name+".")
}

client.once('ready', () => {
    // Delete flags if detected
    if (fs.existsSync('./flags/cal.flag')) {
        fs.unlinkSync('./flags/cal.flag', (err) => {
            console.log(err)
            console.log("Calibration flag deleted from command line restart")
        })
    }
    if (fs.existsSync('./flags/h.flag')) {
        fs.unlinkSync('./flags/h.flag', (err) => {
            console.log(err)
            console.log("Initial calibration flag deleted from command line restart")
        })
    }
    if (fs.existsSync('./flags/h2.flag')) {
        fs.unlinkSync('./flags/h2.flag', (err) => {
            console.log(err)
            console.log("Initial Test Mode flag deleted from command line restart")
        })
    }
    if (fs.existsSync('./flags/final.flag')) {
        fs.unlinkSync('./flags/final.flag', (err) => {
            console.log(err)
            console.log("Final calibration flag deleted from command line restart")
        })
    }
    if (fs.existsSync('./flags/test.flag') && fs.existsSync('./flags/keepTest.flag')) {
            fs.unlinkSync('./flags/keepTest.flag', (err) => {
                console.log(err)
                console.log("Test Mode flag retained after restart")
            })
    } else if (fs.existsSync('./flags/test.flag') && !fs.existsSync('./flags/test.flag')){
        fs.unlinkSync('./flags/test.flag', (err) => {
            console.log(err)
            console.log("Test Mode flag deleted from command line restart")
        })
    }
    client.user.setActivity("for st/list & st/intro", { type: "WATCHING" });
    client.user.setStatus('online')
	console.log('Your suffering is almost at an end... with new code.');
});

client.on('messageCreate', msg => {
  normalRoutine()
  function normalRoutine() {
    let blacklist = require('./resources/blacklist.json');
    let userWhitelist = require('./resources/userWhitelist.json')
    if(!msg.content.startsWith(prefix) && !fs.existsSync('./auto_data/'+msg.author.id+'.json')) return;
    if(msg.author.bot) return;
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const commandName = args.shift()
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))
    if(blacklist.includes(msg.channel.id) && !userWhitelist.includes(msg.author.id) && command !== "r") {
        console.log("Landed on blacklisted channel, ignoring.");
        return;
    }else if(blacklist.includes(msg.channel.id) && !userWhitelist.includes(msg.author.id) && command !== "restart") {
        console.log("Landed on blacklisted channel, ignoring.");
        return;
    } else if (!commandName && !(fs.existsSync('./auto_data/'+msg.author.id+'.json'))) return;
    if (fs.existsSync('./flags/cal.flag')) {
        noCommandCal()
        return
    } else if (fs.existsSync('./flags/final.flag') && command !== "done") {
        noCommandCal()
        return
    } else if (fs.existsSync('./flags/test.flag') && msg.author.id !== "785469781163245569") {
        noCommandTest()
        return
    } /*else if (fs.existsSync('./auto_data/'+msg.author.id+'.json') && command !== "a") {
        console.log("Auto file detected, using data from file")
        const loadedAuto = require('./auto_data/'+msg.author.id+'.json')
        try {
            characterHandler.execute(loadedAuto[0]);
        } catch (error) {
            console.error(error);
            //assume character execution failed
        } 
    } else if (fs.existsSync('./auto_data/'+msg.author.id+'.json') && command !== "auto") {
        console.log("Auto file detected, using data from file")
        const loadedAuto = require('./auto_data/'+msg.author.id+'.json')
        try {
            characterHandler.execute(loadedAuto[0]);
        } catch (error) {
            console.error(error);
            //assume character execution failed
        } 
    } else if (fs.existsSync('./auto_data/'+msg.author.id+'.json') && command !== "r") {
        console.log("Auto file detected, using data from file")
        const loadedAuto = require('./auto_data/'+msg.author.id+'.json')
        try {
            characterHandler.execute(loadedAuto[0]);
        } catch (error) {
            console.error(error);
            //assume character execution failed
        } 
    } else if (fs.existsSync('./auto_data/'+msg.author.id+'.json') && command !== "restart") {
        console.log("Auto file detected, using data from file")
        const loadedAuto = require('./auto_data/'+msg.author.id+'.json')
        try {
            characterHandler.execute(loadedAuto[0]);
        } catch (error) {
            console.error(error);
            //assume character execution failed
        } 
    }*/ else if (!client.commands.has(command) && msg === "st/characterhandler") {
        return;
    } else if (characterList.includes(commandName) && !client.commands.has(command)) {
        try {
            characterHandler.execute(msg);
        } catch (error) {
            console.error(error);
            //assume character execution failed
        } 
    } else {
        try {
		    //client.commands.get(command).execute(msg, args);
            command.execute(msg, args)
    	} catch (error) {
	    	console.error(error);
            //assume command failed
	    }
	   
    }
    function noCommandCal() {
        const noCommandCal = new MessageEmbed()
            .setColor('#bc100d')
            .setTitle('Failed')
            .setDescription("All commands are disabled until the calibration session is finished.")
            .setTimestamp()
            .setFooter({ text: 'Created with ❤️ for ST fans, by ST fans.' });
        msg.channel.send({embeds: [noCommandCal]})
    }
    function noCommandTest() {
        const noCommandTest = new MessageEmbed()
        .setColor('#bc100d')
        .setTitle('Failed')
        .setDescription("All commands are disabled for all users except the developer until Test Mode is turned off.")
        .setTimestamp()
        .setFooter({ text: 'Created with ❤️ for ST fans, by ST fans.' });
        msg.channel.send({embeds: [noCommandTest]})
    }
  }
})

// Login to Discord with your client's token
client.login(token);