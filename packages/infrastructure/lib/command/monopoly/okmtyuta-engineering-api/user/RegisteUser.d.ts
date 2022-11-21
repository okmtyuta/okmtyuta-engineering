import { RegisterUserDto } from './dto/RegisterUserDto';
import { User } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/User';
interface RegisterUserResult {
    user: User;
}
interface IRegisterUser {
    execute(params: RegisterUserDto): Promise<RegisterUserResult>;
}
export declare class RegisterUser implements IRegisterUser {
    execute(params: RegisterUserDto): Promise<RegisterUserResult>;
}
export {};
