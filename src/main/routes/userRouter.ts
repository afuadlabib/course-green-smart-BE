import { Application, Router } from "express";
import ConfigAppContext from "../config/configAppContext";
import UserController from "../controllers/userController";


export default class UserRouter {
    private router = Router();

    private userController = ConfigAppContext.createUserController()

    public useRouter(){
        return this.router.get("/", this.userController.find)
    }
}