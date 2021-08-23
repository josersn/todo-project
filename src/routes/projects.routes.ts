import { Response, Router, Request, request, response } from "express";
import { CountRequest } from "../shared/infra/http/middlewares/countRequest";
import { ensureProject } from "../shared/infra/http/middlewares/ensureProject";
import { createProjectController } from "../modules/projects/useCases/createProject";
import { createTaskController } from "../modules/projects/useCases/createTask";
import { deleteProjectControlller } from "../modules/projects/useCases/deleteProject";
import { listProjectsController } from "../modules/projects/useCases/listProjects";
import { updateProjectController } from "../modules/projects/useCases/updateProject";

const projectsRoutes = Router();

projectsRoutes.post("/", CountRequest.counterRequest, (req: Request, res: Response) => {
    return createProjectController.handle(req, res);
})

projectsRoutes.get("/", CountRequest.counterRequest, (req: Request, res: Response) => {
    return listProjectsController.handle(req, res);
});

projectsRoutes.put("/:id", CountRequest.counterRequest, ensureProject, (req: Request, res: Response) => {
    return updateProjectController.handle(req, res);
});

projectsRoutes.delete("/:id", CountRequest.counterRequest, ensureProject, (req: Request, res: Response) => {
    return deleteProjectControlller.handle(req, res);
});

projectsRoutes.post("/:id/tasks", CountRequest.counterRequest, ensureProject, (req: Request, res: Response) => {
    return createTaskController.handle(req, res);
});

export { projectsRoutes };