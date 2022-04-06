import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

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
  address: string;

  @IsNotEmpty()
  phone: string;

  @IsEmail()
  email: string;
}
