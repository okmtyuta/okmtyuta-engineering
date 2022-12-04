"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_data_source_1 = require("../../../../../tests/test-data-source");
const FetchArticlesByTagNames_1 = require("../FetchArticlesByTagNames");
describe('FetchArticleByTags', () => {
    it('fetch', async () => {
        const articles = await new FetchArticlesByTagNames_1.FetchArticlesByTagNames(test_data_source_1.TestDataSource).execute({
            tags: ["1-8番目", "3-8番目"]
        });
        for (let i = 0; i < articles.articles.length; i++) {
            console.log(articles.articles[0].tags);
        }
    });
});
//# sourceMappingURL=FetchArticlesByTagNames.spec.js.map