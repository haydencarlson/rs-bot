const { BOT_PREFIX } = process.env;

function splitOutCommand(message) {
  return message.content.split(BOT_PREFIX).join(' ').split(' ')[1];
}

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = {
  splitOutCommand,
  randomNumber,
  sleep
}