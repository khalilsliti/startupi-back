import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StartupModule } from './startup/startup.module';
import { MemberModule } from './member/member.module';
import { ServiceModule } from './service/service.module';
import { TestimonialModule } from './testimonial/testimonial.module';
import { MessageModule } from './message/message.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TemplateModule } from './template/template.module';
import 'dotenv/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { ContactModule } from './contact/contact.module';
import { MailModule } from './mail/mail.module';
import { MulterModule } from '@nestjs/platform-express';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST,
      port: parseInt(process.env.MYSQLDB_LOCAL_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    MulterModule.register({
      dest: './src/files',
    }),
    MemberModule,
    ServiceModule,
    StartupModule,
    TestimonialModule,
    MessageModule,
    AuthModule,
    UserModule,
    TemplateModule,
    ContactModule,
    MailModule,
    FilesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
