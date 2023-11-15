import { Request, Response } from "express";
import axios from "axios";
import AppContext from "../config/configAppContext";


export default class AuthController {

    public async find(req: Request, res: Response) {
        try {
            const { data, status } = await axios({
                url: AppContext.userServiceUrl + "/auths",
                headers: {
                    Authorization: req.headers.authorization
                }
            });
            return res.status(status).json(data)
        } catch (error: any) {
            const { status, data } = error?.response
            return res.status(status).json(data);
        }
    }

    public async findById(req: Request, res: Response) {
        try {
            const { data, status } = await axios({
                url: `${AppContext.userServiceUrl}/auths/${req.params.id}`,
                headers: {
                    Authorization: req.headers.authorization
                }
            });
            return res.status(status).json(data)
        } catch (error: any) {
            const { status, data } = error?.response
            return res.status(status).json(data);
        }
    }

    public async register(req: Request, res: Response) {
        try {
            const { data, status } = await axios({
                method: "post",
                url: `${AppContext.userServiceUrl}/auths/register`,
                data: req.body
            })
            return res.status(status).json(data)
        } catch (error: any) {
            const { status, data } = error?.response
            return res.status(status).json(data);
        }
    }

    public async refreshToken(req: Request, res: Response) {
        try {
            const { data, status } = await axios({
                url: `${AppContext.userServiceUrl}/isMe`,
                headers: {
                    Authorization: req.headers.authorization
                }
            })
            return res.status(status).json(data)
        } catch (error: any) {
            const { status, data } = error?.response
            return res.status(status).json(data);
        }
    }

    public async login(req: Request, res: Response) {
        try {
            const { data, status } = await axios({
                method: "post",
                url: `${AppContext.userServiceUrl}/auths/login`,
                data: req.body
            })
            return res.status(status).json(data)
        } catch (error: any) {
            const { status, data } = error?.response
            return res.status(status).json(data);
        }
    }
}