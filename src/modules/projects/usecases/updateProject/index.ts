import { ProjectRepository } from "../../repositories/implementations/ProjectRepository";
import { UpdateProjectController } from "./UpdateProjectController";
import { UpdateProjectService } from "./UpdateProjectService";

const repository = ProjectRepository.getInstance();
const service = new UpdateProjectService(repository);
const updateProjectController = new UpdateProjectController(service);

export { updateProjectController }
