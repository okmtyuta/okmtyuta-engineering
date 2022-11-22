import { Article } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/Article';
import { DataSource } from 'typeorm';
interface FetchAllArticlesResult {
    articles: Article[];
}
interface IFetchAllArticles {
    fetch(): Promise<FetchAllArticlesResult>;
}
export declare class FetchAllArticles implements IFetchAllArticles {
    private dataSource;
    constructor(dataSource: DataSource);
    fetch(): Promise<FetchAllArticlesResult>;
}
export {};
