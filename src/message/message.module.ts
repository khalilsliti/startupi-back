import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Message } from './message.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Message]),
  ClientsModule.register([
    {
      name:'NOTIF_SERVICE',
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'message',
          brokers: [`${process.env.KAFKA_HOST}:${process.env.KAFKA_PORT}`],
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
