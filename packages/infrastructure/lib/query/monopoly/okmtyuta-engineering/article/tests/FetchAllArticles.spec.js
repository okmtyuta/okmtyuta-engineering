"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FetchAllArticles_1 = require("../FetchAllArticles");
const test_data_source_1 = require("../../../../../tests/test-data-source");
describe('FetchArticles', () => {
    it('fetch', async () => {
        const articles = await new FetchAllArticles_1.FetchAllArticles(test_data_source_1.TestDataSource).fetch();
        for (let i = 0; i < articles.articles.length; i++) {
            console.log(articles.articles[i]);
        }
    });
});
//# sourceMappingURL=FetchAllArticles.spec.js.map