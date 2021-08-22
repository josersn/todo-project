import { ICreateProjectDTO } from "../../dtos/ICreateProjectDTO";
import { ICreateTaskDTO } from "../../dtos/ICreateTaskDTO";
import { IUpdateProjectDTO } from "../../dtos/IUpdateProjectDTO";
import { Project } from "../../entities/Project";
import { IProjectRepository } from "../IProjectRepository";

class ProjectRepository implements IProjectRepository {

    projects: Project[] = [];
    private static INSTANCE: ProjectRepository;

    private constructor() {
        this.projects = []
    }

    public static getInstance(): ProjectRepository {
        if (!ProjectRepository.INSTANCE) {
            ProjectRepository.INSTANCE = new ProjectRepository()
        }

        return ProjectRepository.INSTANCE;
    }

    async create({ id, tasks = [], title }: ICreateProjectDTO): Promise<Project> {
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

    async createTask({ title, project }: ICreateTaskDTO): Promise<Project> {
        const index = this.projects.indexOf(project);

        const projectToUpdate = this.projects[index];

        projectToUpdate.tasks.push(title);

        return projectToUpdate;
    }
}

export { ProjectRepository }