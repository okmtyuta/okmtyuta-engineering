import { DeleteResult } from 'typeorm';
interface DeleteAllTagsResult {
    deleteResult: DeleteResult;
}
interface IDeleteAllTags {
    execute(): Promise<DeleteAllTagsResult>;
}
export declare class DeleteAllTags implements IDeleteAllTags {
    execute(): Promise<DeleteAllTagsResult>;
}
export {};
