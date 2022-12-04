"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchAllArticles = void 0;
const Article_1 = require("@okmtyuta-engineering/library/lib/db/typeorm/entity/Article");
class FetchAllArticles {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.dataSource = dataSource;
    }
    async fetch() {
        await this.dataSource.initialize();
        try {
            const articleRepository = await this.dataSource.getRepository(Article_1.Article);
            const articles = await articleRepository.createQueryBuilder('article')
                .leftJoinAndSelect('article.tags', 'tag')
                .leftJoinAndSelect('article.user', 'user')
                .getMany();
            return {
                articles: articles,
            };
        }
        catch (error) {
            console.log(error);
            new Error(error);
        }
        finally {
            await this.dataSource.destroy();
        }
    }
}
exports.FetchAllArticles = FetchAllArticles;
//# sourceMappingURL=FetchAllArticles.js.map