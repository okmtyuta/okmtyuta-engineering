import { User } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/User';
import { DataSource } from 'typeorm';
import { FetchUserByIdDto } from './dto/FetchUserById.dto';
interface FetchUserByIdResult {
    user: User;
}
interface IFetchUserById {
    execute(params: FetchUserByIdDto): Promise<FetchUserByIdResult>;
}
export declare class FetchUserById implements IFetchUserById {
    private dataSource;
    constructor(dataSource: DataSource);
    execute(params: FetchUserByIdDto): Promise<FetchUserByIdResult>;
}
export {};
