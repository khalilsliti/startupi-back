import { Injectable, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express/multer';

@Injectable()
export class UploadFileService {

  uploadFile(files)
  {
    console.log("these are ",files)
    const response = [];
  files.forEach(file => {
      const fileReponse = {
       originalname: file.originalname,
       filename: file.filename,
    };
      response.push(fileReponse);
    });
    return response;
  }
}
