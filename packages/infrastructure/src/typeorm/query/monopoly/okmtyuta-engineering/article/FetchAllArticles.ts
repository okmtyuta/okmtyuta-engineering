import { Article } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/Article'
import { DataSource } from 'typeorm'

// 返り値の型定義
interface FetchAllArticlesResult {
  articles: Article[]
}

// クラスのexecuteメソッドの型定義
interface IFetchAllArticles {
  fetch(): Promise<FetchAllArticlesResult>
}

// Fetchクラス本体
export class FetchAllArticles implements IFetchAllArticles {
  constructor(private dataSource: DataSource) {
    this.dataSource = dataSource
  }

  async fetch(): Promise<FetchAllArticlesResult> {
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

      return {
        articles: articles,
      }
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
