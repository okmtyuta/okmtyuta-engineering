"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchArticles = void 0;
const Article_1 = require("@okmtyuta-engineering/library/lib/entity/Article");
const data_source_1 = require("../../../../config/data-source");
class FetchArticles {
    async fetch() {
        const dataSource = await data_source_1.AppDataSource.initialize();
        try {
            const articleRepository = await dataSource.getRepository(Article_1.Article);
            const articles = await articleRepository.find();
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
exports.FetchArticles = FetchArticles;
//# sourceMappingURL=FetchArticles.js.map