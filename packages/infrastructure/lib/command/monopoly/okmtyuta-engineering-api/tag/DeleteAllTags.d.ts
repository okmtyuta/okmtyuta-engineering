import { DataSource, DeleteResult } from 'typeorm';
interface DeleteAllTagsResult {
    deleteResult: DeleteResult;
}
interface IDeleteAllTags {
    execute(): Promise<DeleteAllTagsResult>;
}
export declare class DeleteAllTags implements IDeleteAllTags {
    private dataSource;
    constructor(dataSource: DataSource);
    execute(): Promise<DeleteAllTagsResult>;
}
export {};
