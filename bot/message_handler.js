const Database = require('../db');
const Users = require('../db/collections/users');
const MessageReplyHandler = require("./message_reply_handler");
const { splitOutCommand } = require('../util');
const trainSkill = require('./train_skill');
const {
  command_to_skill
} = require('../config');

module.exports = async (message) => {
  const botId = '787941125507252224';
  const messageAuthorId = message.author.id;
  const users = new Users();
  const user = await users.findUser(messageAuthorId)
  const command = splitOutCommand(message);
  const isBotCommand = message.content.match(/^r./) !== null;
  const messageReplyHandler = new MessageReplyHandler(message);

  if (!isBotCommand || messageAuthorId === botId) return;

  if (!user) {
    await users.registerUser(messageAuthorId);
    return messageReplyHandler.registerSuccess();
  };

  if (command_to_skill[command]) {
    trainSkill(
      messageReplyHandler,
      user,
      command_to_skill[command]
    );
  }
};