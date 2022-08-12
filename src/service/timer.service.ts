import * as cron from 'node-cron';
import 'dotenv/config';
import { Message } from 'discord.js';
import api from '../api';
import { API } from '../types/api.interface';
import Messages from '../messages';

class TimerService {
  public drink(message: Message) {
    const timer = process.env.CRON_TIMER || '1 */3 * * *';
    // eslint-disable-next-line consistent-return
    cron.schedule(timer, async () => {
      const { datetime } = (await api.get<API>('/')).data;

      if (this.getHour(datetime) >= 8 && this.getHour(datetime) <= 23) {
        message.reply(this.getRandomMessage(Messages.messages()));
      }
    });
  }

  // eslint-disable-next-line class-methods-use-this
  private getHour(date: Date): number {
    return date.getHours();
  }

  // eslint-disable-next-line class-methods-use-this
  private getRandomMessage(messages: Array<string>): string {
    const index = Math.floor(Math.random() * (messages.length - 0 + 1)) + 0;

    return messages[index];
  }
}

export default TimerService;
