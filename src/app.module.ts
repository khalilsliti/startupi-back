import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StartupModule } from './startup/startup.module';
import { MemberModule } from './member/member.module';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [
    ServiceModule,
    StartupModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST,
      port: parseInt(process.env.MYSQLDB_LOCAL_PORT),
      username: 'root',
      password: 'khalil',
      database: 'startupi_db',
      autoLoadEntities: true,
      synchronize: true,
      // username and password SHOULD to be fetched from .env
    }),
<<<<<<< HEAD
    MemberModule,
=======
    ServiceModule,
>>>>>>> 6f5fc4f (added service entity CRUD working)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
