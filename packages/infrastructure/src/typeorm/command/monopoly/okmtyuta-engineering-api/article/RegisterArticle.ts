import { RegisterArticleDto } from './dto/RegisterArticle.dto'
import { Article } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/Article';
import { AppDataSource } from "../../../../config/data-source";
import { FetchUserById } from 'src/typeorm/query/monopoly/okmtyuta-engineering/user/FetchUserById';

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
      await dataSource.destroy()
    }
  }
}
