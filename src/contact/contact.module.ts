import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactController } from './contact.controller';
import { Contact } from './contact.entity';
import { ContactService } from './contact.service';

@Module({
  imports: [
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
    ]),
    TypeOrmModule.forFeature([Contact])],

  controllers: [ContactController],

  providers: [ContactService],
})
export class ContactModule {}
