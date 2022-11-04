import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CONSTANTS } from 'src/enums/role.enum';
import { CreateUserDto } from './dtos/createUser.dto';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Post('/signup')
  async create(@Body() body: CreateUserDto) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(body.password, saltOrRounds);
    return this.userService.create({
      username: body.username,
      password: hashedPassword,
      roles : CONSTANTS.Roles.User
    });
  }
}
