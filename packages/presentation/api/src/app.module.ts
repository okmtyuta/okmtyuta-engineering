import { Module } from '@nestjs/common';
import { ArticleModule } from './article/article.module';
import { TagModule } from './tag/tag.module';
import { IndexModule } from './index/index.module';

@Module({
  imports: [ArticleModule, TagModule, IndexModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
