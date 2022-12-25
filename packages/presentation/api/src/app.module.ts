import { Module } from '@nestjs/common';
import { ArticleModule } from './article/article.module';
import { TagModule } from './tag/tag.module';
import { IndexModule } from './index/index.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ArticleModule, TagModule, IndexModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
