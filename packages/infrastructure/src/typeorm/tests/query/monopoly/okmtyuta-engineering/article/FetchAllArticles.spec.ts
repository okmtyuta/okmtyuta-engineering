import { FetchAllArticles } from 'src/typeorm/query/monopoly/okmtyuta-engineering/article/FetchAllArticles'
import { TestDataSource } from 'src/typeorm/tests/test-data-source';

describe('FetchArticles', () => {
  it('fetch', async () => {
    const articles = await new FetchAllArticles(TestDataSource).execute()

    for (let i = 0; i < articles.length; i++) {
      console.log(articles[i])
    }
  })
})
