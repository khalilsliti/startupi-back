import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from 'src/user/dto/login.dto';
import { AuthService } from './auth.service';
import { RegisterDto } from 'src/user/dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() payload: RegisterDto) {
    return await this.authService.register(payload);
  }

  @Post('login')
  async login(@Body() payload: LoginDto) {
    return await this.authService.login(payload);
  }
}
