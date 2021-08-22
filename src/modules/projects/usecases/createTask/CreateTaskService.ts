import { AppError } from "../../../../shared/errors/AppError";
import { Project } from "../../entities/Project";
import { ProjectRepository } from "../../repositories/implementations/ProjectRepository";


interface IRequest {
    id: string;
    title: string;
}

class CreateTaskService {

    constructor(private repository: ProjectRepository) { }

    async execute({ id, title }: IRequest): Promise<Project> {
        const project = await this.repository.findById(id);
    
        if (!project) {
            throw new AppError("Project not found", 404);
        }

        const updatedProject = await this.repository.createTask({ title, project });

        return updatedProject;

    }
}

export { CreateTaskService }