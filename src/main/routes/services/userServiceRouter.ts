import { Application, Router } from "express";
import AppContext from "../../config/configAppContext";
import AuthController from "../../controllers/authController";
import AuthRouter from "./users/authRouter";
import TeacherRouter from "./users/teacherRouter";


export default class UserServiceRouter {
    private router: Router = Router();

    private authRouter: AuthRouter = AppContext.createAuthRouter();

    private teacherRouter: TeacherRouter = AppContext.createTeacherRouter()

    public useRouter() {
        return this.router
            .use("/auths", this.authRouter.useRouter())

            .use("/teachers", this.teacherRouter.useRouter())
    }
}