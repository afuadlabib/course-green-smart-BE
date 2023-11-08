"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const configAppContext_1 = __importDefault(require("./config/configAppContext"));
const os_1 = require("os");
class AppServer {
    static run() {
        return this.app
            .use((0, cors_1.default)())
            .use((0, morgan_1.default)("dev"))
            .use(body_parser_1.default.urlencoded({ extended: true }))
            .use(express_1.default.json({ limit: "3MB" }))
            .get("/", (req, res) => {
            res.status(200).send("Welcome To Orcestrator");
        })
            .use("/api/v1", this.routes.useRouter())
            .listen(this.port, () => {
            console.log(`Server: ${os_1.platform} Running Port: ${this.port}`);
        });
    }
}
AppServer.app = configAppContext_1.default.app;
AppServer.port = configAppContext_1.default.port;
AppServer.routes = configAppContext_1.default.createRoutes();
exports.default = AppServer;
