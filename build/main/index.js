"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppServer_1 = __importDefault(require("./AppServer"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.configDotenv)();
AppServer_1.default.run();
