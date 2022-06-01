import { IsNotEmpty } from 'class-validator';
import { Startup } from 'src/startup/startup.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  email: string;
  @Column()
  phone: string;
  @Column()
  content: string;
  @ManyToOne(() => Startup, (startup) => startup.message, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  startup: Startup;
}