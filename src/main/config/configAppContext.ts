import express, { Express } from "express";
import Routes from "../routes/routes";
import UserServiceRouter from "../routes/services/userServiceRouter";
import AuthController from "../controllers/authController";
import AuthRouter from "../routes/services/users/authRouter";
import TeacherController from "../controllers/teacherController";
import TeacherRouter from "../routes/services/users/teacherRouter";

export default class AppContext {
    static app: Express = express();

    static port: number = parseInt(<string>process.env.PORT);

    static userServiceUrl: string = <string>process.env.USERSERVICE_URL;

    public static createRoutes(): Routes {
        return new Routes();
    }

    public static createServiceRouter(): UserServiceRouter {
        return new UserServiceRouter();
    }
    public static createAuthRouter(): AuthRouter {
        return new AuthRouter();
    }

    public static createAuthController(): AuthController {
        return new AuthController();
    }

    public static createTeacherController(): TeacherController{
        return new TeacherController()
    }

    public static createTeacherRouter(): TeacherRouter{
        return new TeacherRouter()
    }

}

