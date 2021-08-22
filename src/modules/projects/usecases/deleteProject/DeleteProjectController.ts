import { Request, Response } from "express";
import { DeleteProjectService } from "./DeleteProjectService";

class DeleteProjectController {

    constructor(private service: DeleteProjectService) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        await this.service.execute(id);

        return res.status(204).send()
    }
}

export { DeleteProjectController };