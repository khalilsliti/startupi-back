import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { stringify } from 'querystring';
import { DeleteResult, Repository } from 'typeorm';
import { CreateStartupDto } from './dto/create-startup.dto';
import { UpdateStartupDto } from './dto/update-startup.dto';
import { Startup } from './startup.entity';

@Injectable()
export class StartupService {
  constructor(
    @Inject('STARTUP_SERVICE') private readonly startupClient: ClientKafka,
  ) {}

  async create(createStartupDto: CreateStartupDto) {
    try {
      console.log('i am in service ');
      const response = this.startupClient.send(
        'create_startup',
        JSON.stringify(createStartupDto),
      );
      return response;
    } catch (err) {
      throw new HttpException(
        {
          message: 'ERROR_CREATE_STARTUP_ENTITY',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    const response = this.startupClient.send('find_all_startup', {});
    return response;
  }

   findOne(id: number) {
     return   this.startupClient.send('find_one_startup',{id:id});
     
  }

  async update(id: number, updateStartupDto: UpdateStartupDto) {
     const response=this.startupClient.send('update_startup', {
      id: id,
      updateStartupDto,
    });
    return response
  }

  async remove(id: number) {
     return this.startupClient.send('delete_startup', { id: id });
  
    //should delete all its following table cascade
  }
}
