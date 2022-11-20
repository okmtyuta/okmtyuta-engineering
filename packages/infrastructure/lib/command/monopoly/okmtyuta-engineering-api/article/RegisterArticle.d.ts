import { RegisterArticleDto } from './dto/RegisterArtilce.dto';
import { Article } from '@okmtyuta-engineering/library/lib/entity/Article';
interface RegisterArticleResult {
    article: Article;
}
interface IRegisterArticle {
    register(params: RegisterArticleDto): Promise<RegisterArticleResult>;
}
export declare class RegisterArticle implements IRegisterArticle {
    register(params: RegisterArticleDto): Promise<RegisterArticleResult>;
}
export {};
