import { Project } from "../../entities/Project";
import { ProjectRepository } from "../../repositories/implementations/ProjectRepository";

class DeleteProjectService {

    constructor(private repository: ProjectRepository) { }
    async execute(project: Project): Promise<void> {

        await this.repository.deleteProject(project);
        
    }
}
export { DeleteProjectService }