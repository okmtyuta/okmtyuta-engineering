"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FetchAllArticles_1 = require("../FetchAllArticles");
const data_source_1 = require("../../../../../config/data-source");
describe("FetchArticles", () => {
    it("fetch", async () => {
        const articles = await new FetchAllArticles_1.FetchAllArticles(data_source_1.AppDataSource).fetch();
        console.log(articles.articles);
    });
});
//# sourceMappingURL=FetchAllArticles.spec.js.map