import { RegisterArticleDto } from './dto/RegisterArticle.dto'
import { Article } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/Article'
import { DataSource } from 'typeorm'

interface RegisterArticleResult {
  article: Article
}

interface IRegisterArticle {
  register(params: RegisterArticleDto): Promise<RegisterArticleResult>
}

export class RegisterArticle implements IRegisterArticle {
  constructor(private dataSource: DataSource) {
    this.dataSource = dataSource
  }

  async register(params: RegisterArticleDto): Promise<RegisterArticleResult> {
    await this.dataSource.initialize()

    try {
      const articleRepository = await this.dataSource.getRepository(Article)

      const article = await articleRepository.create({
        title: params.title,
        content: params.content,
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

      return {
        article: createdArticle,
      }
    } catch (error) {
      throw Error(error)
    } finally {
      await this.dataSource.destroy()
    }
  }
}
