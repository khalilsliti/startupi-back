import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Member } from './member.entity';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member) private memberRepository: Repository<Member>,
  ) {}
  create(createMemberDto: CreateMemberDto,id): Promise<Member> {
    const newMember = this.memberRepository.create({...createMemberDto,
      startup:id});

    return this.memberRepository.save(newMember);
  }

  findAll(): Promise<Member[]> {
    return this.memberRepository.find();
  }

  findOne(id: number): Promise<Member> {
    return this.memberRepository.findOne(id);
  }

  async update(id: number, updateMemberDto: UpdateMemberDto): Promise<Member> {
    const foundMember = await this.findOne(id);

    if (foundMember) {
      return this.memberRepository.save({ id, ...updateMemberDto });
    }
    return null;
  }

  remove(id: number): Promise<DeleteResult> {
    return this.memberRepository.delete(id);
  }
}
