import { ICreateProjectDTO } from "../dtos/ICreateProjectDTO";

interface IProjectRepository {
    create(data: ICreateProjectDTO): Promise<void>
}

export { IProjectRepository }