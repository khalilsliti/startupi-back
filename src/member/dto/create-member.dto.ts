import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMemberDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  profileImage: string;

  position: string;

  saying: string;

  linkedinUrl: string;
}
