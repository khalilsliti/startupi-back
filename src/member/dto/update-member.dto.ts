import { PartialType } from '@nestjs/mapped-types';
import { CreateMemberDto } from './create-member.dto';

export class UpdateMemberDto extends PartialType(CreateMemberDto) {
  name?: string;

  profileImage?: string;

  position?: string;

  saying?: string;

  linkedinUrl?: string;
}
