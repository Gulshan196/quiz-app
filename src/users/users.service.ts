import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {  CONSTANTS } from 'src/enums/role.enum';
import { CreateUserDto } from './dtos/createUser.dto';
import { User, UserDocument } from './entities/users.entity';

// This should be a real class/interface representing a user entity


@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }
  // public users: User[] = [
  //   {
  //     username: 'john',
  //     password: 'changeme',
  //     roles: CONSTANTS.Roles.Admin
  //   },];

  async findOne(username: string): Promise<User | undefined> {
    const user =  await this.userModel.findOne({ username: username }).exec();
    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }
}