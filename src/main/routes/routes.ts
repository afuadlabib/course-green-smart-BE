import { Router } from "express";
import AppContext from "../config/configAppContext";
import UserServiceRouter from "./services/userServiceRouter";

export default class Routes {
    private router: Router = Router();

    private userRouter: UserServiceRouter = AppContext.createServiceRouter();

    public useRouter() {
        return this.router
            .use("/user-services", this.userRouter.useRouter())
    }
};