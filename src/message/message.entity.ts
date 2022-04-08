import { IsNotEmpty } from "class-validator";
import { Startup } from "src/startup/startup.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    firstName:String;
    @Column()
    lastName:String;
    @Column()
    email:String;
    @Column()
    phone:String
    @Column()
    content:String
    @ManyToOne(()=>Startup,(startup=>startup.message), {onDelete: 'CASCADE', nullable:false})
    startup:Startup
}



