import { Body, Controller, Post, Request } from '@nestjs/common';
import { LoginDto } from 'src/user/dto/login.dto';
import { AuthService } from './auth.service';
import { RegisterDto } from 'src/user/dto/register.dto';
import { Public } from 'src/shared/guards/public.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('register')
  async register(@Body() payload: RegisterDto) {
    return await this.authService.register(payload);
  }

  @Public()
  @Post('login')
  async login(@Body() payload: LoginDto) {
    return await this.authService.login(payload);
  }
}
