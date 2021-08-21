import { CreateProjectService } from "./CreateProjectService";

let createProjectService: CreateProjectService;

describe("Create Project", () => {

    beforeAll(() => {
        createProjectService = new CreateProjectService();
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