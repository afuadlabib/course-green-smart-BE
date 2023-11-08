"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("../routes/routes"));
const userService_1 = __importDefault(require("../services/userService"));
const userRouter_1 = __importDefault(require("../routes/userRouter"));
const userController_1 = __importDefault(require("../controllers/userController"));
class ConfigAppContext {
    static createRoutes() {
        return new routes_1.default();
    }
    static createUserRouter() {
        return new userRouter_1.default();
    }
    static createUserController() {
        return new userController_1.default();
    }
    static createUserService() {
        return new userService_1.default();
    }
}
ConfigAppContext.app = (0, express_1.default)();
ConfigAppContext.port = parseInt(process.env.PORT);
ConfigAppContext.userServiceUrl = process.env.USERSERVICE_URL;
exports.default = ConfigAppContext;
