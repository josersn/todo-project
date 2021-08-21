import { ICreateProjectDTO } from "../../dtos/ICreateProjectDTO";
import { Project } from "../../entities/Project";
import { IProjectRepository } from "../IProjectRepository";

class ProjectReposity implements IProjectRepository {

    projects: Project[] = [];

    async create({ id, tasks, title }: ICreateProjectDTO): Promise<Project> {
        const project = new Project();

        Object.assign(project, {
            id,
            tasks,
            title,
            created_at: new Date()
        })

        this.projects.push(project);

        return project;
    }

    async findByName(title: string): Promise<Project> {
        return this.projects.find((item) => item.title === title);
    }

    async findById(id: string): Promise<Project> {
        return this.projects.find((item) => item.id === id);
    }
}

export { ProjectReposity }