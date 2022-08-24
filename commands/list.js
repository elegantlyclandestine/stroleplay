module.exports = {
    name: 'list',
    desc: 'Lists all the available characters for use with *Stranger Roleplay.*',
    show: true,
    args: true,
    aliases: ['l'],
    execute(msg, args) {
        const { MessageEmbed } = require('discord.js');
        if(args[0] === "1") {
            const list1Embed = new MessageEmbed()
                .setColor('#eeeeee')
                .setTitle('Available characters for Stranger Roleplay')
                .setDescription('__**Page 1**__\n**Remember the command format:** `st/character` **(character in lowercase).**\n*Some characters allow you to use their nicknames/surnames where available.*\n__*Any missing characters? Contact brivy#0915.*__')
                .addFields(
                    //{ name: '\u200B', value: '\u200B' },
                    { name: 'Jim Hopper', value: '`jim`, `hopper`', inline: true },
                    { name: 'Eleven', value: '`eleven`, `el`, `011`, `jane`', inline: true },
                    { name: 'Michael Wheeler', value: '`michael`, `mike`, `mikey`', inline: true },
                    { name: 'Nancy Wheeler', value: '`nancy`, `nance`', inline: true },
                    { name: 'William Byers', value: '`will`, `william`', inline: true },
                    { name: 'Jonathan Byers', value: '`jonathan`', inline: true },
                    { name: 'Joyce Byers', value: '`joyce`', inline: true },
                    { name: 'Dustin Henderson', value: '`dustin`, `dusty`, `dustybun`', inline: true },
                    { name: 'Lucas Sinclair', value: '`lucas`', inline: true },
                    { name: 'Erica Sinclair', value: '`erica`', inline: true },
                    { name: 'Steve Harrington', value: '`steve`', inline: true },
                    { name: 'Max Mayfield', value: '`max`, `madmax`', inline: true },
                    { name: 'Billy Hargrove', value: '`billy`', inline: true },
                    { name: 'Robin Buckley', value: '`robin`', inline: true },
                    { name: 'Murray Bauman', value: '`murray`', inline: true },
                    { name: 'Alexei', value: '`alexei`, `smirnoff`', inline: true },
                    { name: 'Vecna', value: '`vecna` **only!**', inline: true },
                    { name: 'Mews', value: '`mews`', inline: true },
                )
                .setTimestamp()
                .setFooter({ text: 'Created with ❤️ for ST fans, by ST fans.' });
            msg.channel.send({embeds: [list1Embed]})
        } else if(args[0] === "2") {
            const list2Embed = new MessageEmbed()
                .setColor('#eeeeee')
                .setTitle('Available characters for Stranger Roleplay')
                .setDescription('__**Page 2**__\n**Remember the command format:** `st/character` **(character in lowercase).**\n*Some characters allow you to use their nicknames/surnames where available.*\n__*Any missing characters? Contact brivy#0915.*__')
                .addFields(
                    //{ name: '\u200B', value: '\u200B' },
                    { name: 'Henry Creel', value: '`001`, `henry`, `one` **only!**', inline: true },
                    { name: 'Victor Creel', value: '`victor`', inline: true },
                    { name: 'Dr. Martin Brenner', value: '`martin`, `brenner`, `papa`', inline: true },
                    { name: 'Dr. Sam Owens', value: '`owens`, `sam`', inline: true },
                    { name: 'Grigori', value: '`grigori`', inline: true },
                    { name: 'Benny Hammond', value: '`benny`, `ben`', inline: true },
                    { name: 'Dmitri "Enzo" Antonov', value: '`enzo`, `dmitri`', inline: true },
                    { name: 'Yuri Ismaylov', value: '`yuri`', inline: true },
                    { name: 'Kali Prasad', value: '`008`, `kali`, `eight`', inline: true },
                    { name: 'Bob Newby', value: '`bob`', inline: true },
                    { name: 'Dottie', value: '`dottie`', inline: true },
                    { name: 'Mick', value: '`mick`', inline: true },
                    { name: 'Axel', value: '`axel`', inline: true },
                    { name: 'Funshine', value: '`funshine`, `funs`', inline: true },
                    { name: 'D\'Artagnan', value: '`dartagnan`, `dart`', inline: true },
                    { name: 'Demogorgon', value: '`demogorgon`', inline: true },
                    { name: 'The Mind Flayer', value: '`themindflayer`, `mindflayer`, `flayer`', inline: true },
                    { name: 'Larry Kline', value: '`larry`, `kline`', inline: true },
                )
                .setTimestamp()
                .setFooter({ text: 'Created with ❤️ for ST fans, by ST fans.' });
            msg.channel.send({embeds: [list2Embed]})
        } else if(args[0] === "3") {
            const list3Embed = new MessageEmbed()
                .setColor('#eeeeee')
                .setTitle('Available characters for Stranger Roleplay')
                .setDescription('__**Page 3**__\n**Remember the command format:** `st/character` **(character in lowercase).**\n*Some characters allow you to use their nicknames/surnames where available.*\n__*Any missing characters? Contact brivy#0915.*__')
                .addFields(
                    //{ name: '\u200B', value: '\u200B' },
                    { name: 'Karen Wheeler', value: '`karen`', inline: true },
                    { name: 'Ted Wheeler', value: '`ted`', inline: true },
                    { name: 'Holly Wheeler', value: '`holly`, `hol`', inline: true },
                    { name: 'Chrissy Cunningham', value: '`chrissy`', inline: true },
                    { name: 'Eddie Munson', value: '`eddie`, `ed`, `edward`', inline: true },
                    { name: 'Jason Carver', value: '`jason`', inline: true },
                    { name: 'Patrick McKinney', value: '`patrick`', inline: true },
                    { name: 'Andy', value: '`andy`', inline: true },
                    { name: 'Chance', value: '`chance`', inline: true },
                    { name: 'Diane', value: '`diane`', inline: true },
                    { name: 'Officer Powell', value: '`calvin`, `powell`', inline: true },
                    { name: 'Officer Callahan', value: '`callahan`, `phil`', inline: true },
                    { name: 'Suzie Bingham', value: '`suzie`, `suziepoo`', inline: true },
                    { name: 'Eden Bingham', value: '`eden`', inline: true },
                    { name: 'Argyle', value: '`argyle`, `surferboy`', inline: true },
                    { name: 'Barbara Holland', value: '`barbara`, `barb`', inline: true },
                    { name: 'Terry Ives', value: '`terry`, `mama`', inline: true },
                    { name: 'Becky Ives', value: '`becky`', inline: true },
                )
                .setTimestamp()
                .setFooter({ text: 'Created with ❤️ for ST fans, by ST fans.' });
            msg.channel.send({embeds: [list3Embed]})
        } else if(args[0] === "4") {
            const list4Embed = new MessageEmbed()
                .setColor('#eeeeee')
                .setTitle('Available characters for Stranger Roleplay')
                .setDescription('__**Page 4**__\n**Remember the command format:** `st/character` **(character in lowercase).**\n*Some characters allow you to use their nicknames/surnames where available.*\n__*Any missing characters? Contact brivy#0915.*__')
                .addFields(
                    //{ name: '\u200B', value: '\u200B' },
                    { name: 'Scott Clarke', value: '`scott`, `clarke`', inline: true },
                    { name: 'Heather Holloway', value: '`heather`', inline: true },
                    { name: 'Claudia Henderson', value: '`claudia`', inline: true },
                    { name: 'Angela', value: '`angela`', inline: true },
                    { name: 'Jake', value: '`jake`', inline: true },
                    { name: 'Wayne Munson', value: '`wayne`', inline: true },
                    { name: 'Tommy Hagan', value: '`tommy`, `tommyh`', inline: true },
                    { name: 'Carol Perkins', value: '`carol`', inline: true },
                    { name: 'Nicole', value: '`nicole`', inline: true },
                    { name: 'Tina', value: '`tina`', inline: true },
                    { name: 'Vicki Carmichael', value: '`vicki`', inline: true },
                    { name: 'Stacey Albright', value: '`stacey`', inline: true },
                    { name: 'Lonnie Byers', value: '`lonnie`, `lon`', inline: true },
                    { name: 'Marissa', value: '`marissa`', inline: true },
                    { name: 'Virginia Creel', value: '`virginia`', inline: true },
                    { name: 'Alice Creel', value: '`alice`', inline: true },
                    { name: 'Cynthia', value: '`cynthia`', inline: true },
                    { name: 'Doris Driscoll', value: '`doris`, `msdriscoll`', inline: true },
                )
                .setTimestamp()
                .setFooter({ text: 'Created with ❤️ for ST fans, by ST fans.' });
            msg.channel.send({embeds: [list4Embed]})
        } else if(args[0] === "5") {
            const list5Embed = new MessageEmbed()
                .setColor('#eeeeee')
                .setTitle('Available characters for Stranger Roleplay')
                .setDescription('__**Page 5**__\n**Remember the command format:** `st/character` **(character in lowercase).**\n*Some characters allow you to use their nicknames/surnames where available.*\n__*Any missing characters? Contact brivy#0915.*__')
                .addFields(
                    //{ name: '\u200B', value: '\u200B' },
                    { name: 'Dr. Ellis', value: '`ellis`', inline: true },
                    { name: 'Earl', value: '`earl`', inline: true },
                    { name: 'Officer Daniels', value: '`glenn`, `daniels`', inline: true },
                    { name: 'Florence', value: '`flo`, `florence`', inline: true },
                    { name: 'James Dante', value: '`james`', inline: true },
                    { name: 'Anthony "Troy" Walsh', value: '`troy`, `anthony`', inline: true },
                    { name: 'Cathy Owens', value: '`cathy`', inline: true },
                    { name: 'Principal Coleman', value: '`russell`, `coleman`', inline: true },
                    { name: 'Eugene McCorkle', value: '`eugene`', inline: true },
                    { name: 'Chester (Byers family dog)', value: '`chester`', inline: true },
                    { name: 'Donald Melvald', value: '`donald`, `melvald`', inline: true },
                    { name: 'Yurtle', value: '`yurtle`', inline: true },
                    { name: 'Lt. Colonel Jack Sullivan', value: '`jack`', inline: true },
                    { name: 'Agent Ellen Stinson', value: '`stinson`, `ellen`', inline: true },
                    { name: 'Ray Carroll', value: '`ray`', inline: true },
                    { name: 'Agent Harmon', value: '`harmon`', inline: true },
                    { name: 'Agent Wallace', value: '`wallace`', inline: true },
                    { name: 'Tammy Thompson', value: '`tammy`', inline: true },
                )
                .setTimestamp()
                .setFooter({ text: 'Created with ❤️ for ST fans, by ST fans.' });
            msg.channel.send({embeds: [list5Embed]})
        } else if(args[0] === "6") {
            const list6Embed = new MessageEmbed()
                .setColor('#eeeeee')
                .setTitle('Available characters for Stranger Roleplay')
                .setDescription('__**Page 6**__\n**Remember the command format:** `st/character` **(character in lowercase).**\n*Some characters allow you to use their nicknames/surnames where available.*\n__*Any missing characters? Contact brivy#0915.*__')
                .addFields(
                    //{ name: '\u200B', value: '\u200B' },
                    { name: 'Two', value: '`002`, `two`', inline: true },
                    { name: 'Six', value: '`006`, `six`', inline: true },
                    { name: 'Fifteen', value: '`015`, `fifteen`', inline: true },
                    { name: 'Eighteen', value: '`018`, `eighteen`', inline: true },
                    { name: 'Five', value: '`005`, `five`', inline: true },
                    { name: 'Fourteen', value: '`014`, `fourteen`', inline: true },
                    { name: 'Four', value: '`004`, `four`', inline: true },
                    { name: 'Nine', value: '`009`, `nine`', inline: true },
                    { name: 'Seven', value: '`007`, `seven`', inline: true },
                    { name: 'Seventeen', value: '`017`, `seventeen`', inline: true },
                    { name: 'Sixteen', value: '`016`, `sixteen`', inline: true },
                    { name: 'Thirteen', value: '`013`, `thirteen`', inline: true },
                    { name: 'Three', value: '`003`, `three`', inline: true },
                    { name: 'Twelve', value: '`012`, `twelve`', inline: true },
                    { name: 'Officer Adams', value: '`adams`', inline: true },
                    { name: 'Darrel', value: '`darrel`', inline: true },
                    { name: 'Jennifer Hayes', value: '`jennifer`, `jenniferhayes`', inline: true },
                    { name: 'Sandra', value: '`sandra`', inline: true },
                )
                .setTimestamp()
                .setFooter({ text: 'Created with ❤️ for ST fans, by ST fans.' });
            msg.channel.send({embeds: [list6Embed]})
        } else {
            msg.channel.send("Invalid page number, or no page number was specified.")
        }
        return;
    } 
}