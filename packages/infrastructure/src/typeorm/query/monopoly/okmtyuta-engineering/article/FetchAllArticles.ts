import { Article } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/Article'
import { DataSource } from 'typeorm'

// クラスのexecuteメソッドの型定義
interface IFetchAllArticles {
  execute(): Promise<Article[]>
}

// Fetchクラス本体
export class FetchAllArticles implements IFetchAllArticles {
  constructor(private dataSource: DataSource) {
    this.dataSource = dataSource
  }

  async execute(): Promise<Article[]> {
    // データベースとの接続
    await this.dataSource.initialize()

    try {
      // レポジトリの取得
      const articleRepository = await this.dataSource.getRepository(Article)

      // すべてのarticleを取得
      const articles = await articleRepository.createQueryBuilder('article')
        .leftJoinAndSelect('article.tags', 'tag')
        .leftJoinAndSelect('article.user', 'user')
        .getMany()

      return articles
    } catch (error) {
      // TODO: Errorをカスタムエラーにしたい
      console.log(error)
      new Error(error)
    } finally {
      // データベースとの接続を解除
      await this.dataSource.destroy()
    }
  }
}
