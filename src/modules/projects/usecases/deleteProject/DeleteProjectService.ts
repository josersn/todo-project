import { ProjectReposity } from "../../repositories/implementations/ProjectReposity";

class DeleteProjectService {

    constructor(private repository: ProjectReposity) { }
    async execute(id: string): Promise<void> {
        const project = await this.repository.findById(id);

        await this.repository.deleteProject(project);
    }
}
export { DeleteProjectService }