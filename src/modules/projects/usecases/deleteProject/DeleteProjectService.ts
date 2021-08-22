import { AppError } from "../../../../shared/errors/AppError";
import { ProjectRepository } from "../../repositories/implementations/ProjectRepository";

class DeleteProjectService {

    constructor(private repository: ProjectRepository) { }
    async execute(id: string): Promise<void> {
        const project = await this.repository.findById(id);

        if(!project) {
            throw new AppError("Project not found", 404);
        }

        await this.repository.deleteProject(project);
    }
}
export { DeleteProjectService }