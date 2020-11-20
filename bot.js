const Discord = require("discord.js");
const tpoints = {};
const vpoints = {};
const jimp = require("jimp");
const client = new Discord.Client();
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("ڕیکلام بۆ منێرە", { type: "playing" });
  console.log("");
  console.log("");
  console.log(
    "╔[═════════════════════════════════════════════════════════════════]╗"
  );
  console.log(`[Start] ${new Date()}`);
  console.log(
    "╚[═════════════════════════════════════════════════════════════════]╝"
  );
  console.log("");
  console.log("╔[════════════════════════════════════]╗");
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log("");
  console.log("Informations :");
  console.log("");
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log("╚[════════════════════════════════════]╝");
  console.log("");
  console.log("╔[════════════]╗");
  console.log(" Bot Is Online");
  console.log("╚[════════════]╝");
  console.log("");
  console.log("");
});



client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(`daxoi`) // لینکی سێرڤەری خۆت لیرە دابنی بە هەتا هەتای بێت
    
  client.channels.get("779031554101346345").send(
`> sent By  <@${message.author.id}> ✅ 
${message.content}`)
}
    }
        })



client.on('message', message => { 

if (!message.guild) return; 

if (message.content === 'c!wara') { 
  
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  
if (message.member.voiceChannel) { 

message.member.voiceChannel.join() 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('**بڕۆ ڤۆیسیک**'); 

} 

} 

});

client.login("NzcyNDYzMjYwNDU1OTI3ODI4.X57CeA.sja7wTOr6pNO6fH5yjc7zw9Tkcg"); //تۆکن لێرە دابنی

