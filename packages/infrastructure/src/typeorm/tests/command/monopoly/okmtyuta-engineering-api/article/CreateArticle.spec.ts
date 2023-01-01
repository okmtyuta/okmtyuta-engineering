import { Article } from '@okmtyuta-engineering/library/lib/db/typeorm/entity';
import { CreateArticle } from 'src/typeorm/command/monopoly/okmtyuta-engineering-api/article/CreateArticle';
import { TestDataSource } from 'src/typeorm/tests/test-data-source';
import { mockAnonymousArticle } from './mockArticle';

describe('CreateArticle', () => {
  let mockAnonymousArticleParams;
  let createdArticle: Article;

  beforeEach(async () => {
    mockAnonymousArticleParams = {
      title: mockAnonymousArticle.title,
      paragraphs: mockAnonymousArticle.paragraphs,
      description: mockAnonymousArticle.description,
      references: mockAnonymousArticle.references,
      isPublic: mockAnonymousArticle.isPublic,
      thumbnail: mockAnonymousArticle.thumbnail,
      tags: mockAnonymousArticle.tags,
      user: mockAnonymousArticle.user,
    };
  });

  afterEach(async () => {
    await TestDataSource.initialize();
    await TestDataSource.getRepository(Article).delete({
      articleId: createdArticle.articleId,
    });
    await TestDataSource.destroy();
  });

  it('create', async () => {
    createdArticle = await new CreateArticle(TestDataSource).execute(
      mockAnonymousArticleParams
    );

    expect(createdArticle.title).toBe(mockAnonymousArticle.title);
  });
});
