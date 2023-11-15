import { Router } from "express";
import AppContext from "../../config/configAppContext";
import AuthController from "../../controllers/authController";


export default class AuthRouter {
    private router: Router = Router();

    private authController: AuthController = AppContext.createAuthController();

    public useRouter() {
        return this.router

            .post("/register", this.authController.register)

            .post("/login", this.authController.login)

            .get("/", this.authController.find)

            .get("/:id", this.authController.findById)

    }
}