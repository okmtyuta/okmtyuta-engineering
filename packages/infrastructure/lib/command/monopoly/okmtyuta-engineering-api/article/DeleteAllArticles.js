"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAllArticle = void 0;
const Article_1 = require("@okmtyuta-engineering/library/lib/db/typeorm/entity/Article");
class DeleteAllArticle {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.dataSource = dataSource;
    }
    async execute() {
        await this.dataSource.initialize();
        try {
            const articleRepository = await this.dataSource.getRepository(Article_1.Article);
            const deleteResult = await articleRepository.createQueryBuilder('article').delete().from(Article_1.Article).execute();
            return {
                deleteResult: deleteResult,
            };
        }
        catch (error) {
            throw Error();
        }
        finally {
            await this.dataSource.destroy();
        }
    }
}
exports.DeleteAllArticle = DeleteAllArticle;
//# sourceMappingURL=DeleteAllArticles.js.map