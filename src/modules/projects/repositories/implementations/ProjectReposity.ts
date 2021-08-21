import { ICreateProjectDTO } from "../../dtos/ICreateProjectDTO";
import { Project } from "../../entities/Project";
import { IProjectRepository } from "../IProjectRepository";

class ProjectReposity implements IProjectRepository {

    projects: Project[] = [];

    async create({ id, tasks, title }: ICreateProjectDTO): Promise<void> {
        const project = new Project();

        Object.assign(project, {
            id,
            tasks,
            title
        })

        this.projects.push(project);
    }
}

export { ProjectReposity }