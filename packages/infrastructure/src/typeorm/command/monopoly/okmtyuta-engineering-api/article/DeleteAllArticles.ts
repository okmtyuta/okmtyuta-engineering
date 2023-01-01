import { Article } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/Article';
import { DataSource, DeleteResult } from 'typeorm';

interface IDeleteAllArticle {
  execute(): Promise<DeleteResult>;
}

export class DeleteAllArticle implements IDeleteAllArticle {
  constructor(private dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  async execute(): Promise<DeleteResult> {
    await this.dataSource.initialize();

    try {
      const articleRepository = await this.dataSource.getRepository(Article);
      const deleteResult = await articleRepository
        .createQueryBuilder('article')
        .delete()
        .from(Article)
        .execute();
      return deleteResult;
    } catch (error) {
      throw Error();
    } finally {
      await this.dataSource.destroy();
    }
  }
}
