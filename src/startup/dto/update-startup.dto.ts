import { PartialType } from '@nestjs/mapped-types';
import { CreateStartupDto } from './create-startup.dto';
import { IsEmail } from 'class-validator';

export class UpdateStartupDto extends PartialType(CreateStartupDto) {
  logo?: string;

  coverPhoto?: string;

  //To be discussed : logo and cover photo will be url from S3-like type of solutions?

  moto?: string;

  address?: string;

  phone?: string;

  @IsEmail()
  email?: string;
}
