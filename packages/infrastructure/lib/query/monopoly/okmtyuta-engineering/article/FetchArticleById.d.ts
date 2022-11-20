import { Article } from '@okmtyuta-engineering/library/lib/entity/Article';
import { FetchArticleByIdDto } from './dto/FetchArticleById.dto';
interface FetchArticleByIdResult {
    article: Article;
}
interface IFetchArticleById {
    fetch(params: FetchArticleByIdDto): Promise<FetchArticleByIdResult>;
}
export declare class FetchArticleById implements IFetchArticleById {
    fetch(params: FetchArticleByIdDto): Promise<FetchArticleByIdResult>;
}
export {};
