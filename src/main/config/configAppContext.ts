import express, {Express} from "express";
import Routes from "../routes/routes";
import UserService from "../services/userService";
import UserRouter from "../routes/userRouter";
import UserController from "../controllers/userController";


export default class ConfigAppContext{
    static app: Express = express();

    static port: number = parseInt(<string> process.env.PORT);

    static userServiceUrl: string = <string> process.env.USERSERVICE_URL;

    public static createRoutes(): Routes{
        return new Routes()
    }

    public static createUserRouter(): UserRouter {
        return new UserRouter()
    }

    public static createUserController(): UserController{
        return new UserController()
    }

    public static createUserService(): UserService{
        return new UserService()
    }
}