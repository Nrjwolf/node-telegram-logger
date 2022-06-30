import { Message, User } from './telegramTypes';
export declare const init: (_token: string) => Promise<void>;
/**
 * A simple method for testing your bot's authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.
 * https://core.telegram.org/bots/api#getme
 * @returns User
 */
export declare const getMe: () => Promise<User>;
/**
 * Use this method to send text messages. On success, the sent Message is returned.
 * https://core.telegram.org/bots/api#sendmessage
 * @param text Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param chat_id Text of the message to be sent, 1-4096 characters after entities parsing
 * @returns
 */
export declare const sendMessage: (text: string, chat_id: string, parse_mode: 'markdown' | 'HTML') => Promise<Message>;
//# sourceMappingURL=telegram.d.ts.map