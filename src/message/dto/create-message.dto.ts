import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;
  @IsString()
  @IsNotEmpty()
  lastName: string;
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsNumberString()
  @IsNotEmpty()
  phone: string;
  @IsString()
  @IsNotEmpty()
  content: string;
}
