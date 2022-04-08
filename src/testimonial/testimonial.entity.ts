import { Startup } from './../startup/startup.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Testimonial {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clientName: string;

  @Column()
  review: string;

  @Column({ nullable: false })
  startupId: number;

  @ManyToOne(() => Startup, (startup) => startup.member, {
    onDelete: 'CASCADE',
  })
  startup: Startup;
}
