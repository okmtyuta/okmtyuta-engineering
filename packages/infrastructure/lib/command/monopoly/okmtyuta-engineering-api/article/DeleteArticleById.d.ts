import { DataSource, DeleteResult } from 'typeorm';
import { DeleteArticleByIdDto } from './dto/DeleteArticleById.dto';
interface DeleteArticleByIdResult {
    deleteResult: DeleteResult;
    articleId: string;
}
interface IDeleteArticleById {
    execute(params: DeleteArticleByIdDto): Promise<DeleteArticleByIdResult>;
}
export declare class DeleteArticleById implements IDeleteArticleById {
    private dataSource;
    constructor(dataSource: DataSource);
    execute(params: DeleteArticleByIdDto): Promise<DeleteArticleByIdResult>;
}
export {};
