import { ICreateProjectDTO } from "../../dtos/ICreateProjectDTO";
import { IUpdateProjectDTO } from "../../dtos/IUpdateProjectDTO";
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

    async findProjects(): Promise<Project[]> {
        return this.projects;
    }

    async updateProject({ project, title }: IUpdateProjectDTO): Promise<Project> {
        const index = this.projects.indexOf(project);

        this.projects[index].title = title;

        return this.projects[index];

    }

    async deleteProject(project: Project): Promise<void> {
        const index = this.projects.indexOf(project);

        this.projects.splice(index, 1);
    }
}

export { ProjectReposity }