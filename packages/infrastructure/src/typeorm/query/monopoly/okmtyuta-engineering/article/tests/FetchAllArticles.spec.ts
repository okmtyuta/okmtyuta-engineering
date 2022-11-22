import { FetchAllArticles } from '../FetchAllArticles'
import { TestDataSource } from '../../../../../tests/test-data-source'

describe('FetchArticles', () => {
  it('fetch', async () => {
    const articles = await new FetchAllArticles(TestDataSource).fetch()
    console.log(articles.articles)
  })
})
