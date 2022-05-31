import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { CreateContactDto } from 'src/contact/dto/create-contact.dto';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendContactEntityMail(contactInfo: CreateContactDto) {
    await this.mailerService.sendMail({
      to: process.env.founder_mail,

      subject: `contact us message from ${contactInfo.name}`,
      template: 'contact_message',
      context: {
        ...contactInfo,
      },
    });
  }
}
