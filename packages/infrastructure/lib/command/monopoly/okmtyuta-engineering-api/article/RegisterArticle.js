"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterArticle = void 0;
const Article_1 = require("@okmtyuta-engineering/library/lib/db/typeorm/entity/Article");
class RegisterArticle {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.dataSource = dataSource;
    }
    async register(params) {
        await this.dataSource.initialize();
        try {
            const articleRepository = await this.dataSource.getRepository(Article_1.Article);
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
            await this.dataSource.destroy();
        }
    }
}
exports.RegisterArticle = RegisterArticle;
//# sourceMappingURL=RegisterArticle.js.map