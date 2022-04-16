import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactStartupi } from './contact-startupi.entity';
import { CreateContactStartupiDto } from './dto/create-contact-startupi.dto';
import { MailService } from './../mail/mail.service';

@Injectable()
export class ContactStartupiService {
  constructor(
    @InjectRepository(ContactStartupi)
    private contactRepository: Repository<ContactStartupi>,
    private mailService: MailService,
  ) {}

  async create(createContactStartupiDto: CreateContactStartupiDto) {
    try {
      const newContact = this.contactRepository.create(
        createContactStartupiDto,
      );

      const savedMessage = this.contactRepository.save(newContact);
      await this.mailService.sendContactEntityMail(createContactStartupiDto);

      return savedMessage;
    } catch (err) {
      throw new HttpException(
        {
          message: 'ERROR_CREATE_CONTACT_ENTITY',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  findAll() {
    return this.contactRepository.find();
  }

  findOne(id: number) {
    return this.contactRepository.findOne(id);
  }
}
