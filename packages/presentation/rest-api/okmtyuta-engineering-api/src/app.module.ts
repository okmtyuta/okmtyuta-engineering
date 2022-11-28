import { Module } from '@nestjs/common';
import { ArticleModule } from './article/article.module';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [ArticleModule, TagModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
