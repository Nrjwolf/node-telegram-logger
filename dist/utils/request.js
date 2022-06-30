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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.put = exports.del = exports.get = exports.post = void 0;
const axios_1 = __importDefault(require("axios"));
function post(url, body, options) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise(function (resolve, reject) {
            axios_1.default.post(url, body, options)
                .then(function (response) {
                // handle success
                resolve(response.data);
            })
                .catch(function (error) {
                var _a, _b;
                // handle error
                console.log(`Post :: ${error.toString()} — ${url}\nDescription : ${(_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error}`);
                reject(error);
            });
        });
    });
}
exports.post = post;
function get(url, options) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise(function (resolve, reject) {
            axios_1.default.get(url, options)
                .then(function (response) {
                // handle success
                resolve(response.data);
            })
                .catch(function (error) {
                var _a, _b;
                // handle error
                console.log(`Get :: ${error.toString()} — ${url}\nDescription : ${(_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error}`);
                reject(error);
            });
        });
    });
}
exports.get = get;
function del(url, options) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise(function (resolve, reject) {
            axios_1.default.delete(url, options)
                .then(function (response) {
                // handle success
                resolve(response.data);
            })
                .catch(function (error) {
                var _a, _b;
                // handle error
                console.log(`Delete :: ${error.toString()} — ${url}\nDescription : ${(_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error}`);
                reject(error);
            });
        });
    });
}
exports.del = del;
function put(url, body, options) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise(function (resolve, reject) {
            axios_1.default.put(url, body, options)
                .then(function (response) {
                // handle success
                resolve(response.data);
            })
                .catch(function (error) {
                var _a, _b;
                // handle error
                console.log(`Put :: ${error.toString()} — ${url}\nDescription : ${(_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error}`);
                reject(error);
            });
        });
    });
}
exports.put = put;
function patch(url, body, options) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise(function (resolve, reject) {
            axios_1.default.patch(url, body, options)
                .then(function (response) {
                // handle success
                resolve(response.data);
            })
                .catch(function (error) {
                // handle error
                var _a, _b;
                console.log(error);
                console.log(`Patch :: ${error.toString()} — ${url}\nDescription : ${(_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error}`);
                reject(error);
            });
        });
    });
}
exports.patch = patch;
//# sourceMappingURL=request.js.map