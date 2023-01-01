import { DeleteArticleById } from 'src/typeorm/command/monopoly/okmtyuta-engineering-api/article/DeleteArticleById';
import { TestDataSource } from 'src/typeorm/tests/test-data-source';
import { Article } from '@okmtyuta-engineering/library/lib/db/typeorm/entity';
import { Repository } from 'typeorm';
import { mockAnonymousArticle } from './mockArticle';

describe('DeleteArticleById', () => {
  let createdArticle: Article;
  let targetArticleId: string;
  let articleRepository: Repository<Article>;

  beforeEach(async () => {
    await TestDataSource.initialize();
    articleRepository = await TestDataSource.getRepository(Article);
    const article = await articleRepository.create(mockAnonymousArticle);
    createdArticle = await articleRepository.save(article);
    targetArticleId = createdArticle.articleId;
    await TestDataSource.destroy();
  });

  afterEach(async () => {
    await TestDataSource.initialize();
    await articleRepository.delete({
      articleId: targetArticleId,
    });
    await TestDataSource.destroy();
  });

  it('execute', async () => {
    const deleteResult = await new DeleteArticleById(TestDataSource).execute({
      articleId: targetArticleId,
    });
    expect(deleteResult).toBeDefined();
  });
});
