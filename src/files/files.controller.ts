import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles, UploadedFile, Header, Res, Query } from '@nestjs/common';
import { FilesService } from './files.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express/multer';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    
    await this.filesService.upload(file);
    return "uploaded";
  }


  @Post('uploadMany')
  @UseInterceptors(AnyFilesInterceptor())
  async uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
    
    await this.filesService.uploadMany(files);
    return "uploaded";
  }




  
}
