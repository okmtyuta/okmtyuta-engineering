"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FetchArticleById_1 = require("../FetchArticleById");
const test_data_source_1 = require("../../../../../tests/test-data-source");
describe('FetchArticleById', () => {
    it('fetch', async () => {
        const article = await new FetchArticleById_1.FetchArticleById(test_data_source_1.TestDataSource).fetch({ articleId: '8' });
        console.log(article);
    });
});
//# sourceMappingURL=FetchArticleById.spec.js.map