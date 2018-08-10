const discord = require('discord.js'),
const bot = new discord.Client(),
config = require('./config.json'),
prefix = ".",
      
// ===Loading Commands===
bot.commands = new discord.Collection()

require('fs').readdir("./commands/", (err, files) => {
  console.log("Loading commands...");
  if (err) return console.log(`Command loading failed!`);
  files.filter(f => f.split(".").pop() === "js").forEach((f, i) => {
    bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`));
  });
});
// ===Done Loading commands===

bot.on('ready', () => {
  bot.user.setActivity('HentaiGod being touched as a child', {type: "WATCHING"})
}


bot.login(process.env.TOKEN)
