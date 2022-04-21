import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { StartupService } from './startup.service';
import { CreateStartupDto } from './dto/create-startup.dto';
import { UpdateStartupDto } from './dto/update-startup.dto';
import { Startup } from './startup.entity';
import { AnyFilesInterceptor } from '@nestjs/platform-express/multer';

@Controller('startup')
export class StartupController {
  constructor(private readonly startupService: StartupService) {}

  @Post()
  create(@Body() createStartupDto: CreateStartupDto): Promise<Startup> {
    return this.startupService.create(createStartupDto);
  }

  @Get()
  findAll(): Promise<Startup[]> {
    return this.startupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Startup> {
    return this.startupService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStartupDto: UpdateStartupDto,
  ): Promise<Startup> {
    return this.startupService.update(+id, updateStartupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.startupService.remove(+id);
  }

  @Post('upload')
  @UseInterceptors(AnyFilesInterceptor())
  uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files)
    // const response = [];
    // files.forEach(file => {
    //   const fileReponse = {
    //     originalname: file.originalname,
    //     filename: file.filename,
    //   };
    //   response.push(fileReponse);
    // });
    // return response;
  }
}
