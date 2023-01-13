import { CreateUserDto } from './dtos/createUser.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    create(body: CreateUserDto): Promise<import("./entities/users.entity").User>;
}
