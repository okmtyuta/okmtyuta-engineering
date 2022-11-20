import { DeleteResult } from 'typeorm';
interface DeleteAllArticleResult {
    deleteResult: DeleteResult;
}
interface IDeleteAllArticle {
    execute(): Promise<DeleteAllArticleResult>;
}
export declare class DeleteAllArticle implements IDeleteAllArticle {
    execute(): Promise<DeleteAllArticleResult>;
}
export {};
