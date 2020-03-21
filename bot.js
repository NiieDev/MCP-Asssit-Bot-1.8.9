const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

var readline = require("readline");

let prefix = '%^'

var fields = new Map();
var methods = new Map();

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setPresence({ game: { name: '%^help', type: 0 } });
    var stream = fs.createReadStream("stable/fields.csv", "utf8");

    var reader = readline.createInterface({ input: stream });
    var linesplit = null;
    var bool = false;
    
    reader.on("line", (data) => {
        if(bool){
            linesplit = data.split(",");
            fields.set(linesplit[0], linesplit[1]);
        }
        bool = true;
    });
    
    var stream2 = fs.createReadStream("stable/methods.csv", "utf8");

    var reader2 = readline.createInterface({ input: stream2 });
    var linesplit2 = null;
    var bool2 = false;
    
    reader2.on("line", (data) => {
        if(bool2){
            linesplit2 = data.split(",");
            methods.set(linesplit2[0], linesplit2[1]);
        }
        bool2 = true;
    });
});

client.on('message', message => {
    if (message.content.startsWith(prefix + 'help')) {
        message.channel.send("```\nコマンド:\n" + prefix + "mcptr <Field(例: field_100013_f), Method(例: func_100011_g)>```");
    }
    else if (message.content.startsWith(prefix + 'mcptr')) {
        let field_or_method = message.content.split(" ").slice(1) + "";
        if(field_or_method.startsWith("field")){
            message.channel.send("```" + field_or_method + ": " + fields.get(field_or_method) + "```");
        }else if(field_or_method.startsWith("func")){
            message.channel.send("```" + field_or_method + ": " + methods.get(field_or_method) + "```");
        }
    }
});

client.login(process.env.BOT_TOKEN);
