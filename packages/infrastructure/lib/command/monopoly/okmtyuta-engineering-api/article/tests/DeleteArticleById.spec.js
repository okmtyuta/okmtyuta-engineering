"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DeleteArticleById_1 = require("../DeleteArticleById");
const RegisterArticle_1 = require("../RegisterArticle");
const test_data_source_1 = require("../../../../../tests/test-data-source");
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
        const article = (await new RegisterArticle_1.RegisterArticle(test_data_source_1.TestDataSource).register(mockArticle)).article;
        console.log("Registered");
        console.log(article);
        targetArticleId = article.articleId;
    });
    it("execute", async () => {
        const deleteResult = await new DeleteArticleById_1.DeleteArticleById(test_data_source_1.TestDataSource).execute({ articleId: targetArticleId });
        console.log(deleteResult.articleId);
    });
});
//# sourceMappingURL=DeleteArticleById.spec.js.map