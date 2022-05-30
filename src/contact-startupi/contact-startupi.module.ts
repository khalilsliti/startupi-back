import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactStartupiService } from './contact-startupi.service';
import { ContactStartupiController } from './contact-startupi.controller';
import { ContactStartupi } from './contact-startupi.entity';
import { MailModule } from './../mail/mail.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [TypeOrmModule.forFeature([ContactStartupi]),
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
