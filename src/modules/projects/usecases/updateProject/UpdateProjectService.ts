import { AppError } from "../../../../shared/errors/AppError";
import { Project } from "../../entities/Project";
import { IProjectRepository } from "../../repositories/IProjectRepository";

interface IRequest {
    project: Project;
    title: string;
}

class UpdateProjectService {

    constructor(private repository: IProjectRepository) { }

    async execute({ project, title }: IRequest): Promise<Project> {

        await this.repository.updateProject({ project, title });

        return project;
    }
}

export { UpdateProjectService }