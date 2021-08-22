import { Router } from "express";
import { CreateProjectController } from "../modules/projects/useCases/createProject/CreateProjectController";

const projectsRoutes = Router();

const createProjectController = new CreateProjectController()

projectsRoutes.post("/", createProjectController.handle);

export { projectsRoutes };