import { Column, Entity, PrimaryColumn } from 'typeorm';

export enum ProjectStatus {
  PENDING = 'pending',
  ACTIVE = 'active',
  CANCELLED = 'cancelled',
  COMPLETED = 'completed',
}

@Entity()
export class Project {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ nullable: true, type: 'datetime' })
  started_at: Date | null;

  @Column({ nullable: true, type: 'datetime' })
  cancelled_at: Date | null;

  @Column({ nullable: true, type: 'datetime' })
  finished_at: Date | null;

  @Column({ nullable: true, type: 'datetime' })
  forecasted_at: Date | null;

  @Column({ type: 'simple-enum' })
  status: ProjectStatus = ProjectStatus.PENDING;

  constructor(
    props: {
      name: string;
      description: string;
      stardet_at?: Date | null;
      cancelled_at?: Date | null;
      forecasted_at?: Date | null;
    },
    id?: string,
  ) {
    Object.assign(this, props);
    this.id = id ?? crypto.randomUUID();
  }
}
