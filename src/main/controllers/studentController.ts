import { Request, Response } from "express";
import axios from "axios";
import AppContext from "../config/configAppContext";


export default class StudentController {

    public async find(req: Request, res: Response) {
        try {
            const { data, status } = await axios({
                url: AppContext.userServiceUrl + "/students",
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
                url: `${AppContext.userServiceUrl}/students/${req.params.id}`,
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

    public async create(req: Request, res: Response) {
        try {
            const { data, status } = await axios({
                method: "post",
                url: `${AppContext.userServiceUrl}/students`,
                data: req.body,
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

    public async update(req: Request, res: Response) {
        try {
            const { data, status } = await axios({
                method: "put",
                url: `${AppContext.userServiceUrl}/students/${req.params.id}`,
                data: req.body,
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
    public async delete(req: Request, res: Response) {
        try {
            const { data, status } = await axios({
                method: "delete",
                url: `${AppContext.userServiceUrl}/students/${req.params.id}`,
                data: req.body,
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
}