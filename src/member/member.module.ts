import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import { Member } from './member.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Member])],

  controllers: [MemberController],
  providers: [MemberService],
})
export class MemberModule {}
