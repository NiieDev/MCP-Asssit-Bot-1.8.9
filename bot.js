const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

var readline = require("readline");

let prefix = '%^'

const fields = new Map();
const methods = new Map();

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setPresence({ game: { name: '%^help', type: 0 } });
    var stream = fs.createReadStream("stable/fields.csv", "utf8");

    var reader = readline.createInterface({ input: stream });
    var linesplit = null;
    reader.on("line", (data) => {
        linesplit = data.split(",");
        console.log(data);
        console.log(linesplit[0]);
    });
    
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
