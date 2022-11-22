import { DataSource, DeleteResult } from 'typeorm';
interface DeleteAllArticleResult {
    deleteResult: DeleteResult;
}
interface IDeleteAllArticle {
    execute(): Promise<DeleteAllArticleResult>;
}
export declare class DeleteAllArticle implements IDeleteAllArticle {
    private dataSource;
    constructor(dataSource: DataSource);
    execute(): Promise<DeleteAllArticleResult>;
}
export {};
