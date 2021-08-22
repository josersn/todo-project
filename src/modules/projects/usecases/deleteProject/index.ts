import { ProjectRepository } from "../../repositories/implementations/ProjectRepository";
import { DeleteProjectController } from "./DeleteProjectController";
import { DeleteProjectService } from "./DeleteProjectService";

const repository = ProjectRepository.getInstance();
const service = new DeleteProjectService(repository);
const deleteProjectControlller = new DeleteProjectController(service);

export { deleteProjectControlller }
