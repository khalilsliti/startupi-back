import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StartupModule } from './startup/startup.module';
import { MemberModule } from './member/member.module';
import { ServiceModule } from './service/service.module';
import { TestimonialModule } from './testimonial/testimonial.module';
import { MessageModule } from './message/message.module';
import 'dotenv/config'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST,
      port: parseInt(process.env.MYSQLDB_LOCAL_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: 'startupi_db',
      autoLoadEntities: true,
      synchronize: true,
      // username and password SHOULD to be fetched from .env
    }),
    MemberModule,
    ServiceModule,
    StartupModule,
    TestimonialModule,
    MessageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
