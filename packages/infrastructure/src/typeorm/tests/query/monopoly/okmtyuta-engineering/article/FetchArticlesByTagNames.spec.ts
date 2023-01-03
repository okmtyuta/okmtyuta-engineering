import { FetchArticlesByTagNames } from 'src/typeorm/query/monopoly/okmtyuta-engineering/article/FetchArticlesByTagNames';
import { TestDataSource } from 'src/typeorm/tests/test-data-source';

describe('FetchArticleByTags', () => {
  it('fetch', async () => {
    const articles = await new FetchArticlesByTagNames(TestDataSource).execute({
      tags: ['1-8番目', '3-8番目'],
    });

    for (let i = 0; i < articles.length; i++) {
      console.log(articles[0].tags);
    }
  });
});
