import { ProjectRepository } from "../../repositories/implementations/ProjectRepository";
import { ListProjectsController } from "./ListProjectsController";
import { ListProjectsService } from "./ListProjectsService";


const repository = ProjectRepository.getInstance();
const service = new ListProjectsService(repository);
const listProjectsController = new ListProjectsController(service);

export { listProjectsController };