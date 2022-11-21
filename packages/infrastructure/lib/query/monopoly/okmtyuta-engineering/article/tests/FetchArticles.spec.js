"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FetchAllArticles_1 = require("../FetchAllArticles");
describe("FetchArticles", () => {
    it("fetch", async () => {
        const articles = await new FetchAllArticles_1.FetchAllArticles().fetch();
        console.log(articles.articles);
    });
});
//# sourceMappingURL=FetchArticles.spec.js.map