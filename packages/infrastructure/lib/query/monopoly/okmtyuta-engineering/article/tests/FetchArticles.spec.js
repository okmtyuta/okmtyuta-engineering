"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FetchArticles_1 = require("../FetchArticles");
describe("FetchArticles", () => {
    it("fetch", async () => {
        const articles = await new FetchArticles_1.FetchArticles().fetch();
        console.log(articles);
    });
});
//# sourceMappingURL=FetchArticles.spec.js.map