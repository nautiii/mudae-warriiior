const { Client, Intents } = require('discord.js-selfbot-v13');

const dotenv = require('dotenv');

dotenv.config();

console.log(Intents);

const warrior = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    // Intents.FLAGS.GUILD_MESSAGES,
    // Intents.FLAGS.GUILD_MEMBERS,
    // Intents.FLAGS.MESSAGE_CONTENT,
  ],
});

warrior.on('ready', async () => {
  console.log(`${warrior.user.username} is ready!`);
})

warrior.login(process.env.DISCORD_TOKEN)
  .catch((reason) => console.error(reason));
