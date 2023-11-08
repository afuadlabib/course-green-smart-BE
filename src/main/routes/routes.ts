import { Router } from "express";
import ConfigAppContext from "../config/configAppContext";
import UserRouter from "./userRouter";

export default class Routes {
    private router: Router = Router();

    private userRouter : UserRouter = ConfigAppContext.createUserRouter();

    public useRouter() {
        return  this.router
        .use("/users", this.userRouter.useRouter())
    }
};