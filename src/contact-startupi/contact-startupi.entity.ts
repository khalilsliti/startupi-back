import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ContactStartupi {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  object: string;

  @Column()
  email: string;

  @Column()
  message: string;
}
