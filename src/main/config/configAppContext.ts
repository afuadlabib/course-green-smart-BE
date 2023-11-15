import express, { Express } from "express";
import Routes from "../routes/routes";
import UserRouter from "../routes/userRouter";
import AuthController from "../controllers/authController";
import AuthRouter from "../routes/users/authRouter";
import TeacherController from "../controllers/teacherController";
import TeacherRouter from "../routes/users/teacherRouter";
import StudentRouter from "../routes/users/studentsRouter";
import StudentController from "../controllers/studentController";
import AuthorRouter from "../routes/users/authorRouter";
import AuthorController from "../controllers/authorController";

export default class AppContext {
    static app: Express = express();

    static port: number = parseInt(`${<string>process.env.PORT}`);

    static userServiceUrl: string = `${<string>process.env.USERSERVICE_URL}`;

    public static createRoutes(): Routes {
        return new Routes();
    }

    public static createServiceRouter(): UserRouter {
        return new UserRouter();
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

    public static createStudentRouter(): StudentRouter{
        return new StudentRouter();
    }

    public static createStudentController(): StudentController{
        return new StudentController();
    }

    public static createAuthorController(): AuthorController{
        return new AuthorController();
    }

    public static createAuthorRouter(): AuthorRouter {
        return new AuthorRouter();
    }

}

