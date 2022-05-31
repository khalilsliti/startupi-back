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
            brokers: ['localhost:9092'],
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
