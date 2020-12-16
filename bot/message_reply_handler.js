const { MessageEmbed, Message } = require('discord.js');
const { skill_data } = require('../config');
const { firstToUpper, kFormatter } = require("../util/");
class MessageReplyHandler {
  constructor(message) {
    this.message = message;
    this.embed = new MessageEmbed();
  }

  skillTrainedSuccess(skill, gainedXp, actionDelay, newLevel, newXp) {
    const skillData = skill_data[skill];
    this.embed
      .setTitle(firstToUpper(skill))
      .setAuthor(this.message.author.username, this.message.author.avatarURL())
      .addFields([
        {
          name: ` **${newLevel}/99** (${kFormatter(newXp)} xp)`,
          value: `You gained ${gainedXp} experience from training ${skill}`,
          inline: true,
        },
      ])
      .setFooter(`This action took ${actionDelay / 1000} seconds`);
    this.sendReply();
  }

  sendReply() {
    this.message.channel.send(this.embed);
  }
}

module.exports = MessageReplyHandler;