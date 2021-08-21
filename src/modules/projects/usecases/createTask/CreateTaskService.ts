import { AppError } from "../../../../shared/errors/AppError";
import { Project } from "../../entities/Project";
import { ProjectReposity } from "../../repositories/implementations/ProjectReposity";

interface IRequest {
    id: string;
    title: string;
}

class CreateTaskService {

    constructor(private repository: ProjectReposity) { }

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