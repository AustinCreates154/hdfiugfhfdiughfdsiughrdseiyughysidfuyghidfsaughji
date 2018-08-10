const discord = require('discord.js'),
const bot = new discord.Client(),
config = require('./config.json'),
prefix = ".",
      

bot.on('ready', () => {
  bot.user.setActivity('HentaiGod being touched as a child', {type: "WATCHING"})
}


bot.login(process.env.TOKEN)
