import { Response, Router, Request, request, response } from "express";
import { createProjectController } from "../modules/projects/useCases/createProject";
import { listProjectsController } from "../modules/projects/useCases/listProjects";

const projectsRoutes = Router();

projectsRoutes.post("/", (req: Request, res: Response) => {
    return createProjectController.handle(req, res);
})
projectsRoutes.get("/", (req: Request, res: Response) => {
    return listProjectsController.handle(req, res);
});

export { projectsRoutes };