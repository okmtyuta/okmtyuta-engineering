import { TestDataSource } from '../../../../../tests/test-data-source'
import { FetchArticlesByTagNames } from '../FetchArticlesByTagNames'

describe('FetchArticleByTags', () => {
  it('fetch', async () => {
    const articles = await new FetchArticlesByTagNames(TestDataSource).execute({
      tags: ["1-8番目", "3-8番目"]
    })

    for (let i = 0; i < articles.articles.length; i++) {
      console.log(articles.articles[0].tags)
    }
  })
})
