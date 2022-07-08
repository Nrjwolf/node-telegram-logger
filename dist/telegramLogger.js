"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const telegram = __importStar(require("./telegram"));
class TelegramLogger {
    constructor(botToken, logChat, messagePrefix = '') {
        this._botToken = botToken;
        this.logChat = logChat;
        this.messagePrefix = messagePrefix;
        telegram.init(this._botToken);
    }
    /**
     * A simple method for testing your bot's authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.
     * @returns User
     */
    getMe() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield telegram.getMe();
            }
            catch (err) {
                if (err instanceof Error)
                    console.error(err);
            }
        });
    }
    /**
     *  Use this method to send text messages. On success, the sent Message is returned.
     *  Also, you can use formatation options https://core.telegram.org/bots/api#formatting-options
     * @param text any text you want to log
     * @returns
     */
    sendMessage(text, parse_mode = 'HTML') {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const formatedText = `${this.messagePrefix}${text}`;
                return yield telegram.sendMessage(formatedText, this.logChat, parse_mode);
            }
            catch (err) {
                if (err instanceof Error)
                    console.error(err);
            }
        });
    }
}
exports.default = TelegramLogger;
//# sourceMappingURL=telegramLogger.js.map