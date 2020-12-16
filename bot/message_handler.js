const Database = require('../db');
const Users = require('../db/collections/users');
const { splitOutCommand } = require('../util');
const {
  command_to_skill
} = require('../config');
const trainSkill = require('./train_skill');

module.exports = async (message) => {
  const botId = '787941125507252224';
  const messageAuthorId = message.author.id;
  const users = new Users();
  const user = await users.findUser(messageAuthorId)
  const command = splitOutCommand(message);
  const isBotCommand = message.content.match(/^r./) !== null;
  if (!isBotCommand || messageAuthorId === botId) return;

  if (!user) {
    await users.registerUser(messageAuthorId);
    return; // Display registered message
  };

  if (command_to_skill[command]) {
    trainSkill(message, user, command_to_skill[command]);
  }
};