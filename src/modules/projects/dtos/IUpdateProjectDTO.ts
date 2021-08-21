import { Project } from "../entities/Project";

interface IUpdateProjectDTO {
    project: Project;
    title: string;
}

export { IUpdateProjectDTO }