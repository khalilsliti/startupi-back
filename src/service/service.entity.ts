import { Startup } from 'src/startup/startup.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(()=>Startup ,(startup)=>startup.service, {
    onDelete: 'CASCADE',
  })
  startup:Startup
}
