import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './service.entity';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Service) private serviceRepository: Repository<Service>,
  ) {}
  
  create(createServiceDto: CreateServiceDto): Promise<Service> {
    const newService = this.serviceRepository.create(createServiceDto);

    return this.serviceRepository.save(newService);
  }

  findAll(): Promise<Service[]> {
    return  this.serviceRepository.find();
  }

  findOne(id: number) : Promise<Service> {
    return  this.serviceRepository.findOne();
  }

  async update(
    id: number,
    updateServiceDto: UpdateServiceDto,
  ): Promise<Service> {
    const foundService = await this.findOne(id);

    if (foundService) {
      return this.serviceRepository.save({ id, ...updateServiceDto });
    }
    return null;
  }

  remove(id: number): Promise<DeleteResult> {
    return this.serviceRepository.delete(id);
  }
}
