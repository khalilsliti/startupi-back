import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from 'src/user/dto/login.dto';
import { RegisterDto } from 'src/user/dto/register.dto';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { CurrentUserPayload } from 'src/user/viewModels/currentUser.payload';
import { LoginResponse } from 'src/user/viewModels/login.response';
import { RegisterResponse } from 'src/user/viewModels/register.response';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async register(payload: RegisterDto): Promise<RegisterResponse> {
    const user: User = await this.userService.createUser(payload);
    return this.sign(user);
  }

  async login(payload: LoginDto): Promise<LoginResponse> {
    const user: User = await this.userService.loginUser(payload);
    return this.sign(user);
  }

  sign(user: User): RegisterResponse {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 7);
    const infoToSign: CurrentUserPayload = {
      email: user.email,
      id: user.id,
      role: user.role,
      exp: exp.getTime() / 1000,
    };
    return {
      token: this.jwtService.sign(infoToSign),
    };
  }
}
