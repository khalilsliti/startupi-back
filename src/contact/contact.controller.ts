import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Public } from 'src/shared/guards/public.guard';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(
    // private readonly contactService: ContactService,
  ) {}

  @Public()
  @Post()
  create(@Body() createContactDto: CreateContactDto) {
    // return this.contactService.create(createContactDto);
  }

  @Get()
  findAll() {
    // return this.contactService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.contactService.findOne(+id);
  }
}
