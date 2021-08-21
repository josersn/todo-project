import { Project } from "../../entities/Project";
import { IProjectRepository } from "../../repositories/IProjectRepository";

class ListProjectsService {

    constructor(private repository: IProjectRepository) { }

    async execute(): Promise<Project[]> {
        return await this.repository.findProjects();
    }
}

export { ListProjectsService }