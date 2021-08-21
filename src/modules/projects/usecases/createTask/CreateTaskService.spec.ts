import { AppError } from "../../../../shared/errors/AppError";
import { Project } from "../../entities/Project";
import { ProjectReposity } from "../../repositories/implementations/ProjectReposity";
import { CreateTaskService } from "./CreateTaskService"

let createTaskService: CreateTaskService;
let projectRepository: ProjectReposity;

describe("Create Task", () => {

    beforeAll(() => {
        projectRepository = new ProjectReposity()
        createTaskService = new CreateTaskService(projectRepository);
    })

    it("Should be able create a new tasks", async () => {
        const project: Project = {
            id: "1",
            title: "New Project"
        };

        await projectRepository.create(project);

        const updatedProject = await createTaskService.execute({
            id: project.id,
            title: "New tasks"
        });

        expect(updatedProject.tasks).toEqual(["New tasks"]);
    })

    it("Should no be able to create a task in nonexistent project", () => {
        expect(async () => {
            await createTaskService.execute({
                id: "18",
                title: "New tasks"
            });
        }).rejects.toBeInstanceOf(AppError);

    })
})