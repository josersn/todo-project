import { NextFunction, Response, Request } from "express";
import { ProjectRepository } from "../modules/projects/repositories/implementations/ProjectRepository";
import { AppError } from "../shared/errors/AppError";

export async function ensureProject(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.params;
    
    const projectRepository = ProjectRepository.getInstance();
    
    const project = await projectRepository.findById(id);
    
    if(!project) {
        throw new AppError("Project not found", 404);
    }
    
    req.project = project;
    
    next();

}