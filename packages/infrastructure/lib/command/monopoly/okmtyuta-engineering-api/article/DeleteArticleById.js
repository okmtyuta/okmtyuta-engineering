"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteArticleById = void 0;
const Article_1 = require("@okmtyuta-engineering/library/lib/entity/Article");
const data_source_1 = require("../../../../config/data-source");
class DeleteArticleById {
    async execute(params) {
        const dataSource = await data_source_1.AppDataSource.initialize();
        try {
            const articleRepository = await dataSource.getRepository(Article_1.Article);
            const deleteResult = await articleRepository.delete({
                articleId: params.articleId
            });
            return {
                deleteResult: deleteResult,
                articleId: params.articleId
            };
        }
        catch (error) {
            throw new Error();
        }
        finally {
            dataSource.destroy();
        }
    }
}
exports.DeleteArticleById = DeleteArticleById;
//# sourceMappingURL=DeleteArticleById.js.map