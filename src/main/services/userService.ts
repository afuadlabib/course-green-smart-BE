import axios from "axios";
import ConfigAppContext from "../config/configAppContext";
import { Request, Response } from "express";
import { configDotenv } from "dotenv";

configDotenv()

export default class UserService{

    static async find( req: Request, res: Response){
        const { data } = await axios({url: ConfigAppContext.userServiceUrl})
        return data
    }
}