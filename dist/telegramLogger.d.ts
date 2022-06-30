export default class TelegramLogger {
    private _botToken;
    private logChat;
    messagePrefix: string;
    constructor(botToken: string, logChat: string, messagePrefix?: string);
    /**
     * A simple method for testing your bot's authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.
     * @returns User
     */
    getMe(): Promise<import("./telegramTypes").User | undefined>;
    /**
     *  Use this method to send text messages. On success, the sent Message is returned.
     *  Also, you can use formatation options https://core.telegram.org/bots/api#formatting-options
     * @param text any text you want to log
     * @returns
     */
    sendMessage(text: string, parse_mode?: 'markdown' | 'HTML'): Promise<import("./telegramTypes").Message | undefined>;
}
//# sourceMappingURL=telegramLogger.d.ts.map