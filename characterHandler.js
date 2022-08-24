module.exports = {
    name: 'characterHandler',
    args: true,
    show: false,
    execute(msg) {
        const { WebhookClient } = require('discord.js');
        const prefix = "st/"
        const args = msg.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift()
        const total = prefix.length + command.length;
        const final = msg.content.slice(total+1);
        //console.log("Character handler accessed")
        if (command === 'will' || command === "william") {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/4/45/Will_in_California.png/revision/latest?cb=20220626191619", "Will Byers", msg.channel, msg)
        } else if (command === 'joyce') {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/4/40/ST4_Joyce.png/revision/latest/scale-to-width-down/350?cb=20211107091328", "Joyce Byers", msg.channel, msg)
        } else if (command === 'jonathan') {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/5/50/Jonathan_in_Season_Four.png/revision/latest?cb=20220602172826", "Jonathan Byers", msg.channel, msg)
        } else if (command === 'eleven' || command === 'jane' || command === "011" || command === "el") {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/d/d5/Jane_Ives_Family_Tree_icon_001.png/revision/latest/scale-to-width-down/100?cb=20171030114545", "Eleven", msg.channel, msg)
        } else if (command === 'mike' || command === "michael" || command === "mikey") {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/2/22/Screen_Shot_2017-07-19_at_6.33.40_AM.png/revision/latest/scale-to-width-down/100?cb=20170719033427", "Mike Wheeler", msg.channel, msg)
        } else if (command === 'nancy' || command === "nance") {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/4/46/Nancy_Wheeler_Family_Tree_icon_002.png/revision/latest/scale-to-width-down/100?cb=20171030115635", "Nancy Wheeler", msg.channel, msg)
        } else if (command === "dustin" || command === "dusty" || command === "dustybun") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/990953215308730428/Screenshot_2022-06-27_at_20.14.00.png", "Dustin Henderson", msg.channel, msg)
        } else if (command === "lucas") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/990953721217306654/Screenshot_2022-06-27_at_20.16.11.png", "Lucas Sinclair", msg.channel, msg)
        } else if (command === "erica") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/990953895104741376/Screenshot_2022-06-27_at_20.16.51.png", "Erica Sinclair", msg.channel, msg)
        } else if (command === "max" || command === "madmax") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/990959617406287962/Screenshot_2022-06-27_at_20.38.44.png", "Max Mayfield", msg.channel, msg)
        } else if (command === "billy") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/990959617603428432/Screenshot_2022-06-27_at_20.38.19.png", "Billy Hargrove", msg.channel, msg)
        } else if (command === "steve") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/990959617821519902/Screenshot_2022-06-27_at_20.38.03.png", "Steve Harrington", msg.channel, msg)
        } else if (command === "robin") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/990959618106748948/Screenshot_2022-06-27_at_20.37.53.png", "Robin Buckley", msg.channel, msg)
        } else if (command === "murray") {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/d/dd/Murray2.jpg/revision/latest?cb=20201103150557", "Murray Bauman", msg.channel, msg)
        } else if (command === "bob") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/990960918848503819/Screenshot_2022-06-27_at_20.43.01.png", "Bob Newby", msg.channel, msg)
        } else if (command === "brenner" || command === "martin" || command === "papa") {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/b/bf/Ep1-Brenner_at_Benny%27s_Burgers.png/revision/latest/scale-to-width-down/185?cb=20180611140354", "Dr. Martin Brenner", msg.channel, msg)
        } else if (command === "eight" || command === "kali" || command === "008") {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/9/9e/Kali.png/revision/latest?cb=20171028095030", "Kali Prasad", msg.channel, msg)
        } else if (command === "vecna") {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/8/8b/Vecna_S4.jpg/revision/latest/scale-to-width-down/700?cb=20220412235559", "Vecna", msg.channel, msg)
        } else if (command === "henry" || command === "001" || command === "one") {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/0/03/Henry_Creel_portrait.jpeg/revision/latest?cb=20220613123819", "Henry Creel", msg.channel, msg)
        } else if (command === "victor") {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/e/e9/Victor_Creel_1959.png/revision/latest?cb=20210926181550", "Victor Creel", msg.channel, msg)
        } else if (command === "dottie") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991128828565016727/Screenshot_2022-06-28_at_07.51.19.png", "Dottie", msg.channel, msg)
        } else if (command === "mick") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991128828162359337/Screenshot_2022-06-28_at_07.51.30.png", "Mick", msg.channel, msg)
        } else if (command === "funshine" || command === "funs") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991128827877142548/Screenshot_2022-06-28_at_07.51.41.png", "Funshine", msg.channel, msg)
        } else if (command === "axel") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991128828816666654/Screenshot_2022-06-28_at_07.51.10.png", "Axel", msg.channel, msg)
        } else if (command === "jim" || command === "hopper") {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/c/c6/ST3_Jim_Hopper_portrait.jpg/revision/latest/scale-to-width-down/699?cb=20190703002805", "Jim Hopper", msg.channel, msg)
        } else if (command === "enzo" || command === "dmitri") {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/a/a2/Dmitri.png/revision/latest?cb=20220518172113", 'Dmitri "Enzo" Antonov', msg.channel, msg)
        } else if (command === "benny" || command === "ben") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991138758219026494/Screenshot_2022-06-28_at_08.31.14.png", "Benny Hammond", msg.channel, msg)
        } else if (command === "owens" || command === "sam") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991138758420332554/Screenshot_2022-06-28_at_08.30.34.png", "Dr. Sam Owens", msg.channel, msg)
        } else if (command === "grigori") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991139023601020938/Screenshot_2022-06-28_at_08.32.21.png", "Grigori", msg.channel, msg)
        } else if (command === "yuri") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991139516389802024/Screenshot_2022-06-28_at_08.33.22.png", "Yuri Ismaylov", msg.channel, msg)
        } else if (command === "powell" || command === "calvin") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991140469792849940/Screenshot_2022-06-28_at_08.37.56.png", "Officer Powell", msg.channel, msg)
        } else if (command === "callahan" || command === "phil") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991140469541195846/Screenshot_2022-06-28_at_08.38.10.png", "Officer Callahan", msg.channel, msg)
        } else if (command === "alexei" || command === "smirnoff") {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/6/66/Stranger-Things-season-3-screenshots-Chapter-5-The-Flayed-090.jpg/revision/latest/scale-to-width-down/185?cb=20191123102337", "Alexei", msg.channel, msg)
        } else if (command === "flayer" || command === "mindflayer" || command === "themindflayer") {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/0/07/The_Mind_Flayer_HD.jpg/revision/latest/scale-to-width-down/700?cb=20180412071103", "The Mind Flayer", msg.channel, msg)
        } else if (command === "dart" || command === "dartagnan") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991146621352022016/Screenshot_2022-06-28_at_09.01.38.png", "D'Artagnan", msg.channel, msg)
        } else if (command === "demogorgon") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991146621658222602/Screenshot_2022-06-28_at_09.01.07.png", "Demogorgon", msg.channel, msg)
        } else if (command === "chrissy") {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/d/d1/Chrissy_ST4.jpeg/revision/latest/scale-to-width-down/700?cb=20220608210406", "Chrissy Cunningham", msg.channel, msg)
        } else if (command === "eddie" || command == "ed" || command === "edward") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991147468806946887/Screenshot_2022-06-28_at_09.05.20.png", "Eddie Munson", msg.channel, msg)
        } else if (command === "jason") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991147866036912208/Screenshot_2022-06-28_at_09.07.15.png", "Jason Carver", msg.channel, msg)
        } else if (command === "patrick") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991148182241296414/Screenshot_2022-06-28_at_09.08.46.png", "Patrick McKinney", msg.channel, msg)
        } else if (command === "andy") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991148182698459256/Screenshot_2022-06-28_at_09.08.28.png", "Andy", msg.channel, msg)
        } else if (command === "chance") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991148182467784796/Screenshot_2022-06-28_at_09.08.38.png", "Chance", msg.channel, msg)
        } else if (command === "suzie" || command === "suziepoo") {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/f/f4/Suzie_ST4.jpg/revision/latest?cb=20220526133609", "Suzie Bingham", msg.channel, msg)
        } else if (command === "eden") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991149432072581271/Screenshot_2022-06-28_at_09.12.43.png", "Eden Bingham", msg.channel, msg)
        } else if (command === "argyle" || command === "surferboy") {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/4/47/Argyle_S4.png/revision/latest/scale-to-width-down/700?cb=20220622103436", "Argyle", msg.channel, msg)
        } else if (command === "keith") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991165262109888557/Screenshot_2022-06-28_at_10.09.43.png", "Keith", msg.channel, msg)
        } else if (command === "larry" | command === "kline") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991165262332170270/Screenshot_2022-06-28_at_10.09.36.png", "Larry Kline", msg.channel, msg)
        } else if (command === "mews") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991165261845643304/Screenshot_2022-06-28_at_10.09.58.png", "Mews", msg.channel, msg)
        } else if (command === "scott" | command === "clarke") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991165261614944306/Screenshot_2022-06-28_at_10.10.10.png", "Scott Clarke", msg.channel, msg)
        } else if (command === "diane") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991165261279408200/Screenshot_2022-06-28_at_10.10.26.png", "Diane", msg.channel, msg)
        } else if (command === "barb" | command === "barbara") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991165260864163941/Screenshot_2022-06-28_at_10.10.39.png", "Barbara Holland", msg.channel, msg)
        } else if (command === "karen") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991165260616704020/Screenshot_2022-06-28_at_10.11.06.png", "Karen Wheeler", msg.channel, msg)
        } else if (command === "ted") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991165260356661338/Screenshot_2022-06-28_at_10.11.19.png", "Ted Wheeler", msg.channel, msg)
        } else if (command === "holly" || command === "hol") {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/c/c5/Holly_Season_3.jpg/revision/latest?cb=20190708224714", "Holly Wheeler", msg.channel, msg)
        } else if (command === "heather") {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/1/19/Heather.jpeg/revision/latest/scale-to-width-down/700?cb=20190706044131", "Heather Holloway", msg.channel, msg)
        } else if (command === "claudia") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991167760627404831/Screenshot_2022-06-28_at_10.26.29.png", "Claudia Henderson", msg.channel, msg)
        } else if (command === "angela") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991170032207937546/Screenshot_2022-06-28_at_10.34.36.png", "Angela", msg.channel, msg)
        } else if (command === "jake") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991170031868203028/Screenshot_2022-06-28_at_10.34.48.png", "Jake", msg.channel, msg)
        } else if (command === "wayne") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991170032476360744/Screenshot_2022-06-28_at_10.34.24.png", "Wayne Munson", msg.channel, msg)
        } else if (command === "terry" || command === "mama") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991170032723832913/Screenshot_2022-06-28_at_10.34.05.png", "Terry Ives", msg.channel, msg)
        } else if (command === "becky") {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/d/dd/Becky_Ives.png/revision/latest/scale-to-width-down/350?cb=20170425225502", "Becky Ives", msg.channel, msg)
        } else if (command === "tommyh" || command === "tommy") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991171811360374814/Screenshot_2022-06-28_at_10.40.44.png", "Tommy Hagan", msg.channel, msg)
        } else if (command === "carol") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991171811104542780/Screenshot_2022-06-28_at_10.40.53.png", "Carol Perkins", msg.channel, msg)
        } else if (command === "nicole") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991173014534225960/Screenshot_2022-06-28_at_10.46.06.png", "Nicole", msg.channel, msg)
        } else if (command === "tina") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991173014777499648/Screenshot_2022-06-28_at_10.46.00.png", "Tina", msg.channel, msg)
        } else if (command === "vicki") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991173015050141706/Screenshot_2022-06-28_at_10.45.54.png", "Vicki Carmichael", msg.channel, msg)
        } else if (command === "stacey") {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/b/b5/Stacey_Albright%2C_circa_1985.png/revision/latest/scale-to-width-down/350?cb=20190914155306", "Stacey Albright", msg.channel, msg)
        } else if (command === "lonnie" || command == "lon") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991193502228688926/Screenshot_2022-06-28_at_12.08.39.png", "Lonnie Byers", msg.channel, msg)
        } else if (command === "marissa") {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/d/d5/Marissa.png/revision/latest/scale-to-width-down/350?cb=20170227162419", "Marissa", msg.channel, msg)
        } else if (command === "virginia") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991195206881902712/Screenshot_2022-06-28_at_12.14.26.png", "Virginia Creel", msg.channel, msg)
        } else if (command === "alice") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991195208253452419/Screenshot_2022-06-28_at_12.15.07.png", "Alice Creel", msg.channel, msg)
        } else if (command === "cynthia") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991195207955652688/Screenshot_2022-06-28_at_12.15.43.png", "Cynthia", msg.channel, msg)
        } else if (command === "doris" || command === "msdriscoll") {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/a/ae/Doris_Driscoll.png/revision/latest/scale-to-width-down/350?cb=20190705065355", "Doris Driscoll", msg.channel, msg)
        } else if (command === "ellis") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991231041052348436/Screenshot_2022-06-28_at_14.37.41.png", "Dr. Ellis", msg.channel, msg)
        } else if (command === "earl") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991231040695844874/Screenshot_2022-06-28_at_14.37.51.png", "Earl", msg.channel, msg)
        } else if (command === "glenn" || command === "daniels") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991231398105063514/Screenshot_2022-06-28_at_14.39.34.png", "Officer Daniels", msg.channel, msg)
        } else if (command === "florence" || command === "flo") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991231398293815306/Screenshot_2022-06-28_at_14.39.23.png", "Florence", msg.channel, msg)
        } else if (command === "james") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991231793007181844/Screenshot_2022-06-28_at_14.41.05.png", "James Dante", msg.channel, msg)
        } else if (command === "troy" || command === "anthony") {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/0/08/Troy-0.png/revision/latest?cb=20171006085218", "Troy Walsh", msg.channel, msg)
        } else if (command === "cathy") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991232255341113404/Screenshot_2022-06-28_at_14.42.47.png", "Cathy Owens", msg.channel, msg)
        } else if (command === "russell" || command === "russ") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991232255127191552/Screenshot_2022-06-28_at_14.42.56.png", "Russell Coleman", msg.channel, msg)
        } else if (command === "eugene") {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/2/2d/Eugene.png/revision/latest/scale-to-width-down/350?cb=20171117053258", "Eugene McCorkle", msg.channel, msg)
        } else if (command === "chester") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991233872723464282/Screenshot_2022-06-28_at_14.46.56.png", "Chester", msg.channel, msg)
        } else if (command === "donald" || command === "melvald") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991233873021247578/Screenshot_2022-06-28_at_14.49.12.png", "Donald Melvald", msg.channel, msg)
        } else if (command === "yurtle") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991236865061572678/Screenshot_2022-06-28_at_14.58.52.png", "Yurtle", msg.channel, msg)
        } else if (command === "jack") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991236864818298890/Screenshot_2022-06-28_at_14.59.01.png", "Lt. Colonel Jack Sullivan", msg.channel, msg)
        } else if (command === "stinson" || command === "ellen") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991236864566632508/Screenshot_2022-06-28_at_14.59.09.png", "Agent Ellen Stinson", msg.channel, msg)
        } else if (command === "ray") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991236864113651752/Screenshot_2022-06-28_at_15.00.01.png", "Ray Carroll", msg.channel, msg)
        } else if (command === "harmon") {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/f/ff/Agentharmon.jpg/revision/latest/scale-to-width-down/350?cb=20220606222334", "Agent Harmon", msg.channel, msg)
        } else if (command === "wallace") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991238733460406282/Screenshot_2022-06-28_at_15.08.36.png", "Agent Wallace", msg.channel, msg)
        } else if (command === "tammy") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991239092673187912/Screenshot_2022-06-28_at_15.10.09.png", "Tammy Thompson", msg.channel, msg)
        } else if (command === "two" || command === "002") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991242744406212678/Screenshot_2022-06-28_at_15.23.26.png", "Two", msg.channel, msg)
        } else if (command === "six" || command === "006") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991242906037915668/Screenshot_2022-06-28_at_15.25.16.png", "Six", msg.channel, msg)
        } else if (command === "fifteen" || command === "015") {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/4/46/ST4_Fifteen_E7.png/revision/latest/scale-to-width-down/180?cb=20220530083511", "Fifteen", msg.channel, msg)
        } else if (command === "eighteen" || command === "018") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991243229280354304/Screenshot_2022-06-28_at_15.26.15.png", "Eighteen", msg.channel, msg)
        } else if (command === "five" || command === "005") {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/8/86/ST4_Five_E6.png/revision/latest/scale-to-width-down/180?cb=20220530072256", "Five", msg.channel, msg)
        } else if (command === "fourteen" || command === "014") {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/4/4e/ST4_Fourteen_E6.png/revision/latest/scale-to-width-down/180?cb=20220530075526", "Fourteen", msg.channel, msg)
        } else if (command === "four" || command === "004") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991244577509998692/Screenshot_2022-06-28_at_15.30.42.png", "Four", msg.channel, msg)
        } else if (command === "nine" || command === "009") {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/9/90/ST4_Nine_E1.png/revision/latest/scale-to-width-down/180?cb=20220530081956", "Nine", msg.channel, msg)
        } else if (command === "seven" || command === "007") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991246840030822540/Screenshot_2022-06-28_at_15.32.59.png", "Seven", msg.channel, msg)
        } else if (command === "seventeen" || command === "017") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991246839779168366/Screenshot_2022-06-28_at_15.38.06.png", "Seventeen", msg.channel, msg)
        } else if (command === "sixteen" || command === "016") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991246839569469470/Screenshot_2022-06-28_at_15.38.14.png", "Sixteen", msg.channel, msg)
        } else if (command === "thirteen" || command === "013") {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/3/38/ST4_Thirteen_E6.png/revision/latest/scale-to-width-down/180?cb=20220530083953", "Thirteen", msg.channel, msg)
        } else if (command === "three" || command === "003") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991247637489668126/Screenshot_2022-06-28_at_15.44.00.png", "Three", msg.channel, msg)
        } else if (command === "twelve" || command === "012") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991247943342510090/Screenshot_2022-06-28_at_15.45.20.png", "Twelve", msg.channel, msg)
        } else if (command === "adams") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991249923007852614/Screenshot_2022-06-28_at_15.53.01.png", "Officer Adams", msg.channel, msg)
        } else if (command === "darrel") {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/4/40/Darrel.png/revision/latest/scale-to-width-down/180?cb=20171119012611", "Darrel", msg.channel, msg)
        } else if (command === "jennifer" || command === "jenniferhayes") {
            passMsg(final, "https://cdn.discordapp.com/attachments/990849042739257374/991250662555922502/Screenshot_2022-06-28_at_15.55.37.png", "Jennifer Hayes", msg.channel, msg)
        } else if (command === "sandra") {
            passMsg(final, "https://static.wikia.nocookie.net/strangerthings8338/images/b/be/Sandra-stranger_things.jpg/revision/latest/scale-to-width-down/180?cb=20220603031140", "Sandra", msg.channel, msg)
        }
        async function passMsg(send, pfp, name, channel, sent) {
            if(final.length === 0) {
                msg.channel.send("A message should be specified.")
                return;
            }
            let wbs = await channel.fetchWebhooks()
            let wb;
            if(wbs.size == 0){
                wb = await channel.createWebhook(`Stranger Things Roleplay`)
            } else {
                wb = wbs.first();
            }
            await wb.send({
                content: send,
                avatarURL: pfp,
                username: name,
                allowedMentions: {
                    parse:[""]
                }
            })
            console.log("Message '" + send + "' was sent by " + msg.author.tag + " in " + msg.channel + " as " + name)
            sent.delete()
        }
    }
}