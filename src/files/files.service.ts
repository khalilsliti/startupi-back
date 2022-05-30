import { BlobServiceClient, BlockBlobClient } from '@azure/storage-blob';
import { Injectable } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';


@Injectable()
export class FilesService {
containerName="upload-file"
azureConnection=process.env.AZURE_STORAGE

getBlobClient(imageName:string):BlockBlobClient{
  const blobClientService = BlobServiceClient.fromConnectionString(this.azureConnection);
  const containerClient = blobClientService.getContainerClient(this.containerName);
  const blobClient = containerClient.getBlockBlobClient(imageName);
  return blobClient;
}

async upload(file:Express.Multer.File){
  const blobClient = this.getBlobClient(file.originalname);
  await blobClient.uploadData(file.buffer);
}
async uploadMany(files:Array<Express.Multer.File>)
{
   files.forEach((file)=>{
    this.upload(file)
  })
}



}
