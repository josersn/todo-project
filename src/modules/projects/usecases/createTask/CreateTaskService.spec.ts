import { AppError } from "../../../../shared/errors/AppError";
import { Project } from "../../entities/Project";
import { ProjectRepository } from "../../repositories/implementations/ProjectRepository";

import { CreateTaskService } from "./CreateTaskService"

let createTaskService: CreateTaskService;
let projectRepository: ProjectRepository;

describe("Create Task", () => {

    beforeAll(() => {
        projectRepository = ProjectRepository.getInstance()
        createTaskService = new CreateTaskService(projectRepository);
    })

    it("Should be able create a new tasks", async () => {
        const project: Project = {
            id: "1",
            title: "New Project"
        };

        await projectRepository.create(project);

        const updatedProject = await createTaskService.execute({
            project,
            title: "New tasks"
        });

        expect(updatedProject.tasks).toEqual(["New tasks"]);
    })

    it("Should no be able to create a task in nonexistent project", () => {
        expect(async () => {

            const project: Project = {
                id: "1",
                title: "New Project"
            };
            await createTaskService.execute({
                project,
                title: "New tasks"
            });
        }).rejects.toBeInstanceOf(AppError);

    })
})