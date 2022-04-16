import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ContactStartupiService } from './contact-startupi.service';
import { CreateContactStartupiDto } from './dto/create-contact-startupi.dto';

@Controller('contact-startupi')
export class ContactStartupiController {
  constructor(
    private readonly contactStartupiService: ContactStartupiService,
  ) {}

  @Post()
  create(@Body() createContactStartupiDto: CreateContactStartupiDto) {
    return this.contactStartupiService.create(createContactStartupiDto);
  }

  @Get()
  findAll() {
    return this.contactStartupiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactStartupiService.findOne(+id);
  }
}
