import { Article } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/Article';
import { DataSource } from 'typeorm';
import { FetchArticlesByTagNamesDto } from './dto/FetchArticlesByTagNamesDto';
interface FetchArticlesByTagNamesResult {
    articles: Article[];
}
interface IFetchArticlesByTagNames {
    execute(params: FetchArticlesByTagNamesDto): Promise<FetchArticlesByTagNamesResult>;
}
export declare class FetchArticlesByTagNames implements IFetchArticlesByTagNames {
    private dataSource;
    constructor(dataSource: DataSource);
    execute(params: FetchArticlesByTagNamesDto): Promise<FetchArticlesByTagNamesResult>;
}
export {};
