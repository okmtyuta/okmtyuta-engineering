import { Article } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/Article'
import { DataSource } from 'typeorm'
import { FetchArticlesByTagNamesDto } from './dto/FetchArticlesByTagNamesDto'

interface IFetchArticlesByTagNames {
  execute(params: FetchArticlesByTagNamesDto): Promise<Article[]>
}

export class FetchArticlesByTagNames implements IFetchArticlesByTagNames {
  constructor(private dataSource: DataSource) {
    this.dataSource = dataSource
  }

  async execute(params: FetchArticlesByTagNamesDto): Promise<Article[]> {
    await this.dataSource.initialize()

    try {
      const articleRepository = await this.dataSource.getRepository(Article)

      const articles = await articleRepository
        .createQueryBuilder('articles')
        .leftJoinAndSelect('articles.tags', 'tag')
        .where('tag.name IN (:...tags)', { tags: params.tags }) // 指定したタグを含むものを抽出
        .getMany()
      
      const articleFiltered = articles.filter((article) => {
        // 指定したタグを全て含むものを抽出
        // TODO: これもquery builderで処理できるといいね
        return article.tags.length >= params.tags.length
      })
        

      return articleFiltered
    } catch (error) {
      console.log(error)
      throw new Error(error)
    } finally {
      this.dataSource.destroy()
    }
  }
}
