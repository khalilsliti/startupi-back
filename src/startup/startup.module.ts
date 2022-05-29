import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StartupService } from './startup.service';
import { StartupController } from './startup.controller';
import { Startup } from './startup.entity';
import { UploadFileService } from 'src/shared/upload-file/upload-file.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([Startup])
  ],
  controllers: [StartupController],
  providers: [StartupService,UploadFileService],
})
export class StartupModule {}
