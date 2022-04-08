import { IsNotEmpty, IsNumberString, IsString } from "class-validator";

export class CreateMessageDto {

    @IsString()
    @IsNotEmpty()
    firstName:String;
    @IsString()
    @IsNotEmpty()
    lastName:String;
    @IsString()
    @IsNotEmpty()
    email:String;
    @IsNumberString()
    @IsNotEmpty()
    phone:String
    @IsString()
    @IsNotEmpty()
    content:String
}
