import { AppError } from "../../../../shared/errors/AppError";
import { Project } from "../../entities/Project";
import { IProjectRepository } from "../../repositories/IProjectRepository";

interface IRequest {
    id: string;
    title: string;
    tasks?: string[];
}

class CreateProjectService {

    constructor(private repository: IProjectRepository) { }

    async execute({ id, title, tasks = [] }: IRequest): Promise<Project> {

        const projectNameAlreadyExist = await this.repository.findByName(title);

        if (projectNameAlreadyExist) {
            throw new AppError("Project Already Exists");
        }

        const projectIdAlreadyExist = await this.repository.findById(id);

        if (projectIdAlreadyExist) {
            throw new AppError("Project Already Exists");
        }

        const project = await this.repository.create({ id, title, tasks });

        return project;
    }
}

export { CreateProjectService }