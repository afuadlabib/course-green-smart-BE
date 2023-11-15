import { Router } from "express";
import AppContext from "../../config/configAppContext";
import AuthorController from "../../controllers/authorController";

export default class AuthorRouter{

    private router: Router = Router();

    private authorController: AuthorController = AppContext.createAuthorController();

    public useRouter() {
        return this.router

            .get("/", this.authorController.find)

            .post("/", this.authorController.create)

            .get("/:id", this.authorController.findById)

            .put("/:id", this.authorController.update)

            .delete("/:id", this.authorController.delete)




    }
}