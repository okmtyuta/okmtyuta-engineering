"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FetchUserById_1 = require("src/typeorm/query/monopoly/okmtyuta-engineering/user/FetchUserById");
const RegisterArticle_1 = require("../RegisterArticle");
describe("RegisterArticle", () => {
    let mockArticle;
    beforeEach(async () => {
        const user = (await new FetchUserById_1.FetchUserById().execute({ userId: "1" })).user;
        mockArticle = {
            title: "テスト記事",
            content: "テストコンテント",
            description: "これはテスト記事です",
            references: null,
            isPublic: true,
            thumbnail: null,
            tags: [],
            user: user,
        };
    });
    it("register", async () => {
        const article = (await new RegisterArticle_1.RegisterArticle().register(mockArticle));
        console.log(article);
    });
});
//# sourceMappingURL=RegisterArticle.spec.js.map