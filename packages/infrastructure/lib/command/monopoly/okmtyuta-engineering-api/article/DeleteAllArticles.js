"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAllArticle = void 0;
const Article_1 = require("@okmtyuta-engineering/library/lib/entity/Article");
const data_source_1 = require("../../../../config/data-source");
class DeleteAllArticle {
    async execute() {
        const dataSource = await data_source_1.AppDataSource.initialize();
        try {
            const articleRepository = await dataSource.getRepository(Article_1.Article);
            const deleteResult = await articleRepository.createQueryBuilder("article").delete().from(Article_1.Article).execute();
            return {
                deleteResult: deleteResult
            };
        }
        catch (error) {
            throw Error();
        }
        finally {
            await dataSource.destroy();
        }
    }
}
exports.DeleteAllArticle = DeleteAllArticle;
//# sourceMappingURL=DeleteAllArticles.js.map