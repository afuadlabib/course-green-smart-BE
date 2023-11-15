import { Router } from "express";
import AppContext from "../config/configAppContext";
import AuthRouter from "./users/authRouter";
import TeacherRouter from "./users/teacherRouter";
import AuthorRouter from "./users/authorRouter";
import StudentRouter from "./users/studentsRouter";

export default class UserRouter {
    private router: Router = Router();

    private authRouter: AuthRouter = AppContext.createAuthRouter();

    private teacherRouter: TeacherRouter = AppContext.createTeacherRouter();

    private authorRouter: AuthorRouter = AppContext.createAuthorRouter();

    private studentRouter: StudentRouter = AppContext.createStudentRouter();

    public useRouter() {
        
        return this.router
            .use("/auths", this.authRouter.useRouter())

            .use("/teachers", this.teacherRouter.useRouter())

            .use("/students", this.studentRouter.useRouter())

            .use("/authors", this.authorRouter.useRouter())
    }
}