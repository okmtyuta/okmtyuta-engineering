import { User } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/User';
import { DataSource } from 'typeorm';
interface FetchAllUsersResult {
    users: User[];
}
interface IFetchAllUsers {
    execute(): Promise<FetchAllUsersResult>;
}
export declare class FetchAllUsers implements IFetchAllUsers {
    private dataSource;
    constructor(dataSource: DataSource);
    execute(): Promise<FetchAllUsersResult>;
}
export {};
