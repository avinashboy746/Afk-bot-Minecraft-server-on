const mineflayer = require('mineflayer');

const botNames = [
  'Rohit',
  'AllGaming',
  'OpGamer',
  'Ayush',
  'Abhay',
  'Satyam',
  'Shivam',
  'Mohit',
  'AjjuBhai',
  'AFKPlayer'
];

botNames.forEach((name, index) => {
  setTimeout(() => {
    createBot(name);
  }, index * 5000);
});

function createBot(username) {
  const bot = mineflayer.createBot({
    host: 'play.avinashboy.qzz.io',
    port: 25565,
    username: username,
    version: false
  });

  bot.on('login', () => {
    console.log(username + ' joined!');
  });

  bot.on('spawn', () => {
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => {
        bot.setControlState('jump', false);
      }, 1000);
    }, 30000);
  });

  bot.on('end', () => {
    setTimeout(() => createBot(username), 10000);
  });

  bot.on('error', (err) => {
    console.log(username + ': ' + err.message);
  });
}
