import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { Roles } from './roles.decorator';
import { CONSTANTS } from './enums/role.enum';
import { RolesGuard } from './roles.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard,new RolesGuard(CONSTANTS.Roles.Admin))
  @Post('auth/admin/login')
  async adminLogin(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(LocalAuthGuard,new RolesGuard(CONSTANTS.Roles.User))
  @Post('auth/user/login')
  async userLogin(@Request() req) {
    return this.authService.login(req.user);
  }
   
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}