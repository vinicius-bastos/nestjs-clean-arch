import { PartialType } from '@nestjs/mapped-types';

class _ChangeProjectDto {
  name: string;

  description: string;

  forecasted_at: Date | null;
}

export class ChangeProjectDto extends PartialType(_ChangeProjectDto) {}
