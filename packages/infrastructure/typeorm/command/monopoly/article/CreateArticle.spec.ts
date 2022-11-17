import { AppDataSource } from '@okmtyuta-engineering/library/lib/data-source'
import { Article } from '@okmtyuta-engineering/library/lib/entity/Article'
import { CreateArticle } from './CreateArticle'

describe('CreateArticleクラス', () => {
  const mockArticle = {
    title: "初の記事",
    content: "初投稿です!!"
  };

  it('Createメソッド', async () => {
    await AppDataSource.initialize()

    const createdArticle = (await new CreateArticle().create(mockArticle)).createdArticle;

    const response = await AppDataSource.getRepository(Article).delete({})

    await AppDataSource.destroy()

    expect(createdArticle.title).toBe(mockArticle.title);
    expect(createdArticle.content).toBe(mockArticle.content)
  })
})
