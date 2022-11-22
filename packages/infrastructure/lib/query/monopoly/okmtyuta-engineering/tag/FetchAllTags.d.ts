import { Tag } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/Tag';
import { DataSource } from 'typeorm';
interface FetchAllTagsResult {
    tags: Tag[];
}
interface IFetchAllTags {
    execute(): Promise<FetchAllTagsResult>;
}
export declare class FetchAllTags implements IFetchAllTags {
    private dataSource;
    constructor(dataSource: DataSource);
    execute(): Promise<FetchAllTagsResult>;
}
export {};
