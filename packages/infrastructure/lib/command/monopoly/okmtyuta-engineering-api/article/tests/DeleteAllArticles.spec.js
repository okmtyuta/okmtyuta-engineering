"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DeleteAllArticles_1 = require("../DeleteAllArticles");
describe("DeleteAllArticles", () => {
    it("deleteAll", async () => {
        const deleteResult = await new DeleteAllArticles_1.DeleteAllArticle().execute();
        console.log(deleteResult);
    });
});
//# sourceMappingURL=DeleteAllArticles.spec.js.map