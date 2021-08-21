import { IProjectRepository } from "../../repositories/IProjectRepository";

interface IRequest {
    id: string;
    title: string;
    tasks: string[];
}

class CreateProjectService {

    constructor(private repository: IProjectRepository ) {}

    async execute({ id, title, tasks }: IRequest): Promise<void> { }
}

export { CreateProjectService }