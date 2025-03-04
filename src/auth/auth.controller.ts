import { Controller, Post, Body, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { CreateUserDto, GetUserByCodeAndPass } from 'src/users/users.dto';
import { access } from 'fs';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: GetUserByCodeAndPass) {
    const user = await this.authService.validateUser(body.code, body.password);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    return this.authService.login(user);
  }

  @Post('register')
  async register(@Body() body: CreateUserDto) {
    return this.authService.register(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('getUserData')
  getUserData(@Request() req) {
    return {userId: req.user.userId, userName: req.user.userName, role: req.user.role, access: req.user.access};
  }
}
