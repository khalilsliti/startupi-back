import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContactStartupiDto } from './dto/create-contact-startupi.dto';
import { MailService } from './../mail/mail.service';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class ContactStartupiService {
  constructor(
    private mailService: MailService,
    @Inject('NOTIF_SERVICE') private readonly contactClient: ClientKafka,
  ) {}

  async create(createContactStartupiDto: CreateContactStartupiDto) {
    try {
      return await this.contactClient.send('create_contact',createContactStartupiDto)

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
