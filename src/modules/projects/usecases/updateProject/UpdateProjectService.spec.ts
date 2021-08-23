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

    it("Should no be able to update a nonexistent project", () => {
        expect(async () => {

            const project: Project = {
                id: "1",
                title: "New Project",
                tasks: ["New tasks"]
            }; 
            await updateProjectService.execute({
                project,
                title: "new project title"
            });
        }).rejects.toBeInstanceOf(AppError)
    })
})