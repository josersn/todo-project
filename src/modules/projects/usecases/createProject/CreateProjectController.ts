import { Request, Response } from "express";
import { ProjectReposity } from "../../repositories/implementations/ProjectReposity";
import { CreateProjectService } from "./CreateProjectService";

class CreateProjectController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id, title } = req.body;

        const repository = new ProjectReposity()
        const service = new CreateProjectService(repository);

        const project = await service.execute({
            id,
            title
        })

        return res.status(201).json(project);
    }
}

export { CreateProjectController };