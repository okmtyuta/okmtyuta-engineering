"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterArticle = void 0;
const Article_1 = require("@okmtyuta-engineering/library/lib/db/typeorm/entity/Article");
const data_source_1 = require("../../../../config/data-source");
class RegisterArticle {
    async register(params) {
        const dataSource = await data_source_1.AppDataSource.initialize();
        try {
            const articleRepository = await dataSource.getRepository(Article_1.Article);
            const article = await articleRepository.create({
                title: params.title,
                content: params.content,
                description: params.description,
                references: params.references,
                isPublic: params.isPublic,
                thumbnail: params.thumbnail,
                postedAt: new Date(),
                updatedAt: null,
                isPickedUp: false,
                tags: params.tags,
                user: params.user,
            });
            const createdArticle = await articleRepository.save(article);
            return {
                article: createdArticle,
            };
        }
        catch (error) {
            throw Error(error);
        }
        finally {
            await dataSource.destroy();
        }
    }
}
exports.RegisterArticle = RegisterArticle;
//# sourceMappingURL=RegisterArticle.js.map