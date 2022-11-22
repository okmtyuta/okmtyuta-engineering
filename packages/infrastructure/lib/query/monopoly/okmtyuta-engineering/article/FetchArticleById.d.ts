import { Article } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/Article';
import { DataSource } from 'typeorm';
import { FetchArticleByIdDto } from './dto/FetchArticleById.dto';
interface FetchArticleByIdResult {
    article: Article;
}
interface IFetchArticleById {
    fetch(params: FetchArticleByIdDto): Promise<FetchArticleByIdResult>;
}
export declare class FetchArticleById implements IFetchArticleById {
    private dataSource;
    constructor(dataSource: DataSource);
    fetch(params: FetchArticleByIdDto): Promise<FetchArticleByIdResult>;
}
export {};
