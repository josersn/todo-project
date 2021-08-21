import { ICreateProjectDTO } from "../dtos/ICreateProjectDTO";
import { IUpdateProjectDTO } from "../dtos/IUpdateProjectDTO";
import { Project } from "../entities/Project";


interface IProjectRepository {
    create(data: ICreateProjectDTO): Promise<Project>
    findByName(title: string): Promise<Project>
    findById(id: string): Promise<Project>
    findProjects(): Promise<Project[]>
    updateProject({ project, title }: IUpdateProjectDTO): Promise<Project>
    deleteProject(project: Project): Promise<void>
}

export { IProjectRepository }