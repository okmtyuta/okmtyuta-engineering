"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DeleteAllArticles_1 = require("../DeleteAllArticles");
const test_data_source_1 = require("../../../../../tests/test-data-source");
describe("DeleteAllArticles", () => {
    it("deleteAll", async () => {
        const deleteResult = await new DeleteAllArticles_1.DeleteAllArticle(test_data_source_1.TestDataSource).execute();
        console.log(deleteResult);
    });
});
//# sourceMappingURL=DeleteAllArticles.spec.js.map