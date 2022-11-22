"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FetchAllArticles_1 = require("../FetchAllArticles");
const test_data_source_1 = require("../../../../../tests/test-data-source");
describe('FetchArticles', () => {
    it('fetch', async () => {
        const articles = await new FetchAllArticles_1.FetchAllArticles(test_data_source_1.TestDataSource).fetch();
        console.log(articles.articles);
    });
});
//# sourceMappingURL=FetchAllArticles.spec.js.map