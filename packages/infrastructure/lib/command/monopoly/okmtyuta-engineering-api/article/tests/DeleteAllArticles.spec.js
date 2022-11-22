"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DeleteAllArticles_1 = require("../DeleteAllArticles");
const data_source_1 = require("../../../../../config/data-source");
describe("DeleteAllArticles", () => {
    it("deleteAll", async () => {
        const deleteResult = await new DeleteAllArticles_1.DeleteAllArticle(data_source_1.AppDataSource).execute();
        console.log(deleteResult);
    });
});
//# sourceMappingURL=DeleteAllArticles.spec.js.map