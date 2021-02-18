const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const myid = ['331523392496730114'];// your id
const prefix = ['#'];
 
client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : X_PyramidGamer_X `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
  console.log(`----------------`);
});
 
client2.on('ready', () => {
  console.log(`----------------`);
  console.log(`2 Account Online ✩' `);
   console.log(`----------------`);
});
 
 
 
client.on('message', message => {
    if(message.content === prefix+'daily'){
        message.channel.send('#daily')
    }
});
 
client.on('message', message => {
    if(message.content === prefix+'credits'){
        message.channel.send('#credits')
    }
});
 
client.on('message', message => {
    if(message.content === prefix+'rep'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
 
client.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**NEW spam code 2019 by Martin  - Martin will hack the world Martin will hack the world Martin will hack the world Martin will hack the world Martin will hack the world Martin will hack the world Martin will hack the world Martin will hack the world Martin will hack the world Martin will hack the world Martin will hack the world Martin will hack the world ر Martin will hack the world Martin will hack the world **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
         
        }
      }
});
 
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
 
 
if (command == "talk") {
let rank = message.guild.member(message.author).roles.find('name', 'X_PyramidGamer_X');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});
 
client2.on('message', message => {
    if(message.content === prefix+'daily'){
        message.channel.send('#daily')
    }
});
 
client2.on('message', message => {
    if(message.content === prefix+'credits'){
        message.channel.send('#credits')
    }
});
 
client2.on('message', message => {
    if(message.content === prefix+'rep'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
 
client2.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**NEW spam code 2019 by Martin  - Martin will hack the world Martin will hack the world Martin will hack the world Martin will hack the world Martin will hack the world Martin will hack the world Martin will hack the world Martin will hack the world Martin will hack the world Martin will hack the world Martin will hack the world Martin will hack the world ر Martin will hack the world Martin will hack the world **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
         
        }
      }
});
 
client2.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
 
 
if (command == "talk") {
let rank = message.guild.member(message.author).roles.find('name', 'X_PyramidGamer_X');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});
 
 
client.login('Nzg0MDc4OTk2MjU4MTYwNzEx.X8kEeA.FdwM_4sqs1eylzJ7JLNcM6wmWEc');
