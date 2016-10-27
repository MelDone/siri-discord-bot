//Siri -  a discord bot :O
//
//constant vars [1]
const Discord = require('discord.js');
const bot = new Discord.Client();
const yt = require('ytdl-core');
const Debug = true;
//constant vars end



//ready-message [2]
bot.on("ready", () => {
  console.log(`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n\nFertig geladen - \n=> ${bot.channels.size} Kanaele.\n=> ${bot.guilds.size} Server.\n=> ${bot.users.size} Nutzer. \n\nDieses Fenster ist nun Read-only.\n\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n\n`);
});
//ready-message end

//message function [3]
bot.on('message', message => {

//functions

//functions end

//vars
var input =  message.content.toUpperCase()
var pre = 'HEY SIRI, '
var n = '\n'
var nn = ' \n \n'
var k = '-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-'
var web = 1
var queuePre = pre + 'PLAY'
var queue = new Array;
var help = {
  'title':'**-=-Siri - ein Discord-bot-=-**',
  "Prefix":"**-=-**Prefix: `Hey Siri, `**-=-**",
  "Help": "**-=-**`help` - Zeige dies an**-=-**",
  'basic':'**`Gib mir deinen Link` - gibt dir Siris Einladungslink\n',
  'suchen': '**Suchen und Infos:**\n\n`Hey Siri, suche nach SUCHBEGRIFF`// `Hey Siri, SUCHBEGRIFF` -  Sucht nach dem Suchbegriff\n`Infos ueber SUCHBEGRIFF` - Infos ueber den Suchbegriff\n`Suche in maps nach ORT` - sucht bei Google maps nach dem Ort\n`Suche nach SUCHBEGRIFF` -  sucht bei Google nach dem Suchbegriff\n`Suche in Bilder nach SUCHBEGRIFF` -  Sucht bei google images nach dem Suchbegriff\n`Suche auf YouTube nach SUCHBEGRIFF` - sucht auf YouTube nach dem Suchbegriff\n`Suche bei Bing nach SUCHBEGRIFF` -  Sucht bei Bing nach dem Suchbegriff\n `Suche das Spiel SUCHBEGRIFF` -  sucht auf mehreren Seiten nach dem Suchbegriff',




};
//vars end
 try {
   if (message.author.username === 'Siri') {
     message.delete(10000)
   }

   if (input.startsWith(pre)) {
       message.delete(10000)
       console.log('[INFO] - Deleted message from "' + message.author.username + '"')
          setTimeout(function(){
            var webSearch = input.substr(pre.length);
            var webSearchDown = webSearch.toLowerCase()
            var webSearchDownUrl = webSearchDown.split(' ').join('+');
            var gUrl = 'https://www.google.com/search?client=chrome&q=' + webSearchDownUrl + '&sourceid=chrome&ie=UTF-8&oe=UTF-8';
            if (web === 1) {
              message.channel.sendMessage('Ich bin mir nicht sicher, was du mit "' + webSearchDown + '" meinst,\nmeine Websuche hat aber folgendes ergeben: ' + gUrl)
            }
       }, 1);
     }

  if (input.startsWith(pre + 'HI') || input.startsWith('lololfg7tfr')) {
    web = 0
    let cmd = input.substr(pre.length);
      message.channel.sendMessage('Hallo, **' + message.author.username + '**. Ich hoffe es geht dir gut.');
        console.log('[INFO] - ' + message.author.username + ' executed ' + pre + cmd)
          return;
  }

  if (input.startsWith(pre + 'HELP')) {
    web = 0
    let cmd = input.substr(pre.length);
      message.reply(n + k + nn + help['title'] + nn + k + nn + help["Prefix"] + n + k + nn + help['Help'] + nn + k + nn + '**Basic:**' + nn + k + nn + help['basic'] + nn + k + nn + help['suchen']);
        console.log('[INFO] - ' + message.author.username + ' executed "' + pre.toLowerCase() + cmd.toLowerCase() + '"')
  }

  if (input === pre + 'GIB MIR DEINEN LINK') {
    web = 0
    let cmd = input.substr(pre.length);
      message.reply('Hier: https://discordapp.com/oauth2/authorize?client_id=230006769647091712&scope=bot :smiley:');
        console.log('[INFO] - ' + message.author.username + ' executed "' + pre.toLowerCase() + cmd.toLowerCase() + '"')
        return;
  }

} catch (err) {
  message.channel.sendMessage('Error: ```' + err + '```')
    console.log('[ERROR] - ' + err)
    return;
}

//voice output
if (input === pre + 'HELP') {
    web = 0
      var voiceChannel = message.member.voiceChannel;
      var stream = " ";
      var disp, con;

      sound = voiceChannel
       if (!voiceChannel) {
        return;
      } else {
              voiceChannel.join().then(connnection => {


          try{
            stream = yt('https://youtu.be/oDFy7praXic', {audioonly: true});
          } catch (err) {
            console.log('[WARNING] - Music output failed.');
          }

          bot.on('error', function (err) {
    console.log('failed.')
            });

      const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {

          return;});
});
    }
 }

 if (input.startsWith(pre)) {
      var voiceChannel = message.member.voiceChannel;
      var stream = " ";
      var disp, con;
setTimeout(function() {

        if(web === 1) {

      sound = voiceChannel
       if (!voiceChannel) {
        return;
      } else {
              voiceChannel.join().then(connnection => {


          try{
            stream = yt('https://youtu.be/sileJ4nU0m4', {audioonly: true});
          } catch (err) {
            console.log('[WARNING] - Music output failed.');
          }

          bot.on('error', function (err) {
    console.log('failed.')
            });

      const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {

          return;});
});

    }
    }
  }, 1000);
 }

 //music:
 if (message.content.toUpperCase().startsWith(queuePre)) {

    web = 0
    var voiceChannel = message.member.voiceChannel;
    voiceChannel.leave();
    var stream = " ";
    var disp, con;

     setTimeout(function(){

    var songq = message.content.substr(queuePre.length);






    web = 0;


    queue.push(songq);


    sound = voiceChannel;

      if (!voiceChannel) {
        return message.reply(`Du bist in keinem Sprachkanal!`);
      }

        voiceChannel.join().then(connnection => {


          try{


                stream = yt(songq, {audioonly: true});
                queue.shift();
                  console.log(message.author.username + " hat den Play-command genutzt - jetzt spielt " + songq + '.');
                  message.channel.sendMessage(('**' + message.author.username + "** hat `Hey Siri, play` genutzt - jetzt spielt **" + songq + '**.'));

          } catch (err) {
            console.log('failed.');
          }

          bot.on('error', function (err) {
    console.log('failed.')
});

      const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
          return;

                });



      });



    }, 30);



} else if (input === pre + 'PAUSE') {
        const dispatcher = connnection.playStream(stream);
          dispatcher.pause()
        } else if (input === pre + 'RESUME') {
                const dispatcher = connnection.playStream(stream);
          dispatcher.resume()
        }

if (input === pre + 'LEAVE') {
  web = 0
var voiceChannel = message.member.voiceChannel;
  if (!voiceChannel) {
    message.reply('Du bist nicht in einem Sprachkanal!')
  }   else {
    voiceChannel.leave();
    message.channel.sendMessage('Bye bye! :wave:')
  }
}


    if (input === pre + 'STOP') {
          web = 0
      var voiceChannel = message.member.voiceChannel;
      try{
      voiceChannel.leave();
      message.channel.sendMessage('Musik wird gestoppt... Bye! :wave:');
    } catch(err) {
      console.log('lol');
    }
    }

    if (input === pre + 'JOINME') {
  web = 0
        var voiceChannel = message.member.voiceChannel;
                voiceChannel.join()
}
//music end xd

//voice output end
});
//message function end

//login [?]
bot.login('MjMwMDA2NzY5NjQ3MDkxNzEy.Cu3hvA.hJGc8TojKmU7a1BOCzGIhYRx9lY');
//login end

//end
