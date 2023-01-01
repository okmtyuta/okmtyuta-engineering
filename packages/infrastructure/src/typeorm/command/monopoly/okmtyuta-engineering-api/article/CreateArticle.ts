import { CreateArticleDto } from './dto/CreateArticle.dto'
import { Article } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/Article'
import { DataSource } from 'typeorm'

interface ICreateArticle {
  execute(params: CreateArticleDto): Promise<Article>
}

export class CreateArticle implements ICreateArticle {
  constructor(private dataSource: DataSource) {
    this.dataSource = dataSource
  }

  async execute(params: CreateArticleDto): Promise<Article> {
    await this.dataSource.initialize()

    try {
      const articleRepository = await this.dataSource.getRepository(Article)

      const article = await articleRepository.create({
        title: params.title,
        paragraphs: params.paragraphs,
        description: params.description,
        references: params.references,
        isPublic: params.isPublic,
        thumbnail: params.thumbnail,
        postedAt: new Date(),
        updatedAt: null,
        isPickedUp: false,
        tags: params.tags,
        user: params.user,
      })

      const createdArticle = await articleRepository.save(article)

      return createdArticle
    } catch (error) {
      throw Error(error)
    } finally {
      await this.dataSource.destroy()
    }
  }
}
