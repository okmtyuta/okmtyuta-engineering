import { FetchAllArticles } from '../FetchAllArticles'
import { TestDataSource } from '../../../../../tests/test-data-source'

describe('FetchArticles', () => {
  it('fetch', async () => {
    const articles = await new FetchAllArticles(TestDataSource).fetch()

    for (let i = 0; i < articles.articles.length; i++) {
      console.log(articles.articles[i])
    }
  })
})
