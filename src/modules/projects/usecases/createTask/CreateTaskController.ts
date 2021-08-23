import { Request, Response } from "express";
import { CreateTaskService } from "./CreateTaskService";

class CreateTaskController {

    constructor(private service: CreateTaskService) { }

    async handle(req: Request, res: Response): Promise<Response> {

        const { title } = req.body
        const project = req.project
        
        const projectUpdated = await this.service.execute({ project, title });

        return res.status(201).json(projectUpdated);
    }
}

export { CreateTaskController }