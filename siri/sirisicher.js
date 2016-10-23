const Discord = require('discord.js');
const bot = new Discord.Client();
const yt = require('ytdl-core');
const Debug = true;

bot.on('message', message => {
  if (message.author.username === 'Siri') {
try {
  message.delete(15000)
 .then(msg => console.log('Deleted message from "' + message.author.username + '"' ))
        } catch (err) {
   message.chnannel.sendMessage(' an error occured ')
 }
 }

  var random = Math.floor((Math.random() * 10) + 1);

    if (random === 1) {
        bot.user.setGame('Hey Siri, help')
  }

    if (random === 2) {
        bot.user.setGame('By Mel')
  }

  if (random === 3) {
      bot.user.setGame('Alle Aehnlichkeiten zu anderen Assistenten sind volkommen zufaellig.')
  }

  if (random === 4) {
      bot.user.setGame('Nicht (!) von Apple.')
  }

  if (random === 5) {
      bot.user.setGame('Hey Siri, help')
  }

    if (random === 6) {
      bot.user.setGame('besser als Cortana sein.')
  }

    if (random === 7) {
      bot.user.setGame('In JavaScript gemacht sein')
  }

  if (random === 8) {
      bot.user.setGame('Hey Siri, help')
  }

  if (random === 9) {
      bot.user.setGame('Hey Siri, help')
  }

  if (random === 10) {
      bot.user.setGame('Hey Siri, help')
  }

	 	var input = message.content.toUpperCase()
    var pre = 'HEY SIRI, '


  if (input === 'HEY SIRI') {
    message.delete(5000)
    console.log('deleted message from "' + message.author.username + '"')
    message.channel.sendMessage('*Listening...*')
      setTimeout(function(){

        message.channel.sendMessage('E: Keine Argumente gefunden! `Hey siri, help` fuer die Hilfeliste! :D');
    }, 3000);

  }

var pre = 'HEY SIRI, '
var wikiPrefix = pre + 'INFOS UEBER ';
var wikiPrefix2 = pre + 'INFOS ÜBER '
var mapsPrefix = pre + 'SUCHE IN MAPS NACH ';
var searchPrefix = pre + 'SUCHE NACH ';
var bingPrefix = pre + 'SUCHE BEI BING NACH ';
var imagePrefix = pre + 'SUCHE IN BILDER NACH '
var gamePrefix = pre + 'SUCHE DAS SPIEL ';
var ytPrefix = pre + 'SUCHE AUF YOUTUBE NACH '
var sayPrefix = pre + 'SAG ';
var random = Math.floor((Math.random() * 10) + 1);
var musicPre = 'HEY SIRI, PLAY ';
var sayPre = pre + 'SAY'
var timerPre = pre + 'STELL DEN TIMER AUF  '
var web = 1
var queuePre = pre + 'PLAY ';



//help:

if (input.startsWith(pre)) {
    message.delete(5000)
    console.log('deleted message from "' + message.author.username + '"')
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


if (input === pre + 'HELP') {
    web = 0
    message.channel.sendMessage("\n-=-**Siri - ein Discord-bot**-=-\n\n-=-**Neuerungen:**\nMusikfeature - schreibe Hey Siri, play `Link`, um einen Song abzuspielen.\n\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n\n-=-**Commands:**\n\n-=-**Prefix:** `Hey Siri,`\n-=-**GROSS/kleinschreibung** ist **egal**!\n\n-=-**Basic:**\n-=-`help` -  zeigt dir diese Infos.\n-=-`Hallo` - random Antwort\n-=-`Ping` - ~~zeigt dir deinen Ping~~\n-=-`Gib mir deinen Link` - gibt dir Siris Einladungslink\n\n-=-**Suchen und Infos:**\n-=-`Infos ueber SUCHBEGRIFF` - Infos ueber den Suchbegriff\n-=-`Suche in maps nach ORT` - sucht bei Google maps nach dem Ort\n-=-`Suche nach SUCHBEGRIFF` -  sucht bei Google nach dem Suchbegriff\n-=-`Suche in Bilder nach SUCHBEGRIFF` -  Sucht bei google images nach dem Suchbegriff\n-=-`Suche auf YouTube nach SUCHBEGRIFF` - sucht auf YouTube nach dem Suchbegriff\n-=-`Suche bei Bing nach SUCHBEGRIFF` -  Sucht bei Bing nach dem Suchbegriff\n-=-`Suche das Spiel SUCHBEGRIFF` -  sucht auf mehreren Seiten nach dem Suchbegriff\n\n-=-**Musik:**\n-=-`Joinme` - Joint in deinen Sprach-channel, falls du in einem bist.\n-=-`Leave` - Leavet aus dem Voice-channel\n-=-`Play YOUTUBE-LINK` - Falls noch nocht geschehen, joint sie in deinen Voice-channel und spielt den Ton des Videos ab.\n\n\n```css\nWARNUNG! DIESES FEATURE IST NOCH SEHR INSTABIL UND KANN JEDERZEIT ABSTUERZEN. ES EXISTIERT NOCH KEINE QUEUE UND PLAYLISTS WERDEN NOCH NICHT UNTERSTUETZT. FERNER SOLLTEN KEINE PLAY-CMDS AUSGEFUEHRT WERDEN, WAEHREND EIN VIDEO ABGESPIELT WIRD. DIES KOENNTE EINEN CRASH VERURSACHEN.```\n\n\n-=-`Stop` -  stoppt die Musik und leavet aus deinem Voice-channel");
  }

//help end

  if (input === 'HEY SIRI, QUEUE') {
    web = 0
  }

  if (input.startsWith('HEY SIRI, ADD ')) {
    web = 0
  }

  if (random === 1 && input === pre + 'HALLO') {
    web = 0
    message.channel.sendMessage('Hallo.');
  }

  if (random === 2 && input === pre + 'HALLO') {
    web = 0
    message.channel.sendMessage('Hi.');
  }

  if (random === 3 && input === pre + 'HALLO') {
    web = 0
    message.channel.sendMessage('Hey! :smile:');
  }

  if (random === 4 && input === pre + 'HALLO') {
        web = 0
    message.channel.sendMessage('Hui!');
  }

  if (random === 5 && input === pre + 'HALLO') {
        web = 0
    message.channel.sendMessage('Hallu! :3');
  }

  if (random === 6 && input === pre + 'HALLO') {
        web = 0
    message.channel.sendMessage('Hallo - ho!');
  }

  if (random === 7 && input === pre + 'HALLO') {
        web = 0
    message.channel.sendMessage('Hai!');
  }

  if (random === 8 && input === pre + 'HALLO') {
        web = 0
    message.channel.sendMessage(':shark:');
  }

  if (random === 9 && input === pre + 'HALLO') {
        web = 0
    message.channel.sendMessage('Hiii! Was geht?');
  }

  if (random === 10 && input === pre + 'HALLO') {
        web = 0
    message.channel.sendMessage('Hallo. Wie kann ich dir weiterhelfen?');
  }

//basic
     setTimeout(function(){


    }, 3000);
//basic end


  if (input === pre + 'SIRIBILD') {
        web = 0
      message.channel.sendMessage('*Getting image from Imgur...*')
     setTimeout(function(){
        message.channel.sendFile('http://imgur.com/1HYOA0L.png');
    }, 1000);
  }

  if (input === pre + 'WAS GEHT?') {
        web = 0
    message.channel.sendMessage('Alles was Beine hat! :stuck_out_tongue:');
  }

  if (input === pre + 'PING') {
        web = 0
        message.channel.sendMessage('*Getting Ping...*')
     setTimeout(function(){
        message.channel.sendMessage('Pong');
    }, 500);
  }

  if (input === pre + 'GIB MIR DEINEN LINK') {
        web = 0
    message.channel.sendMessage('*Generiere Link...*')
    setTimeout(function(){
        message.reply('Hier: https://discordapp.com/oauth2/authorize?client_id=230006769647091712&scope=bot :smiley:');
      }, 500);
  }
  if (input === pre + 'MYAVATAR') {
    message.reply(message.author.avatarURL)
  }


//SEARCH STUFF
//Google search:
 if(input.startsWith(searchPrefix) ){
       web = 0
      message.channel.sendMessage('*Suche...*')
      var search = input.substr(searchPrefix.length);
      var searchDown = search.toLowerCase()
      var searchDownUrl = searchDown.split(' ').join('+');
                 setTimeout(function(){
      var searchUrl = 'https://www.google.com/search?client=chrome&q=' + searchDownUrl + '&sourceid=chrome&ie=UTF-8&oe=UTF-8';
    message.channel.sendMessage('Ich habe dies gefunden: ' + searchUrl);
       }, 1000);
//    jq.get(searchUrl,function(data, status) {
//      console.log(searchUrl);
//      message.channel.sendMessage('status = ' + status);
//      console.log('status = ' + status);
//      },'html');

//    jq.get( searchUrl, function( data ) {
//      jq( ".result" ).html( data );
//      console.log( "Load was performed." );
//    });
  }

  // if(input.startsWith(timerPre) ){
  // var timer = input.substr(timerPre.length);
  // var timerInt = parseInt(timer)
  // var timerFull = timerInt*10000
  //  message.channel.sendMessage('Der Timer wurde auf ' + timerFull + ' Minuten gestellt!');
  //                     setTimeout(function(){
  //  message.channel.reply('Der Timer ist vorueber!');
  //     }, timerFull);
  //}

//Bing search:
 if(input.startsWith(bingPrefix) ){
          web = 0
   var bing = input.substr(bingPrefix.length);
   var bingDown = bing.toLowerCase()
   var bingDownUrl = bingDown.split(' ').join('+');
   var bingUrl = 'http://www.bing.com/search?q=' + bingDownUrl + '&go=Submit&qs=n&form=QBLH&pq=' + bingDownUrl + '&sc=0-0&sp=-1&sk=&cvid=3E199023D7D742D9ADBDC765945AAA42';
    message.channel.sendMessage('Ein paar Ergebnisse fuer "' + bingDown + '" : '  + bingUrl);
  }

  if(input.startsWith(ytPrefix) ){
           web = 0
   var yt1 = input.substr(ytPrefix.length);
   var ytDown = yt1.toLowerCase()
   var ytDownUrl = ytDown.split(' ').join('+');
   var ytUrl = 'https://www.youtube.com/results?search_query=' + ytDownUrl;
    message.channel.sendMessage('Ergebnis: '  + ytUrl);
  }
//Wikipedia search:
  if(input.startsWith(wikiPrefix) ){
           web = 0
   var wiki = input.substr(wikiPrefix.length);
   var wikiDown = wiki.toLowerCase()
   var wikiDownUrl = wikiDown.split(' ').join('_');
   var wikiUrl = 'https://de.wiki//www.youtube.com/watch?v=ELtS6vM3Rx8pedia.org/wiki/' + wikiDownUrl;
    message.channel.sendMessage('Hier, bitte: ' + wikiUrl);
  }

  if(input.startsWith(wikiPrefix2) ){
           web = 0
   var wiki2 = input.substr(wikiPrefix2.length);
   var wiki2Down = wiki2.toLowerCase()
   var wiki2DownUrl = wiki2Down.split(' ').join('_');
   var wikiUrl2 = 'https://de.wikipedia.org/wiki/' + wiki2DownUrl;
    message.channel.sendMessage('Hier, bitte: ' + wikiUrl2);
  }

//Google Maps search:
if(input.startsWith(mapsPrefix) ){
         web = 0
    var place = input.substr(mapsPrefix.length);
    var placeDown = place.toLowerCase()
    var placeDownUrl = placeDown.split(' ').join('+');
    var placeURL = 'https://www.google.com/maps/search/' + placeDownUrl + '/';
    message.channel.sendMessage('Ich habe dies gefunden: ' + placeURL);
}

//Google Images search:
if(input.startsWith(imagePrefix) ){
         web = 0
    var imageQ = input.substr(imagePrefix.length);
    var imageQdown = imageQ.toLowerCase()
    var imageQdownUrl = imageQdown.split(' ').join('+');
    var imageURL = 'https://www.google.de/search?site=imghp&tbm=isch&source=hp&biw=1233&bih=668&q=' + imageQdownUrl + '&oq=' + imageQdownUrl  + 'img.3...1961.2154.0.2458.0.0.0.0.0.0.0.0..0.0....0...1ac.1.64.img..0.0.0.HinC_EN1DqY';
    message.channel.sendMessage('Ich habe dies gefunden: ' + imageURL);
}


//GOOGLE STUFF

if(input.startsWith(gamePrefix) ){
         web = 0
    var gameQ = input.substr(gamePrefix.length);
    var gameQdown = gameQ.toLowerCase()
    var gameQdownUrl = gameQdown.split(' ').join('+');
    var gameURL = 'http://store.steampowered.com/search/?snr=1_4_4__12&term=' + gameQdownUrl;
    var mmogaURL = 'http://www.mmoga.de/advanced_search.php?keywords=s' + gameQdownUrl + '&x=0&y=0';
    var originURL = 'https://www.origin.com/usa/en-us/search?searchString=' + gameQdownUrl;
    var gShopURL = 'https://www.google.de/search?client=chrome&hs=kmm&biw=1247&bih=676&tbm=shop&q=' + gameQdownUrl + '&oq=' + gameQdownUrl + '&gs_l=serp.3..0l10.59.1840.0.1879.9.7.0.0.0.0.283.283.2-1.1.0....0...1c.1.64.serp..8.1.281.BaPK8SaFxys';
    message.channel.sendMessage('Ich habe dies gefunden: ' + gameURL + '\n \nund das hier: ' + mmogaURL + '\n \nund das hier: ' + gShopURL + '\n \nund natuerlich das hier: ' + originURL);
}
/*  var queue = new Array;

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
  }*/


});

bot.login('CESNORED');
