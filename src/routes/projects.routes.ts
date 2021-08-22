import { Response, Router, Request, request, response } from "express";
import { createProjectController } from "../modules/projects/useCases/createProject";
import { deleteProjectControlller } from "../modules/projects/useCases/deleteProject";
import { listProjectsController } from "../modules/projects/useCases/listProjects";
import { updateProjectController } from "../modules/projects/useCases/updateProject";

const projectsRoutes = Router();

projectsRoutes.post("/", (req: Request, res: Response) => {
    return createProjectController.handle(req, res);
})

projectsRoutes.get("/", (req: Request, res: Response) => {
    return listProjectsController.handle(req, res);
});

projectsRoutes.put("/:id", (req: Request, res: Response) => {
    return updateProjectController.handle(req, res);
});

projectsRoutes.delete("/:id", (req: Request, res: Response) => {
    return deleteProjectControlller.handle(req, res);
});

export { projectsRoutes };