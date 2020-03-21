const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

let prefix = '%^'
var HashMap = require('hashmap');

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setPresence({ game: { name: '%^help', type: 0 } });
    
    var text = fs.readFileSync("stable/fields.csv", 'utf8');
    var lines = text.toString().split('¥n');
    for (var line of lines) {
        console.log(line)
    }
});

client.on('message', message => {
    if (message.content.startsWith(prefix + 'help')) {
        message.channel.send("```\nコマンド:\n" + prefix + "mcptr <Field(例: field_100013_f), Method(例: func_100011_g)>```");
    }
    else if (message.content.startsWith(prefix + 'mcptr')) {
        let field_or_method = message.content.split(" ").slice(1);
    }
});

client.login(process.env.BOT_TOKEN);
