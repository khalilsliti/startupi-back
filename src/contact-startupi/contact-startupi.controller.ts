import { Controller, Get, Post, Body, Param, OnModuleInit, Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Public } from 'src/shared/guards/public.guard';
import { ContactStartupiService } from './contact-startupi.service';
import { CreateContactStartupiDto } from './dto/create-contact-startupi.dto';

@Controller('contact-startupi')
export class ContactStartupiController implements OnModuleInit{
  constructor(
    private readonly contactStartupiService: ContactStartupiService,
    @Inject('NOTIF_SERVICE') private readonly contactClient: ClientKafka,
  ) {}

  @Public()
  @Post()
  create(@Body() createContactStartupiDto: CreateContactStartupiDto) {
    return this.contactStartupiService.create(createContactStartupiDto);
  }

  @Get()
  async findAll() {
    return this.contactStartupiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    console.log("hello")
    return this.contactStartupiService.findOne(id);
  }

  onModuleInit() {
    this.contactClient.subscribeToResponseOf('find_all_contact')
    this.contactClient.subscribeToResponseOf('create_contact')
    this.contactClient.subscribeToResponseOf('find_one_contact')
    
  }
}
