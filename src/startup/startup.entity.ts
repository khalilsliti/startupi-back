import { Member } from './../member/member.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Testimonial } from 'src/testimonial/testimonial.entity';
import { Service } from 'src/service/service.entity';

@Entity()
export class Startup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  logo: string;

  @Column({ default: 'default cover url' })
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
  @OneToMany(() => Member, (member) => member.startup)
  member: Member[];

  @OneToMany(() => Testimonial, (testimonial) => testimonial.startup)
  testimonial: Testimonial[];

  @OneToMany(() => Service, (service) => service.startup)
  service: Service[];
}
