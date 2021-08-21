
interface IRequest {
    id: string;
    title: string;
    tasks: string[];
}

class CreateProjectService {

    async execute({ id, title, tasks }: IRequest): Promise<void> { }
}

export { CreateProjectService }