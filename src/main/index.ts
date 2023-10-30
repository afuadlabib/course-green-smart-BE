import express, { Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import routerRoot from './routers/router.root'
import { Request, Response } from "express";
import { connectDB } from './config/db.config';

dotenv.config()
connectDB()

const app: Express = express();
const port: number = parseInt(<string> process.env.PORT);

if (process.env.DEV === "true") {
    app.use("/", (req: Request, res: Response, next: Function): void => {
        res.set("Access-Control-Allow-Origin", "*");
        res.set(
            "Access-Control-Allow-Methods",
            "GET, POST, OPTIONS, HEAD, PATCH, DELETE"
        );
        res.set(
            "Access-Control-Allow-Headers",
            "Authorization, Origin, X-Requested-With, Content-Type,  Accept, Develop-by, bb-token, User-Agent, "
        );
        res.set("Access-Control-Expose-Headers", "*");
        if (req.method.toLowerCase() === "options") {
            res.end("OKE");
        } else {
            next();
        }
    });
}

app
    .use(cors())
    .use(morgan("dev"))
    .use(bodyParser.urlencoded({extended: true}))
    .use(express.json({ limit: "3MB" }))
    .get("/", (req: Request, res: Response) =>{
        res.status(200).send("Welcome")
    })
    .use("/api/v1", routerRoot)
    .listen(port, (): void => {
        console.log(`Server Running Port: ${port}`);
    })

