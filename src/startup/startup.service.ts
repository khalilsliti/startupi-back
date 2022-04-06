import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateStartupDto } from './dto/create-startup.dto';
import { UpdateStartupDto } from './dto/update-startup.dto';
import { Startup } from './startup.entity';

@Injectable()
export class StartupService {
  constructor(
    @InjectRepository(Startup) private startupRepository: Repository<Startup>,
  ) {}

  create(createStartupDto: CreateStartupDto): Promise<Startup> {
    const newStartup = this.startupRepository.create(createStartupDto);

    return this.startupRepository.save(newStartup);
  }

  findAll(): Promise<Startup[]> {
    return this.startupRepository.find();
  }

  findOne(id: number): Promise<Startup> {
    return this.startupRepository.findOne(id);
  }

  async update(
    id: number,
    updateStartupDto: UpdateStartupDto,
  ): Promise<Startup> {
    const foundStartup = await this.findOne(id);

    if (foundStartup) {
      return this.startupRepository.save({ id, ...updateStartupDto });
    }
    return null;
  }

  remove(id: number): Promise<DeleteResult> {
    return this.startupRepository.delete(id);
    //should delete all its following table cascade
  }
}
