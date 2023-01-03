import { FetchArticleById } from 'src/typeorm/query/monopoly/okmtyuta-engineering/article/FetchArticleById'
import { TestDataSource } from 'src/typeorm/tests/test-data-source';

describe('FetchArticleById', () => {
  it('fetch', async () => {
    const article = await new FetchArticleById(TestDataSource).execute({ articleId: '8' })

    console.log(article)
  })
})
