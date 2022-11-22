import { ArticleService } from './article.service';
import { RegisterArticleDto } from '@okmtyuta-engineering/infrastructure/lib/command/monopoly/okmtyuta-engineering-api/article/dto/RegisterArticle.dto';
export declare class ArticleController {
    private articleService;
    constructor(articleService: ArticleService);
    getAllArticle(): Promise<import("@okmtyuta-engineering/library/lib/db/typeorm/entity/Article").Article[]>;
    registerArticle(params: RegisterArticleDto): Promise<import("@okmtyuta-engineering/library/lib/db/typeorm/entity/Article").Article>;
    deleteAllArticle(): Promise<import("typeorm").DeleteResult>;
}
