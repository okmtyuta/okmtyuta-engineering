import { RegisterArticleDto } from './dto/RegisterArticle.dto';
import { Article } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/Article';
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
