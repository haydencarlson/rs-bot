const Users = require('../db/collections/users');
const MessageReplyHandler = require('./message_reply_handler');
const { skill_data } = require('../config');
const { 
  randomNumber, 
  sleep,
  xpToLevel
} = require('../util/');

module.exports = async (messageReplyHandler, user, skill) => {
  const users = new Users();
  const hasSpace = Users.hasSpace(user.inventory);
  if (!hasSpace) {
    return messageReplyHandler.inventoryFull();
  }
  
  await users.setTraining(user._id, true);
  messageReplyHandler.isTraining();
  const skillTools = skill_data[skill].tools;
  const skillRewards = skill_data[skill].rewards;

  const currentXp = Users.getSkillCurrentXp(user.statistics, skill);

  const randomTool = skillTools[randomNumber(0, skillTools.length - 1)];
  const randomReward = skillRewards[randomNumber(0, skillRewards.length - 1)];
  const randomRewardQuantity = Users.getRandomRewardQuantity(user);
  const randomXp = randomNumber(375, 420);
  const actionDelay =   
    randomNumber(randomTool.delay[0], randomTool.delay[1]) + 
    randomNumber(randomReward.delay[0], randomReward.delay[1]);
  const gainedXp = randomXp + (randomReward.xp * randomRewardQuantity);
  const newXp = currentXp + gainedXp;
  const newLevel = xpToLevel(newXp);

  await sleep(actionDelay);

  await users.addItems(user, randomReward.name, randomRewardQuantity);
  await users.setSkillXp(user, skill, newXp);

  messageReplyHandler.skillTrainedSuccess(
    skill,
    gainedXp,
    actionDelay,
    newLevel,
    newXp
  );
};