import { FetchArticleById } from '../FetchArticleById'
import { TestDataSource } from '../../../../../tests/test-data-source'

describe('FetchArticleById', () => {
  it('fetch', async () => {
    const article = await new FetchArticleById(TestDataSource).fetch({ articleId: '8' })

    console.log(article)
  })
})
