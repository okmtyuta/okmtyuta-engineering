"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FetchArticleById_1 = require("../FetchArticleById");
const data_source_1 = require("../../../../../config/data-source");
describe("FetchArticleById", () => {
    it("fetch", async () => {
        const article = await new FetchArticleById_1.FetchArticleById(data_source_1.AppDataSource).fetch({ articleId: "8" });
        console.log(article);
    });
});
//# sourceMappingURL=FetchArticleById.spec.js.map