import { ProjectReposity } from "../../repositories/implementations/ProjectReposity";
import { ListProjectsService } from "./ListProjectsService"

let listProjectsService: ListProjectsService;
let projectReposity: ProjectReposity;

describe("List Project", () => {

    beforeAll(() => {
        projectReposity = new ProjectReposity();
        listProjectsService = new ListProjectsService(projectReposity);
    })

    it("Should be able to list a projects", async () => {
        const project = await projectReposity.create({
            id: "1",
            title: "Novo projeto",
            tasks: []
        });

        const projects = await listProjectsService.execute();

        
        expect(projects).toEqual([project]);
    })
})