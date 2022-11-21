import { Tag } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/Tag';
interface FetchAllTagsResult {
    tags: Tag[];
}
interface IFetchAllTags {
    execute(): Promise<FetchAllTagsResult>;
}
export declare class FetchAllTags implements IFetchAllTags {
    execute(): Promise<FetchAllTagsResult>;
}
export {};
