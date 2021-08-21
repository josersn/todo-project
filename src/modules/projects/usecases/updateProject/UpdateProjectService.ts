import { AppError } from "../../../../shared/errors/AppError";
import { Project } from "../../entities/Project";
import { IProjectRepository } from "../../repositories/IProjectRepository";

interface IRequest {
    id: string;
    title: string;
}

class UpdateProjectService {

    constructor(private repository: IProjectRepository) { }

    async execute({ id, title }: IRequest): Promise<Project> {
        const project = await this.repository.findById(id);

        if (!project) {
            throw new AppError("Project not found", 404);
        }

        await this.repository.updateProject({ project, title });

        return project;
    }
}

export { UpdateProjectService }