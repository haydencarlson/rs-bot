const Discord = require("discord.js");
const client = new Discord.Client();
const handleMessage = require('./message_handler');

module.exports = () => {
  client.login(process.env.BOT_TOKEN);

  client.on("ready", () => {
    console.log("RS Bot now running");
  });

  client.on("message", handleMessage);
};