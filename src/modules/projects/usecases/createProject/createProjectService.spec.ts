import { AppError } from "../../../../shared/errors/AppError";
import { ProjectRepository } from "../../repositories/implementations/ProjectRepository";

import { CreateProjectService } from "./CreateProjectService";

let createProjectService: CreateProjectService;
let projectRepository: ProjectRepository;

describe("Create Project", () => {

    beforeAll(() => {
        projectRepository = ProjectRepository.getInstance();
        createProjectService = new CreateProjectService(projectRepository);
    })

    it("Should be able to create a new project", async () => {

        const project = {
            id: "uuid-1",
            title: "Project Test",
            tasks: []
        }

        const newProject = await createProjectService.execute(project);
        
        expect(newProject).toHaveProperty("created_at");

    })

    it("Should not be able to create a new project with an exists name project", async () => {
        expect(async () => {
            const project = {
                id: "uuid-1",
                title: "Project Test",
                tasks: []
            }
    
            const firstProject = await createProjectService.execute(project);
            const secondProject = await createProjectService.execute(project);
        }).rejects.toBeInstanceOf(AppError)
    })

    it("Should not be able to create a new project with an exists id project", async () => {
        expect(async () => {
            const project = {
                id: "uuid-1",
                title: "Project Test",
                tasks: []
            }
    
            const firstProject = await createProjectService.execute(project);
            const secondProject = await createProjectService.execute(project);
        }).rejects.toBeInstanceOf(AppError)
    })
});