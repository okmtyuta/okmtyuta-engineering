"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteArticleById = void 0;
const Article_1 = require("@okmtyuta-engineering/library/lib/db/typeorm/entity/Article");
class DeleteArticleById {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.dataSource = dataSource;
    }
    async execute(params) {
        await this.dataSource.initialize();
        try {
            const articleRepository = await this.dataSource.getRepository(Article_1.Article);
            const deleteResult = await articleRepository.delete({
                articleId: params.articleId,
            });
            return {
                deleteResult: deleteResult,
                articleId: params.articleId,
            };
        }
        catch (error) {
            throw new Error();
        }
        finally {
            this.dataSource.destroy();
        }
    }
}
exports.DeleteArticleById = DeleteArticleById;
//# sourceMappingURL=DeleteArticleById.js.map