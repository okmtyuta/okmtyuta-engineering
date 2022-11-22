import { RegisterUserDto } from './dto/RegisterUserDto';
import { User } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/User';
import { DataSource } from 'typeorm';
interface RegisterUserResult {
    user: User;
}
interface IRegisterUser {
    execute(params: RegisterUserDto): Promise<RegisterUserResult>;
}
export declare class RegisterUser implements IRegisterUser {
    private dataSource;
    constructor(dataSource: DataSource);
    execute(params: RegisterUserDto): Promise<RegisterUserResult>;
}
export {};
