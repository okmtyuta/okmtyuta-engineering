import { FetchUserById } from 'src/typeorm/query/monopoly/okmtyuta-engineering/user/FetchUserById'
import { RegisterArticle } from '../RegisterArticle'
import { TestDataSource } from '../../../../../tests/test-data-source'
import { FetchAllTags } from 'src/typeorm/query/monopoly/okmtyuta-engineering/tag/FetchAllTags'

describe('RegisterArticle', () => {
  let mockArticle

  beforeEach(async () => {
    const user = (await new FetchUserById(TestDataSource).execute({ userId: '1' })).user

    mockArticle = {
      title: 'テスト記事',
      content: 'テストコンテント',
      description: 'これはテスト記事です',
      references: null,
      isPublic: true,
      thumbnail: null,
      tags: [],
      user: user,
    }
  })

  it('register', async () => {
    const user = (await new FetchUserById(TestDataSource).execute({ userId: '1' })).user
    const tags = (await new FetchAllTags(TestDataSource).execute()).tags
    const articles = []
    for (let i = 0; i < 9; i++) {
      const article = await new RegisterArticle(TestDataSource).register({
        title: 'テスト記事',
        content: 'テストコンテント',
        description: 'これはテスト記事です',
        references: null,
        isPublic: true,
        thumbnail: null,
        tags: [tags[i], tags[i + 10]],
        user: user,
      })

      articles.push(article)
      console.log(article.article.tags)
    }
    // console.log(articles)
  })
})
