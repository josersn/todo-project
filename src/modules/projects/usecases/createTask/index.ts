import { ProjectRepository } from "../../repositories/implementations/ProjectRepository";
import { CreateTaskController } from "./CreateTaskController";
import { CreateTaskService } from "./CreateTaskService";

const repository = ProjectRepository.getInstance();
const service = new CreateTaskService(repository);
const createTaskController = new CreateTaskController(service);

export { createTaskController };