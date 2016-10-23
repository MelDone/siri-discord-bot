const Discord = require('discord.js');
const music = new Discord.Client();
const yt = require('ytdl-core');

music.on('message', message => {

  var pre = 'HEY SIRI, '
  var random = Math.floor((Math.random() * 10) + 1);
  var musicPre = 'HEY SIRI, PLAY ';
  var web = 1
  var queuePre = pre + 'PLAY ';
  var queue = new Array;
  var input = message.content.toUpperCase();

if (input === pre + 'JOINME') {
  web = 0
        var voiceChannel = message.member.voiceChannel;
      if (!voiceChannel) {
        return message.reply(`Du bist in keinem Sprachkanal!`);
      } else {
                voiceChannel.join()
      }

}
try {
if (message.content.toUpperCase().startsWith(queuePre)) {

    var songq = message.content.substr(queuePre.length);
    let stream = " ";
    let disp, con;
    var voiceChannel = message.member.voiceChannel;
    web = 0;

    queue.push(songq);

    sound = voiceChannel;

      if (!voiceChannel) {
        return message.reply(`Du bist in keinem Sprachkanal!`);
      }

        voiceChannel.join().then(connnection => {


          try{
            if (queue[0].startsWith('http://www.youtube.com/') || queue[0].startsWith('https://www.youtube.com/') || queue[0].startsWith('http://youtu.be/') || queue[0].startsWith('https://youtu.be/')) {


                stream = yt(queue[0], {audioonly: true});
                queue.shift();
                  console.log(message.author.username + " hat den Play-command genutzt - jetzt spielt " + songq + '.');
                  message.channel.sendMessage(('**' + message.author.username + "** hat `Hey Siri, play` genutzt - jetzt spielt **" + songq + '**.'));
               } else {
                  message.channel.sendMessage('Error. Dieser Link ist ungueltig. ')
                  voiceChannel.leave()
                }
          } catch (err) {
            console.log('failed.');
          }

          bot.on('error', function (err) {
    console.log('failed.')
});

      const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
        if (typeof(queue[0]) != 'undefined')   {
          voiceChannel.leave();
        } else {
            stream = yt(queue[0], {audioonly: true});
        }
          return;

                });


      });



}
} catch (err) {
  message.channel.sendMessage('Error: ' + err)
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


});

music.login('CENSORED');
