"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchArticlesByTagNames = void 0;
const Article_1 = require("@okmtyuta-engineering/library/lib/db/typeorm/entity/Article");
class FetchArticlesByTagNames {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.dataSource = dataSource;
    }
    async execute(params) {
        await this.dataSource.initialize();
        try {
            const articleRepository = await this.dataSource.getRepository(Article_1.Article);
            const articles = await articleRepository
                .createQueryBuilder('articles')
                .leftJoinAndSelect('articles.tags', 'tag')
                .where('tag.name IN (:...tags)', { tags: params.tags })
                .getMany();
            const articleFiltered = articles.filter((article) => {
                return article.tags.length >= params.tags.length;
            });
            return {
                articles: articleFiltered,
            };
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
        finally {
            this.dataSource.destroy();
        }
    }
}
exports.FetchArticlesByTagNames = FetchArticlesByTagNames;
//# sourceMappingURL=FetchArticlesByTagNames.js.map