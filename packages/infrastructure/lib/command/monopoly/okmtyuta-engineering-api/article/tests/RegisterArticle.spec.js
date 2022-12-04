"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FetchUserById_1 = require("src/typeorm/query/monopoly/okmtyuta-engineering/user/FetchUserById");
const RegisterArticle_1 = require("../RegisterArticle");
const test_data_source_1 = require("../../../../../tests/test-data-source");
const FetchAllTags_1 = require("src/typeorm/query/monopoly/okmtyuta-engineering/tag/FetchAllTags");
describe('RegisterArticle', () => {
    let mockArticle;
    beforeEach(async () => {
        const user = (await new FetchUserById_1.FetchUserById(test_data_source_1.TestDataSource).execute({ userId: '1' })).user;
        mockArticle = {
            title: 'テスト記事',
            content: 'テストコンテント',
            description: 'これはテスト記事です',
            references: null,
            isPublic: true,
            thumbnail: null,
            tags: [],
            user: user,
        };
    });
    it('register', async () => {
        const user = (await new FetchUserById_1.FetchUserById(test_data_source_1.TestDataSource).execute({ userId: '1' })).user;
        const tags = (await new FetchAllTags_1.FetchAllTags(test_data_source_1.TestDataSource).execute()).tags;
        const articles = [];
        for (let i = 0; i < 9; i++) {
            const article = await new RegisterArticle_1.RegisterArticle(test_data_source_1.TestDataSource).register({
                title: 'テスト記事',
                content: 'テストコンテント',
                description: 'これはテスト記事です',
                references: null,
                isPublic: true,
                thumbnail: null,
                tags: [tags[i], tags[i + 10]],
                user: user,
            });
            articles.push(article);
            console.log(article.article.tags);
        }
    });
});
//# sourceMappingURL=RegisterArticle.spec.js.map