import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class ContactService {
  constructor(
    @Inject('NOTIF_SERVICE') private readonly contactClient: ClientKafka,
  ) {}

  async create(createContactDto: CreateContactDto) {
    try {
      return await this.contactClient.send('create_contact',createContactDto)

    } catch (err) {
      throw new HttpException(
        {
          message: 'ERROR_CREATE_CONTACT_ENTITY',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    return await this.contactClient
    .send('find_all_contact',{})
  }

  async findOne(id:number) {
    return await this.contactClient
    .send('find_one_contact',{id:id})
  }

}
