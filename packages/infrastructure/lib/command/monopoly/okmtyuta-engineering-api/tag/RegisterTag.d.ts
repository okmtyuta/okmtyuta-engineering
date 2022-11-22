import { Tag } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/Tag';
import { DataSource } from 'typeorm';
import { RegisterTagDto } from './dto/RegisterTag.dto';
interface RegisterTagResult {
    tag: Tag;
}
interface IRegisterTag {
    execute(params: RegisterTagDto): Promise<RegisterTagResult>;
}
export declare class RegisterTag implements IRegisterTag {
    private dataSource;
    constructor(dataSource: DataSource);
    execute(params: RegisterTagDto): Promise<RegisterTagResult>;
}
export {};
