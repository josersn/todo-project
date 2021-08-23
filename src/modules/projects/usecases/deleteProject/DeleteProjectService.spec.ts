import { AppError } from "../../../../shared/errors/AppError";
import { Project } from "../../entities/Project";
import { ProjectRepository } from "../../repositories/implementations/ProjectRepository";

import { DeleteProjectService } from "./DeleteProjectService"

let deleteProjectService: DeleteProjectService;
let projectRepository: ProjectRepository;

describe("Delete Project", () => {

    beforeAll(() => {
        projectRepository = ProjectRepository.getInstance();
        deleteProjectService = new DeleteProjectService(projectRepository);
    });

    it("Should be able to delete a project", async () => {
        const project: Project = {
            id: "uuid-1",
            title: "Project Test",
            tasks: []
        }

        await projectRepository.create(project);

        await deleteProjectService.execute(project);

        const projects = await projectRepository.findProjects();

        expect(projects).toEqual([]);

    })

    it("Should not be able to delete a nonexistent project", async () => {

        const project: Project = {
            id: "uuid-1",
            title: "Project Test",
            tasks: []
        }
        
        expect(async () => {
            await deleteProjectService.execute(project);
        }).rejects.toBeInstanceOf(AppError);

    })
})