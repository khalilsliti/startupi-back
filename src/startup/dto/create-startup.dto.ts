import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { CreateMemberDto } from 'src/member/dto/create-member.dto';
import { Member } from 'src/member/member.entity';
import { CreateServiceDto } from 'src/service/dto/create-service.dto';
import { Service } from 'src/service/service.entity';

export class CreateStartupDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  logo: string;

  coverPhoto: string;

  //To be discussed : logo and cover photo will be url from S3-like type of solutions?

  @IsNotEmpty()
  moto: string;
  @IsNotEmpty()
  aboutUs: string

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  phone: string;

  members:Array<Member>
  services:Array<Service>

  @IsEmail()
  email: string;
}
