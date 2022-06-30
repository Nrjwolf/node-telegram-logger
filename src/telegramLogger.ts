import * as telegram from "./telegram"

export default class TelegramLogger {
    private _botToken: string
    private logChat: string
    messagePrefix: string

    constructor(botToken: string, logChat: string, messagePrefix: string = '') {
        this._botToken = botToken
        this.logChat = logChat
        this.messagePrefix = messagePrefix
        telegram.init(this._botToken)
    }

    /**
     * A simple method for testing your bot's authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.
     * @returns User
     */
    async getMe() {
        try {
            return await telegram.getMe()
        }
        catch (err) {
            if (err instanceof Error)
                console.error(err)
        }
    }

    /**
     *  Use this method to send text messages. On success, the sent Message is returned.
     *  Also, you can use formatation options https://core.telegram.org/bots/api#formatting-options
     * @param text any text you want to log
     * @returns 
     */
    async sendMessage(text: string, parse_mode: 'markdown' | 'HTML' = 'HTML') {
        try {
            const formatedText = `${this.messagePrefix} ${text}`
            return await telegram.sendMessage(formatedText, this.logChat, parse_mode)
        }
        catch (err) {
            if (err instanceof Error)
                console.error(err)
        }
    }
}