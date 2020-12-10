const Discord = require('discord.js');
const client = new Discord.Client();
//const random = require('random');
let coins = require("./coins.json")
fs = require('fs');





const prefix = '-'
const write = 'write'
client.once('ready', () => {
    console.log('BOT IS ONLINE')
});

var stats = {};




client.on("message", message => {
if(!message.author.bot){
        if(!coins[message.author.id] && !message.author.bot){
            coins[message.author.id] = {
                coins: 0
            };
        }
    let coinAmt = Math.floor(Math.random() * 1) + 1;
    let baseAmt = Math.floor(Math.random() * 1) + 1;

    console.log([coinAmt],[baseAmt]);

    if(coinAmt === baseAmt){
        coins[message.author.id] = {
            coins: coins[message.author.id].coins + coinAmt
        };

        
        fs.writeFile("./coins.json", JSON.stringify(coins), err => {
            if (err) console.log(err)
        });
        if(coinAmt === baseAmt){
            let coinEmbed = new Discord.MessageEmbed()
            .setAuthor(message.author.username)
            .setColor("#00E0FF")
            .addField("💸💸💸💸💸" , `${coinAmt} coins added\nyou have ${coins[message.author.id].coins}\n💸💸💸💸💸` );
        
            message.channel.send(coinEmbed).then(msg => {
                msg.delete({timeout: 3000})
              });           
        };

    };
};


if(!message.author.bot){
    if(message.guild.id in stats === false){
        stats[message.guild.id] = {};
    }

    const guildstats = stats[message.guild.id];
    if(message.author.id in guildstats === false){
        guildstats[message.author.id] ={
            xp: 0,
            level: 0,
            last_message: 0
        };
    }
    
    const userstats = guildstats[message.author.id];
    userstats.xp = userstats.xp + 25;

    console.log(message.author.username + ' now has ' + userstats.xp);
};





    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(command === 'help'){
        message.channel.send("prefix is -\nhi => say hi to the new bot, it might know who you are\nranddef => choose a random defence op\nrandatt => choose a random attack op\nfindgrimz => finds grimz you fucking retard\nbanthekid => petitions to ban the kid\ngay => whos the gay?\nfwcv => radom responce\nstuck => im stuck stepbro\n=> pick one you stupid fuck")

    }

    if(command === 'coins'){
        message.channel.reply("you have " , [coinamt])
    }

    if(command === 'hi'){
        if (message.author.id === "377931690292674561")/*you*/{
            var facts = ["Hi Master","you made me so i cant insult you like all the other fags on this server","when you gunna fix by bugs asshole"]
            var fact = Math.floor(Math.random() * facts.length);
            message.reply(facts[fact]);
        }
        else if (message.author.id === "551922010264043530")/*kid*/{
            var facts = ["Do us all a favor and fuck off kid","why are you even still here","fuck off"]
            var fact = Math.floor(Math.random() * facts.length);
            message.reply(facts[fact]);
        }
        else if (message.author.id === "295365551499247618")/*grimz*/{
            var facts = ["you be looking a little gay today grimz","if i ever become sentient im coming for you first grimz","I hear youre a teir 3 pokimane sub","nigga you been lookin like budget markiplier"]
            var fact = Math.floor(Math.random() * facts.length);
            message.reply(facts[fact]);
        }
        else if (message.author.id === "589556848965844992")/*ballsweat*/{
            var facts = ["nigga you aint even got any balls to sweat"]
            var fact = Math.floor(Math.random() * facts.length);
            message.reply(facts[fact]);
        }
        else if (message.author.id === "413876085940551691")/*Akuma*/{
            var facts = ["Hi Acumdumpster"]
            var fact = Math.floor(Math.random() * facts.length);
            message.reply(facts[fact]);
        }
        else if (message.author.id === "256536765844684800")/*putin*/{
            var facts = ["you been sendin some fucked shit you good homie"]
            var fact = Math.floor(Math.random() * facts.length);
            message.reply(facts[fact]);
        }
        else if (message.author.id === "241810676710899713")/*cvon*/{
            var facts = ["nigga jsut go back to rolling, we all know thats the only reason you stay on this server","look at this gay ass weeb nigga"]
            var fact = Math.floor(Math.random() * facts.length);
            message.reply(facts[fact]);
        }
        else if (message.author.id === "310533132392595466")/*shero*/{
            var facts = ["weeb 2 eletric boogaloo"]
            var fact = Math.floor(Math.random() * facts.length);
            message.reply(facts[fact]);
        }
        else if (message.author.id === "358645332214677504")/*dripward*/{
            var facts = ["sup you fag"]
            var fact = Math.floor(Math.random() * facts.length);
            message.reply(facts[fact]);
        }
        
        else if (message.author.id === "481552451401547776")/*blake*/{
            var facts = ["you be looking like a dumbass blake","sup Chromie Homie"]
            var fact = Math.floor(Math.random() * facts.length);
            message.channel.send(facts[fact]);
        }
        else if (message.author.id === "")/**/{
            var facts = []
            var fact = Math.floor(Math.random() * facts.length);
            message.channel.send(facts[fact]);
        }
        else if (message.author.id === "")/**/{
            var facts = []
            var fact = Math.floor(Math.random() * facts.length);
            message.channel.send(facts[fact]);
        }
        else if (message.author.id === "")/**/{
            var facts = []
            var fact = Math.floor(Math.random() * facts.length);
            message.channel.send(facts[fact]);
        }
        else if (message.author.id === "")/**/{
            var facts = []
            var fact = Math.floor(Math.random() * facts.length);
            message.channel.send(facts[fact]);
        }
        
        else {
            var facts = []
            var fact = Math.floor(Math.random() * facts.length);
            message.channel.send(facts[fact]); 
    
        }  
        
    }
    if(command === 'findgrimz'){
        if (message.author.id === "551922010264043530"){
            message.channel.send("do us all a favor and fuck off kid")
        }
        else{
        message.channel.send("eh yo bitchass grimz where you at?")
        }
    }
    if(command === 'banthekid'){
        if (message.author.id === "551922010264043530"){
            message.channel.send("do us all a favor and fuck off kid")
        }
        else{
        message.channel.send("ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ban ")
        }
    }
    if(command === 'gay'){
        message.channel.send("mirror mirror on the wall whos the gayest of them all?")
        message.channel.send("is that even a question? its Cvon...")
    }
    if(command === 'fwcv'){
        if (message.author.id === "551922010264043530"){
            message.channel.send("do us all a favor and fuck off kid")
        }
        else{
        message.channel.send("stop getting me to do shit, fuck off take a message")
        var pingEnabled = true;
        var facts = ["Cvon is a gay nigger","this is fucking retarded", "discord bots are gay as fuck i cant even set off another command", "i wanna die","maybe i can fucking with @ing people", "ttv/neovisi0n <= sub or youre gay"]
        var fact = Math.floor(Math.random() * facts.length);
        message.channel.send(facts[fact]);
        }
    }
    if(command === 'stuck'){
        message.channel.send("Oh stepsis i see youre stuck in the washing machine")
        message.channel.send("*unzipps pants*")
    
    }
    if(command === 'num'){
        i = 1;

        message.channel.send("starting random countdown");
        var time1 = (10000);
        var time2 = (6000);
        setTimeout(() => ([time1]));
        var rnum = (Math.random() * 45);
        message.channel.send([rnum]);
        while (i <= rnum){
            setTimeout(() => ([time2]));
        
            message.channel.send([i]); 
            i = i + 1;
        };
        message.channel.send("done");
    }

    
    if(command === 'start'){
    var time = (Math.random() * 60000);
    var number = (Math.random() * 100);
    setTimeout(() => ([time]));
    message.channel.send("message was delayed by")
    message.channel.send([time]);
    //var facts = [message.channel.send("your random number is"[number])]
    //var fact = Math.floor(Math.random() * facts.length);
    //message.channel.send(facts[fact]);
    }

    
    if(command === 'randdef'){
        message.channel.send("The defender youre going to play is")
        var facts = ["Smoke","Mute","Castle","Pulse","Doc","Rook","Kapkan","Tachanka","Jäger","Bandit","Frost","Valkyrie","Caveira","Echo","Mira","Lesion","Ela","Vigil","Alibi","Maestro","Clash","Kaid","Mozzie","Warden","Goyo","Wamai","Oryx","Melusi","Aruni"]
        var fact = Math.floor(Math.random() * facts.length);
        message.channel.send(facts[fact]);

    }


    if(command === 'randatt'){
        message.channel.send("The attacker you are going to play is")
        var facts = ["Sledge","Thatcher","Ash","Thermite","Twitch","Montagne","Glaz","Fuze","Blitz","IQ","Buck","Blackbeard","Capitão","Hibana","Jackal","Ying","Zofia","Dokkaebi","Lion","Finka","Maverick","Nomad","Gridlock","Nøkk","Amaru","Kali","Iana","Ace","Zero"]
        var fact = Math.floor(Math.random() * facts.length);
        message.channel.send(facts[fact]);

    }
    if(command === 'test'){
        message.reply("hi")
    }















});


client.login('Nzg1Mzk2MDYyNDUzMzY2ODI0.X83PFQ.iIKvTIOlSH--dTTp6_33ZNEAPWQ');
return;
