import { Request, Response } from "express";
import { DeleteProjectService } from "./DeleteProjectService";

class DeleteProjectController {

    constructor(private service: DeleteProjectService) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const project = req.project

        await this.service.execute(project);

        return res.status(204).send()
    }
}

export { DeleteProjectController };