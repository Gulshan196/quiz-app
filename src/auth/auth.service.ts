import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}
 // use bcrypt
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    const passwordValid = await bcrypt.compare(pass,user.password);
    if (!user) {
      throw new NotAcceptableException('could not find the user');
  }
  if (user && passwordValid) {
      return user;
  }
    return null;
  }

  async login(user: any) {
    const payload = { username: user._doc.username, sub: user._doc._id,roles: user._doc.roles };
   console.log('user',user._doc); 
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
