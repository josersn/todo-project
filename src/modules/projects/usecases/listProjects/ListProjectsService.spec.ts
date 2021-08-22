
import { ProjectRepository } from "../../repositories/implementations/ProjectRepository";
import { ListProjectsService } from "./ListProjectsService"

let listProjectsService: ListProjectsService;
let projectRepository: ProjectRepository;

describe("List Project", () => {

    beforeAll(() => {
        projectRepository = ProjectRepository.getInstance();
        listProjectsService = new ListProjectsService(projectRepository);
    })

    it("Should be able to list a projects", async () => {
        const project = await projectRepository.create({
            id: "1",
            title: "Novo projeto",
            tasks: []
        });

        const projects = await listProjectsService.execute();

        
        expect(projects).toEqual([project]);
    })
})