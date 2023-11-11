import { Router } from "express";
import AppContext from "../../../config/configAppContext";
import TeacherController from "../../../controllers/teacherController";


export default class TeacherRouter {
    private router: Router = Router();

    private teacherController: TeacherController = AppContext.createTeacherController();

    public useRouter() {
        return this.router

            .get("/", this.teacherController.find)

            .post("/", this.teacherController.create)

            .get("/:id", this.teacherController.findById)

            .put("/:id", this.teacherController.update)

            .delete("/:id", this.teacherController.delete)




    }
}