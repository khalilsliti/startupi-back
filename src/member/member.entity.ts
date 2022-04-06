import { Startup } from './../startup/startup.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  profileImage: string;

  @Column()
  position: string;

  @Column()
  saying: string;

  @Column({ nullable: true })
  linkedinUrl: string;

  @Column({ nullable: false })
  startupId: number;

  @ManyToOne(() => Startup, (startup) => startup.member, {
    onDelete: 'CASCADE',
  })
  startup: Startup;
}
