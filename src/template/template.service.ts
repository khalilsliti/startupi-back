import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateTemplateDto } from './dto/create-template.dto';
import { Template } from './template.entity';

@Injectable()
export class TemplateService {
  constructor(
    @InjectRepository(Template)
    private templateRepository: Repository<Template>,
  ) {}

  create(createTemplateDto: CreateTemplateDto): Promise<Template> {
    const newTemplate = this.templateRepository.create(createTemplateDto);

    return this.templateRepository.save(newTemplate);
  }

  findAll(): Promise<Template[]> {
    return this.templateRepository.find();
  }

  findOne(id: number): Promise<Template> {
    return this.templateRepository.findOne(id);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.templateRepository.delete(id);
  }
}
