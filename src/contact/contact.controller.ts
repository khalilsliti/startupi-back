import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Public } from 'src/shared/guards/public.guard';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contact')
export class ContactController {

  constructor(
    private readonly contactService: ContactService,
    @Inject('NOTIF_SERVICE') private readonly contactClient: ClientKafka,
  ) {}

  @Public()
  @Post()
  create(@Body() createContactStartupiDto: CreateContactDto) {
    return this.contactService.create(createContactStartupiDto);
  }

  @Get()
  async findAll() {
    return this.contactService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.contactService.findOne(id);
  }

  onModuleInit() {
    this.contactClient.subscribeToResponseOf('find_all_contact')
    this.contactClient.subscribeToResponseOf('create_contact')
    this.contactClient.subscribeToResponseOf('find_one_contact')
    
  }
}
