import { Project } from "../entities/Project";

interface ICreateTaskDTO {
    project: Project;
    title: string;
}

export { ICreateTaskDTO }