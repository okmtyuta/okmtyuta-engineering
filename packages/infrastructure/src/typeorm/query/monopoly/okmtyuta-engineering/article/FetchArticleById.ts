import { Article } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/Article';
import { DataSource } from 'typeorm';
import { FetchArticleByIdDto } from './dto/FetchArticleById.dto';

interface IFetchArticleById {
  execute(params: FetchArticleByIdDto): Promise<Article>;
}

export class FetchArticleById implements IFetchArticleById {
  constructor(private dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  async execute(params: FetchArticleByIdDto): Promise<Article> {
    await this.dataSource.initialize();
    try {
      const articleRepository = await this.dataSource.getRepository(Article);
      const article = await articleRepository.findOne({
        where: {
          articleId: params.articleId,
        },
      });

      if (!article) {
        throw Error(`NOT FOUND ARTICLE BY ID ${params.articleId}`);
      }

      return article;
    } catch (error) {
      console.log(error);
      new Error(error);
    } finally {
      await this.dataSource.destroy();
    }
  }
}
