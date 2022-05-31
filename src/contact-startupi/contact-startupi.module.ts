import { Module } from '@nestjs/common';
import { ContactStartupiService } from './contact-startupi.service';
import { ContactStartupiController } from './contact-startupi.controller';
import { MailModule } from './../mail/mail.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
  MailModule,
  ClientsModule.register([
    {
      name:'NOTIF_SERVICE',
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'contact',
          brokers: ['localhost:9092'],
        },
        consumer:{
          groupId:'contact-consumer'
        }
      }
    }
  ])],

  controllers: [ContactStartupiController],
  providers: [ContactStartupiService],
})
export class ContactStartupiModule {}
