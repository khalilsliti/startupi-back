import { PartialType } from '@nestjs/mapped-types';
import { CreateContactStartupiDto } from './create-contact-startupi.dto';

export class UpdateContactStartupiDto extends PartialType(CreateContactStartupiDto) {}
