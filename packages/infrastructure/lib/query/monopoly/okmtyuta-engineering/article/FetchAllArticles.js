"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchAllArticles = void 0;
const Article_1 = require("@okmtyuta-engineering/library/lib/db/typeorm/entity/Article");
const data_source_1 = require("../../../../config/data-source");
class FetchAllArticles {
    async fetch() {
        const dataSource = await data_source_1.AppDataSource.initialize();
        try {
            const articleRepository = await dataSource.getRepository(Article_1.Article);
            const articles = await articleRepository
                .createQueryBuilder('article')
                .leftJoinAndSelect('article.tags', 'tag')
                .leftJoinAndSelect('article.user', 'user')
                .getMany();
            return {
                articles: articles,
            };
        }
        catch (error) {
        }
        finally {
            await dataSource.destroy();
        }
    }
}
exports.FetchAllArticles = FetchAllArticles;
//# sourceMappingURL=FetchAllArticles.js.map