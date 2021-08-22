import { AppError } from "../../../../shared/errors/AppError";
import { Project } from "../../entities/Project";
import { ProjectRepository } from "../../repositories/implementations/ProjectRepository";

import { UpdateProjectService } from "./UpdateProjectService"

let updateProjectService: UpdateProjectService;
let projectRepository: ProjectRepository;

describe("Update Project", () => {

    beforeAll(() => {
        projectRepository = ProjectRepository.getInstance();
        updateProjectService = new UpdateProjectService(projectRepository);
    })

    it("Should be able to update a project", async () => {
        const project: Project = {
            id: "1",
            title: "New Project",
            tasks: ["New tasks"]
        };

        await projectRepository.create(project);

        const updatedProject = await updateProjectService.execute({
            id: project.id,
            title: "new project title"
        });

        expect(updatedProject.title).toBe("new project title");

    })
    
    it("Should no be able to update a nonexistent project", () => {
        expect(async () => {
            await updateProjectService.execute({
                id: "12",
                title: "new project title"
            });
        }).rejects.toBeInstanceOf(AppError)
    })
})