import { Request, Response } from "express";
import { ListProjectsService } from "./ListProjectsService";


class ListProjectsController {

    constructor(private service: ListProjectsService) {}

    async handle(req: Request, res: Response): Promise<Response> {

        const projects = await this.service.execute();

        return res.status(201).json(projects);
    }
}

export { ListProjectsController };
