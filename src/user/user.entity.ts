import { IsEmail, IsNumber } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { RoleEnum } from './role.enum';

@Entity()
export class User{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({unique: true, length:8})
  @IsNumber()
  phone: string;

  @Column({unique: true})
  @IsEmail()
  email: string;

  @Column()
  password: string;

  @Column({ type:'enum', default: RoleEnum.USER, enum: RoleEnum})
  role: string;

}

