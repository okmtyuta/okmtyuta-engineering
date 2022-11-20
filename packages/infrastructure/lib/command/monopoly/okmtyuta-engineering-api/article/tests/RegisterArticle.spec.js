"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RegisterArticle_1 = require("../RegisterArticle");
describe("RegisterArticle", () => {
    let mockArticle;
    beforeEach(() => {
        mockArticle = {
            title: "テスト記事",
            content: "テストコンテント",
            description: "これはテスト記事です",
            references: null,
            isPublic: true,
            thumbnail: null
        };
    });
    it("register", async () => {
        const article = (await new RegisterArticle_1.RegisterArticle().register(mockArticle));
        console.log(article);
    });
});
//# sourceMappingURL=RegisterArticle.spec.js.map