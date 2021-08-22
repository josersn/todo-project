import { Request, Response } from "express";
import { CreateProjectService } from "./CreateProjectService";

class CreateProjectController {

    constructor(private service: CreateProjectService) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { id, title } = req.body;

        const project = await this.service.execute({
            id,
            title
        });

        return res.status(201).json(project);

    }
}

export { CreateProjectController };