import { Client } from 'discord.js';
import * as dotenv from 'dotenv';
import myIntents from './config/myIntents';
import Service from './service/timer.service';

dotenv.config();
const client = new Client({ intents: myIntents });
let prefix: string;
client.on('ready', () => {
  prefix = process.env.PREFIX || '$water$';
  // eslint-disable-next-line no-console
  console.log('bot is running');
});

client.on('messageCreate', (message) => {
  if (message.content.includes(prefix)) {
    new Service().drink(message);
  }
});

client.login(process.env.TOKEN);
