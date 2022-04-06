import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StartupModule } from './startup/startup.module';

@Module({
  imports: [
    StartupModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST,
      port: parseInt(process.env.MYSQLDB_LOCAL_PORT),
      username: 'hana',
      password: 'hanahana',
      database: 'startupi_db',
      autoLoadEntities: true,
      synchronize: true,
      // username and password SHOULD to be fetched from .env
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
