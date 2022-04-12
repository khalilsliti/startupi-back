import { Controller, Get } from '@nestjs/common';
import { GetUser } from './getUser.decorator';
import { UserService } from './user.service';
import { CurrentUserPayload } from './viewModels/currentUser.payload';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}

    @Get('info')
    async getUserInfo(@GetUser() user: CurrentUserPayload) {
      const { id } = user;
      return await this.userService.getUserInfo(id);
    }
}

