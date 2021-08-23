import { Project } from "../../entities/Project";
import { ProjectRepository } from "../../repositories/implementations/ProjectRepository";


interface IRequest {
    project: Project;
    title: string;
}

class CreateTaskService {

    constructor(private repository: ProjectRepository) { }

    async execute({ project, title }: IRequest): Promise<Project> {
        
        const updatedProject = await this.repository.createTask({ title, project });

        return updatedProject;

    }
}

export { CreateTaskService }