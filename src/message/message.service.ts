import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './message.entity';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message) private messageRepository: Repository<Message>,
  ) {}
  create(createMessageDto: CreateMessageDto , id): Promise<Message> {
    const newMessage= this.messageRepository.create({...createMessageDto,
      startup: id});
    return this.messageRepository.save(newMessage) ;
  }

  findAll():Promise<Message[]> {
    return this.messageRepository.find();
  }
  
  findOne(id: number): Promise<Message> {
    return this.messageRepository.findOne(id);
  } 
}
