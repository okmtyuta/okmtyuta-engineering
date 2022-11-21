import { User } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/User';
import { FetchUserByIdDto } from './dto/FetchUserById.dto';
interface FetchUserByIdResult {
    user: User;
}
interface IFetchUserById {
    execute(params: FetchUserByIdDto): Promise<FetchUserByIdResult>;
}
export declare class FetchUserById implements IFetchUserById {
    execute(params: FetchUserByIdDto): Promise<FetchUserByIdResult>;
}
export {};
