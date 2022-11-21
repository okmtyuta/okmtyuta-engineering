import { User } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/User';
interface FetchAllUsersResult {
    users: User[];
}
interface IFetchAllUsers {
    execute(): Promise<FetchAllUsersResult>;
}
export declare class FetchAllUsers implements IFetchAllUsers {
    execute(): Promise<FetchAllUsersResult>;
}
export {};
