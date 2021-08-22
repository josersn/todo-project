import { ProjectRepository } from "../../repositories/implementations/ProjectRepository";
import { CreateProjectController } from "./CreateProjectController";
import { CreateProjectService } from "./CreateProjectService";

const repository = ProjectRepository.getInstance();
const service = new CreateProjectService(repository);
const createProjectController = new CreateProjectController(service);


export { createProjectController };