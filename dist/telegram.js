"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = exports.getMe = exports.init = void 0;
const request_1 = require("./utils/request");
var token = '';
const init = (_token) => __awaiter(void 0, void 0, void 0, function* () {
    token = _token;
});
exports.init = init;
/**
 * A simple method for testing your bot's authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.
 * https://core.telegram.org/bots/api#getme
 * @returns User
 */
const getMe = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, request_1.get)(`https://api.telegram.org/bot${token}/getMe`);
});
exports.getMe = getMe;
/**
 * Use this method to send text messages. On success, the sent Message is returned.
 * https://core.telegram.org/bots/api#sendmessage
 * @param text Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param chat_id Text of the message to be sent, 1-4096 characters after entities parsing
 * @returns
 */
const sendMessage = (text, chat_id, parse_mode) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, request_1.post)(`https://api.telegram.org/bot${token}/sendMessage`, {
        text: text,
        chat_id: chat_id,
        parse_mode: parse_mode,
    });
});
exports.sendMessage = sendMessage;
//# sourceMappingURL=telegram.js.map