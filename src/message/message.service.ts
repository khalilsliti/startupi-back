import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessageService {
  constructor(
    @Inject('NOTIF_SERVICE') private readonly messageClient: ClientKafka,
  ) {}

  async create(createMessageDto: CreateMessageDto, id) {
    try {
      return await this.messageClient.send('create_message', {
        createMessageDto,
        id,
      });
    } catch (error) {
      console.log(error);
      throw new HttpException(
        {
          message: 'MESSAGE_CREATION_ERROR',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    return await this.messageClient.send('find_all_message', {});
  }

  async findOne(id: number) {
    return await this.messageClient.send('find_one_message', { id: id });
  }
}
