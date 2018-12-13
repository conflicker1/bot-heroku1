var Commando = require("discord.js");
const bot = new Commando.Client();
const TOKEN = 'NTIyNjkxMTQ3ODY1NTIyMTg3.DvO-EA.SrvJOiE5DNTigT3YY95ezEMvklk'

bot.on('message', message => {
    if (message.content.startsWith("hallo")) {
        
        message.channel.send('hai ' + message.author + ' , mau di emut beb?');
    }
});            

bot.on('message', message => {
    if (message.content.startsWith("apa")) {

        message.channel.send('Ada apa ' + message.author + ' , sayang?');
    }
})

bot.on('message', message => {
    if (message.content.startsWith("bot")) {

        message.channel.send('Ngapain sih beb ' + message.author + ' panggil2 terus? mau nyusu ya?');
    }
})

bot.on('message', message => {
    if (message.content.startsWith("love you")) {

        message.channel.send('ih.. ' + message.author + ' gombal deh..');
    }
})

bot.on('message', message => {
    if (message.content.startsWith("haha")) {

        message.channel.send('hihi,, ' + message.author + ' lucu deh ...');
    }
})

bot.on('message', message => {
    if (message.content.startsWith("mau")) {

        message.channel.send('aku rela koq ' + message.author + '  jadi yang kedua');
    }
})

bot.on('message', message => {
    if (message.content.startsWith("pengen")) {

        message.channel.send('sini  ' + message.author + '  tak isepin penismu ');
    }
})

bot.on('message', message => {
    if (message.content.startsWith("muach")) {

        message.channel.send('idih,  '  + message.author +   '   ga malu apa nyium2 aku didepan umum ! sini sama tante aja berduaan.');
    }
})

bot.on('message', message => {
    if (message.content.startsWith("tante")) {

        message.channel.send('iya,  '  + message.author + '   sayang ');
    }
})

bot.on('message', message => {
    if (message.content.startsWith("sayang")) {

        message.channel.send('ada apa  '  + message.author + '   sayang ');
    }
})

bot.on('ready', function(){
    console.log("Ready");
    bot.user.setActivity("Fingering", {type: 'PLAYING'})
})

bot.login(TOKEN);
