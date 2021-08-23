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