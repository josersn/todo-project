import { Project } from "../../entities/Project";
import { IProjectRepository } from "../../repositories/IProjectRepository";

interface IRequest {
    id: string;
    title: string;
    tasks: string[];
}

class CreateProjectService {

    constructor(private repository: IProjectRepository) { }

    async execute({ id, title, tasks }: IRequest): Promise<Project> {
        const project = await this.repository.create({ id, title, tasks });

        return project;
    }
}

export { CreateProjectService }