import express, { Express, Router } from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import { Request, Response } from "express";
import AppContext from "./config/configAppContext";
import { ServerResponse, IncomingMessage, Server } from "http";
import { platform } from "os";
import Routes from "./routes/routes";

export default class AppServer {
    private static app: Express = AppContext.app;

    private static port: number = AppContext.port;

    private static routes: Routes = AppContext.createRoutes();

    public static run(): Server<typeof IncomingMessage, typeof ServerResponse> {
        return this.app
            .use(cors())
            .use(morgan("dev"))
            .use(bodyParser.urlencoded({ extended: true }))
            .use(express.json({ limit: "3MB" }))
            .get("/", (req: Request, res: Response) => {
                res.status(200).send("Welcome To Orcestrator");
            })
            .use("/api/v1", this.routes.useRouter())
            .listen(this.port, (): void => {
                console.log(`[${new Date()}]: Server ${platform} Running Port ${this.port}`);
            });
    }
}
