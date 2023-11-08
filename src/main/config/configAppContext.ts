import express from "express";
import Routes from "../routes/routes";
import UserService from "../services/userService";
import UserRouter from "../routes/userRouter";
import UserController from "../controllers/userController";


export default class ConfigAppContext{
    static app = express();

    static port = parseInt(<string> process.env.PORT);

    static userServiceUrl = <string> process.env.USERSERVICE_URL;

    public static createRoutes(): Routes{
        return new Routes()
    }

    public static createUserRouter(){
        return new UserRouter()
    }

    public static createUserController(){
        return new UserController()
    }

    public static createUserService(){
        return new UserService()
    }
}