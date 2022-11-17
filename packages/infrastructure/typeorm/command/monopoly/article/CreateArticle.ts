import { Article } from "@okmtyuta-engineering/library/lib/entity/Article"
import { AppDataSource } from "@okmtyuta-engineering/library/lib/data-source"

export interface ArticleInfo {
  title: string;
  content: string;
}

export interface CreatedArticle {
  createdArticle: Article;
}

export interface ICreateArticle {
  create(articleInfo: ArticleInfo)
}

export class CreateArticle implements ICreateArticle {
  async create(articleInfo: ArticleInfo) {
    const article = await new Article()

    article.title = articleInfo.title;
    article.content = articleInfo.content
    
    const articleRepository = await AppDataSource.getRepository(Article);
    const createdArticle = await articleRepository.save(article)

    return {
      createdArticle: createdArticle
    }
  }

}