import { Router } from "express";
import AppContext from "../config/configAppContext";
import UserRouter from "./userRouter";
import { configDotenv } from "dotenv";
configDotenv();

export default class Routes {
    private router: Router = Router();

    private userRouter: UserRouter = AppContext.createServiceRouter();

    public useRouter() {
        return this.router
            .use("/user-services", this.userRouter.useRouter())

    }
};