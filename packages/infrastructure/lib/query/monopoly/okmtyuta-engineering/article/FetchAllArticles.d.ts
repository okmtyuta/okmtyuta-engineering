import { Article } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/Article';
interface FetchAllArticlesResult {
    articles: Article[];
}
interface IFetchAllArticles {
    fetch(): Promise<FetchAllArticlesResult>;
}
export declare class FetchAllArticles implements IFetchAllArticles {
    fetch(): Promise<FetchAllArticlesResult>;
}
export {};
