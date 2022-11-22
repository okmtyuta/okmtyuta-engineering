"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchArticleById = void 0;
const Article_1 = require("@okmtyuta-engineering/library/lib/db/typeorm/entity/Article");
class FetchArticleById {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.dataSource = dataSource;
    }
    async fetch(params) {
        await this.dataSource.initialize();
        try {
            const articleRepository = await this.dataSource.getRepository(Article_1.Article);
            const article = await articleRepository.findOne({
                where: {
                    articleId: params.articleId,
                },
            });
            if (!article) {
                throw Error(`NOT FOUND ARTICLE BY ID ${params.articleId}`);
            }
            return {
                article: article,
            };
        }
        catch (error) {
            return error;
        }
        finally {
            await this.dataSource.destroy();
        }
    }
}
exports.FetchArticleById = FetchArticleById;
//# sourceMappingURL=FetchArticleById.js.map