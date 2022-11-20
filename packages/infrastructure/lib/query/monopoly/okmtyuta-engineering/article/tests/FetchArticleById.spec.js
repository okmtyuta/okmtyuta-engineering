"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FetchArticleById_1 = require("../FetchArticleById");
describe("FetchArticleById", () => {
    it("fetch", async () => {
        const article = await new FetchArticleById_1.FetchArticleById().fetch({ articleId: "8" });
        console.log(article);
    });
});
//# sourceMappingURL=FetchArticleById.spec.js.map