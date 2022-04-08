import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateMessageDto } from './create-message.dto';

export class UpdateMessageDto extends PartialType(CreateMessageDto) {
    
    firstName?:String;
   
    lastName?:String;
    
    email?:String;

    phone?:String;
    
    content?:String


}
