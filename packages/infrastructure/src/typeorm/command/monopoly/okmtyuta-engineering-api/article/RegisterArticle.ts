import { RegisterArticleDto } from './dto/RegisterArtilce.dto'
import { Article } from '@okmtyuta-engineering/library/lib/entity/Article';
import { AppDataSource } from "../../../../config/data-source";

interface RegisterArticleResult {
  article: Article
}

interface IRegisterArticle {
  register(params: RegisterArticleDto): Promise<RegisterArticleResult>
}

export class RegisterArticle implements IRegisterArticle {
  async register(params: RegisterArticleDto): Promise<RegisterArticleResult> {
    const dataSource = await AppDataSource.initialize()

    try {
      const articleRepository = await dataSource.getRepository(Article)

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
        tags: null,
      })

      const createdArticle = await articleRepository.save(article)

      return {
        article: createdArticle,
      }
    } catch (error) {
      throw Error()
    } finally {
      await dataSource.destroy()
    }
  }
}
