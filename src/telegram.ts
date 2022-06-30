import { Message, User } from './telegramTypes'
import { get, post } from './utils/request'

var token = ''
export const init = async (_token: string) => {
    token = _token
}

/**
 * A simple method for testing your bot's authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.
 * https://core.telegram.org/bots/api#getme
 * @returns User
 */
export const getMe = async (): Promise<User> => {
    return await get(`https://api.telegram.org/bot${token}/getMe`)
}

/**
 * Use this method to send text messages. On success, the sent Message is returned.
 * https://core.telegram.org/bots/api#sendmessage
 * @param text Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param chat_id Text of the message to be sent, 1-4096 characters after entities parsing
 * @returns 
 */
export const sendMessage = async (text: string, chat_id: string, parse_mode: 'markdown' | 'HTML'): Promise<Message> => {
    return await post(`https://api.telegram.org/bot${token}/sendMessage`, {
        text: text,
        chat_id: chat_id,
        parse_mode: parse_mode,
    })
}