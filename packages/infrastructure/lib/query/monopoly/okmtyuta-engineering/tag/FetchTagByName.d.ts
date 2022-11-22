import { Tag } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/Tag';
import { DataSource } from 'typeorm';
import { FetchTagByNameDto } from './dto/FetchTagByName.dto';
interface FetchTagByNameResult {
    tag: Tag;
}
interface IFetchTagByName {
    fetch(params: FetchTagByNameDto): Promise<FetchTagByNameResult>;
}
export declare class FetchTagByName implements IFetchTagByName {
    private dataSource;
    constructor(dataSource: DataSource);
    fetch(params: FetchTagByNameDto): Promise<FetchTagByNameResult>;
}
export {};
