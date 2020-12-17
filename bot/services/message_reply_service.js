const { MessageEmbed } = require('discord.js');
const { skill_data } = require('../../config');
const { firstToUpper, kFormatter } = require("../../util");
class MessageReplyHandler {
  constructor(message) {
    this.message = message;
    this.embed = new MessageEmbed();
  }

  skillTrainedSuccess({
    skill, 
    gainedXp, 
    actionDelay, 
    newLevel, 
    newXp,
    randomRewardQuantity,
    randomReward,
    randomTool,
    inventorySpaceUsed
  }) {
    const skillData = skill_data[skill];
    this.embed
      .setTitle(firstToUpper(skill))
      .setAuthor(this.message.author.username, this.message.author.avatarURL())
      .addFields([
        {
          name: `<:Woodcutting:784545972386398248> **${newLevel}/99** (${kFormatter(newXp)} xp)`,
          value: `You gained ${gainedXp} experience from training ${skill}`,
          inline: true,
        },
        {
          name: 'Resource',
          value: `${randomRewardQuantity} __${randomReward.name}__ were gathered by using a ${randomTool.name}.\n
          You have used **${inventorySpaceUsed}/28** inventory spaces`
        }
      ])
      .setFooter(`This action took ${actionDelay / 1000} seconds`);
    this._sendEmbed();
  }

  inventoryFull() {
    this._sendMessage(`${this.message.author.username} your inventory is full.`)
  }

  registerSuccess() {
    this._sendMessage(`${this.message.author.username} registered successfully.`);
  }
  
  isTraining() {
    this._sendMessage(`${this.message.author.username} is woodcutting.`);
  }

  _sendMessage(message) {
    this.message.channel.send(message);
    this.message.delete();
  }

  _sendEmbed() {
    this.message.channel.send(this.embed);
  }
}

module.exports = MessageReplyHandler;