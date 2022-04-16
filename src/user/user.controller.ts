import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/shared/decorators/role.decorator';
import { RolesGuard } from 'src/shared/guards/roles.guard';
import { GetUser } from './getUser.decorator';
import { RoleEnum } from './role.enum';
import { UserService } from './user.service';
import { CurrentUserPayload } from './viewModels/currentUser.payload';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Roles(RoleEnum.ADMIN)
  @UseGuards(RolesGuard)
  @Get('info')
  async getUserInfo(@GetUser() user: CurrentUserPayload, @Req() req: Request) {
    const { id } = user;
    return await this.userService.getUserInfo(id);
  }
}
