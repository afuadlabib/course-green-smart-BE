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
const axios_1 = __importDefault(require("axios"));
const configAppContext_1 = __importDefault(require("../config/configAppContext"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.configDotenv)();
class UserService {
    static find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield (0, axios_1.default)({ url: configAppContext_1.default.userServiceUrl });
            return data;
        });
    }
}
exports.default = UserService;
