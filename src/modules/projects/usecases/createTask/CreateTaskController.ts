import { Request, Response } from "express";
import { CreateTaskService } from "./CreateTaskService";

class CreateTaskController {

    constructor(private service: CreateTaskService) { }

    async handle(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;
        const { title } = req.body

        const project = await this.service.execute({ id, title });

        return res.status(201).json(project);
    }
}

export { CreateTaskController }