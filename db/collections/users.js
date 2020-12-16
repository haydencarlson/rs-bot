const Base = require('./base');
const { skills } = require('../../config');
const { randomNumber } = require('../../util/');
class Users extends Base {
  constructor() {
    super('users');
  }

  findUser(discordId) {
    return this.collection.findOne({
      discordId
    });
  }

  setTraining(id, training) {
    return this.updateOne(id, { training });
  }

  async addItems(user, item, itemQuantity) {
    if (Users.hasSpace(user.inventory) && (user.inventory.length + itemQuantity) <= 28) {
      for (let i = 0; i < itemQuantity; i++) {
        user.inventory.push(item);
      }
      return this.updateOne(user._id, { inventory: user.inventory });
    }
    throw new Error(`${user.discordId} has no space for ${itemQuantity} ${item}`);
  }

  async setSkillXp(user, skill, newXp) {
    return this.updateOne(user._id, {
      [`statistics.${skill}`]: newXp
    })
  }

  static getRandomRewardQuantity(user) {
    if (user.inventory.length <= 21) {
      return randomNumber(1, 7);
    }
    return 1;
  }

  static getSkillCurrentXp(statistics, skill) {
    return statistics[skill];
  }

  static hasSpace(inventory) {
    return inventory.length < 28;
  }

  async registerUser(discordId) {
    const existingUser = await this.findUser(discordId);
    const startingStats = skills.reduce((stats, skill) => ({...stats, [skill]: 0}), {});
    if (!existingUser) {
      await this.collection.insertOne({
        discordId,
        attackStyle: 'shared',
        inventory: [],
        statistics: startingStats,
        training: false
      });
      console.log(`User ${discordId} registered.`);
    }
  }
}

module.exports = Users;