import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactStartupiService } from './contact-startupi.service';
import { ContactStartupiController } from './contact-startupi.controller';
import { ContactStartupi } from './contact-startupi.entity';
import { MailModule } from './../mail/mail.module';

@Module({
  imports: [TypeOrmModule.forFeature([ContactStartupi]), MailModule],

  controllers: [ContactStartupiController],
  providers: [ContactStartupiService],
})
export class ContactStartupiModule {}
