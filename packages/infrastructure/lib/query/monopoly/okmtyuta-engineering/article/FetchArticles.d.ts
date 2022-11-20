import { Article } from '@okmtyuta-engineering/library/lib/entity/Article';
interface FetchArticlesResult {
    articles: Article[];
}
interface IFetchArticles {
    fetch(): Promise<FetchArticlesResult>;
}
export declare class FetchArticles implements IFetchArticles {
    fetch(): Promise<FetchArticlesResult>;
}
export {};
