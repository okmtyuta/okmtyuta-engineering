"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DeleteArticleById_1 = require("../DeleteArticleById");
const RegisterArticle_1 = require("../RegisterArticle");
const data_source_1 = require("../../../../../config/data-source");
describe("DeleteArticleById", () => {
    let mockArticle;
    let targetArticleId;
    beforeEach(async () => {
        mockArticle = {
            title: "テスト記事",
            content: "テストコンテント",
            description: "これはテスト記事です",
            references: null,
            isPublic: true,
            thumbnail: null
        };
        const article = (await new RegisterArticle_1.RegisterArticle(data_source_1.AppDataSource).register(mockArticle)).article;
        console.log("Registered");
        console.log(article);
        targetArticleId = article.articleId;
    });
    it("execute", async () => {
        const deleteResult = await new DeleteArticleById_1.DeleteArticleById(data_source_1.AppDataSource).execute({ articleId: targetArticleId });
        console.log(deleteResult.articleId);
    });
});
//# sourceMappingURL=DeleteArticleById.spec.js.map