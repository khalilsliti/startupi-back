import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';
import { Testimonial } from './testimonial.entity';

@Injectable()
export class TestimonialService {
  constructor(
    @InjectRepository(Testimonial)
    private testimonialRepository: Repository<Testimonial>,
  ) {}

  create(createTestimonialDto: CreateTestimonialDto): Promise<Testimonial> {
    const newTestimonial =
      this.testimonialRepository.create(createTestimonialDto);

    return this.testimonialRepository.save(newTestimonial);
  }

  findAll(): Promise<Testimonial[]> {
    return this.testimonialRepository.find();
  }

  findOne(id: number): Promise<Testimonial> {
    return this.testimonialRepository.findOne(id);
  }

  async update(
    id: number,
    updateTestimonialDto: UpdateTestimonialDto,
  ): Promise<Testimonial> {
    const foundTestimonial = await this.findOne(id);

    if (foundTestimonial) {
      return this.testimonialRepository.save({ id, ...updateTestimonialDto });
    }
    return null;
  }

  remove(id: number): Promise<DeleteResult> {
    return this.testimonialRepository.delete(id);
  }
}
