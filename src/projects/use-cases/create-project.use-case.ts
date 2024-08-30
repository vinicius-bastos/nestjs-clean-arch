import { CreateProjectDto } from '../dto/create-project.dto';
import { Project, ProjectStatus } from '../entities/project.entity';

export class CreateProjectUseCase {
  execute(input: CreateProjectDto) {
    const project = new Project(createProjectDto);
    if (createProjectDto.started_at) {
      project.status = ProjectStatus.ACTIVE;
    }
    return this.projectRepo.save(project);
  }
}
