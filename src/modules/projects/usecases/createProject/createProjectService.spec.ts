import { ProjectReposity } from "../../repositories/implementations/ProjectReposity";
import { CreateProjectService } from "./CreateProjectService";

let createProjectService: CreateProjectService;
let projectReposity: ProjectReposity;

describe("Create Project", () => {

    beforeAll(() => {
        projectReposity = new ProjectReposity()
        createProjectService = new CreateProjectService(projectReposity);
    })

    it("Should be able to create a new project", async () => {

        const project = {
            id: "uuid-1",
            title: "Project Test",
            tasks: []
        }

        await createProjectService.execute(project);
    })
});