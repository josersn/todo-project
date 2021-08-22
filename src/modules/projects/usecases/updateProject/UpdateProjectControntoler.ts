import { Request, Response } from "express";
import { UpdateProjectService } from "./UpdateProjectService";

class UpdateProjectController {

    constructor(private service: UpdateProjectService) { }

    async handle(req: Request, res: Response): Promise<Response> {

        const { title } = req.body
        const { id } = req.params;

        const updatedProject = await this.service.execute({ id, title });

        return res.status(201).json(updatedProject);
    }
}

export { UpdateProjectController }