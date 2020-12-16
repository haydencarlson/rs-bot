module.exports = {
  skill_data: {
    woodcutting: {
      icon: '<:Woodcutting:784545972386398248>',
      tools: [
        {
          name: 'Mithril Axe',
          delay: [1000, 2500]
        },
        {
          name: 'Rune Axe',
          delay: [500, 1000]
        },
        {
          name: 'Dragon Axe',
          delay: [0, 200]
        }
      ],
      rewards: [
        {
          name: 'Willow Log',
          delay: [250, 500],
          xp: 25
        },
        {
          name: 'Yew Log',
          delay: [500, 1000],
          xp: 50
        },
        {
          name: 'Magic Log',
          delay: [1000, 15000],
          xp: 75
        },
      ]
    }
  },
  command_to_skill: {
    mine: 'mining',
    chop: 'woodcutting',
    fish: 'fishing',
    steal: 'thieving',
    mix: 'herblore',
    run: 'agility',
    runecraft: 'runecrafting',
    hunt: 'hunter',
    cook: 'cooking',
    craft: 'crafting',
    fletch: 'fletching',
    smith: 'smithing',
    build: 'construction',
    pray: 'prayer',
    farm: 'farming',
    burn: 'firemaking'
  },
  prices: {

  },
  skills: [
    "attack", 
    "strength", 
    "defence", 
    "range", 
    "magic", 
    "prayer", 
    "hitpoint", 
    "runecrafting", 
    "construction", 
    "agility", 
    "thieving", 
    "herblore", 
    "crafting", 
    "fletching", 
    "slayer", 
    "hunter", 
    "mining", 
    "smithing", 
    "fishing", 
    "cooking", 
    "firemaking", 
    "woodcutting",  
    "farming"
  ],
  commands: []
};