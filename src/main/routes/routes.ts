import { Router } from "express";
import ConfigAppContext from "../config/configAppContext";

export default class Routes {
    private router = Router();

    private userRouter = ConfigAppContext.createUserRouter();

    public useRouter() {
        return  this.router
        .use("/users", this.userRouter.useRouter())
    }
};