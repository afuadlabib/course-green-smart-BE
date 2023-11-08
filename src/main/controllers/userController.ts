import UserService from "../services/userService";
import { Request, Response } from "express";

export default class UserController{

    public async find(req: Request, res: Response){
        
        const data = await UserService.find(req, res)
        return res.status(200).json(data)
    }
}