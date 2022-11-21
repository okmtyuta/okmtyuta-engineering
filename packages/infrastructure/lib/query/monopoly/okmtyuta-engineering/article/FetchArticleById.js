"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchArticleById = void 0;
const Article_1 = require("@okmtyuta-engineering/library/lib/db/typeorm/entity/Article");
const data_source_1 = require("../../../../config/data-source");
class FetchArticleById {
    async fetch(params) {
        const dataSource = await data_source_1.AppDataSource.initialize();
        try {
            const articleRepository = await dataSource.getRepository(Article_1.Article);
            const article = await articleRepository.findOne({
                where: {
                    articleId: params.articleId
                }
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
            await dataSource.destroy();
        }
    }
}
exports.FetchArticleById = FetchArticleById;
//# sourceMappingURL=FetchArticleById.js.map