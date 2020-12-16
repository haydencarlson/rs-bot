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

function firstToUpper(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function calculateXp(xp) {
  return Math.floor(xp + 300 * Math.pow(2, xp / 7));    
}

function kFormatter(num) {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);
}

function levelToXp(level) {
  let xp = 0;
  for (var i = 1; i < level; i++) {
    xp += calculateXp(i);
  }

  return Math.floor(xp / 4);
}

function xpToLevel(xp) {
  let level = 1;
  while (levelToXp(level) < xp) {
    level++;
  }
  return level;
}

module.exports = {
  splitOutCommand,
  randomNumber,
  sleep,
  firstToUpper,
  xpToLevel,
  levelToXp,
  kFormatter
}