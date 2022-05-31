import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { ClientKafka } from '@nestjs/microservices';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService,
    @Inject('NOTIF_SERVICE') private readonly contactClient: ClientKafka,
    ) {}
  
  @Post(':id')
  create(
    @Body() createMessageDto: CreateMessageDto,
    @Param('id') id: string,
  ) {
    return this.messageService.create(createMessageDto, id);
  }

  @Get()
  findAll() {
    return this.messageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messageService.findOne(+id);
  }

  onModuleInit() {
    this.contactClient.subscribeToResponseOf('find_all_message')
    this.contactClient.subscribeToResponseOf('create_message')
    this.contactClient.subscribeToResponseOf('find_one_message')
    
  }
}
