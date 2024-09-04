import { Inject, Injectable } from '@nestjs/common';
import { IProjectRepository } from '../project.repository';
import { ChangeProjectDto } from '../dto/change-project.dto';

@Injectable()
export class ChangeProjectUseCase {
  constructor(
    @Inject('IProjectRepository')
    private readonly projectRepo: IProjectRepository,
  ) {}

  async execute(id: string, input: ChangeProjectDto) {
    const project = await this.projectRepo.findById(id);
    project.changeName(input.name);
    project.changeDescription(input.description);
    project.changeForecastedDate(input.forecasted_at);
    await this.projectRepo.update(project);
    return project;
  }
}
