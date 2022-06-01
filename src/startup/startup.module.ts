import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StartupService } from './startup.service';
import { StartupController } from './startup.controller';
import { Startup } from './startup.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';



@Module({
  imports: [
    TypeOrmModule.forFeature([Startup]),
    ClientsModule.register([
      {
        name:'STARTUP_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'startup',
            brokers: [`${process.env.KAFKA_HOST}:${process.env.KAFKA_PORT}`],
          },
          consumer:{
            groupId:'startup-consumer'
          }
        }
      }
    ])],

  controllers: [StartupController],
  providers: [StartupService],
})
export class StartupModule {}
