import { ICreateProjectDTO } from "../dtos/ICreateProjectDTO";
import { Project } from "../entities/Project";

interface IProjectRepository {
    create(data: ICreateProjectDTO): Promise<Project>
    findByName(title: string): Promise<Project>
    findById(id: string): Promise<Project>
}

export { IProjectRepository }