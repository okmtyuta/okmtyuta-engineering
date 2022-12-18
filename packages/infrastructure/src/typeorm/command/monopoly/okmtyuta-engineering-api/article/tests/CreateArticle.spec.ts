import { CreateArticle } from '../CreateArticle';
import { TestDataSource } from '../../../../../tests/test-data-source';

describe('RegisterArticle', () => {
  let mockAnonymousArticle;

  beforeEach(async () => {
    mockAnonymousArticle = {
      title: 'テスト記事',
      content: 'テストコンテント',
      description: 'これはテスト記事です',
      references: [],
      isPublic: true,
      thumbnail: null,
      tags: [],
      user: null,
    };
  });

  it('register', async () => {
    const article = await new CreateArticle(TestDataSource).execute(mockAnonymousArticle);

    expect(article.articleId)
  });
});
