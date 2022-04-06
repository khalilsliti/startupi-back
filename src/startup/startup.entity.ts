import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Startup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  logo: string;

  @Column()
  coverPhoto: string;

  //To be discussed : logo and cover photo will be url from S3-like type of solutions?

  @Column()
  moto: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  // has oneToMany services, testimonalias, members, messages
}
