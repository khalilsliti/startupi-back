import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports:[
  ClientsModule.register([
    {
      name:'NOTIF_SERVICE',
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'message',
          brokers: ['localhost:9092'],
        },
        consumer:{
          groupId:'message-consumer'
        }
      }
    }
  ])

],
  controllers: [MessageController],
  providers: [MessageService]
})
export class MessageModule {}
