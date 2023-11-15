import { Router } from "express";
import AppContext from "../../config/configAppContext";
import StudentController from "../../controllers/studentController";

export default class StudentRouter{

    private router: Router = Router();

    private studentController: StudentController = AppContext.createStudentController();

    public useRouter() {
        return this.router

            .get("/", this.studentController.find)

            .post("/", this.studentController.create)

            .get("/:id", this.studentController.findById)

            .put("/:id", this.studentController.update)

            .delete("/:id", this.studentController.delete)




    }
}