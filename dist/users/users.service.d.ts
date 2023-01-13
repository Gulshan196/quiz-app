import { Model } from 'mongoose';
import { CreateUserDto } from './dtos/createUser.dto';
import { User, UserDocument } from './entities/users.entity';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    findOne(username: string): Promise<User | undefined>;
    create(createUserDto: CreateUserDto): Promise<User>;
}
