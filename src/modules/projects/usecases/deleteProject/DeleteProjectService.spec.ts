import { AppError } from "../../../../shared/errors/AppError";
import { Project } from "../../entities/Project";
import { ProjectReposity } from "../../repositories/implementations/ProjectReposity";
import { DeleteProjectService } from "./DeleteProjectService"

let deleteProjectService: DeleteProjectService;
let projectRepository: ProjectReposity;

describe("Delete Project", () => {

    beforeAll(() => {
        projectRepository = new ProjectReposity();
        deleteProjectService = new DeleteProjectService(projectRepository);
    });

    it("Should be able to delete a project", async () => {
        const project: Project = {
            id: "uuid-1",
            title: "Project Test",
            tasks: []
        }

        await projectRepository.create(project);

        await deleteProjectService.execute("uuid-1");

        const projects = await projectRepository.findProjects();

        expect(projects).toEqual([]);

    })

    it("Should not be able to delete a nonexistent project", async () => {

        expect(async () => {
            await deleteProjectService.execute("uuid-1");
        }).rejects.toBeInstanceOf(AppError);

    })
})