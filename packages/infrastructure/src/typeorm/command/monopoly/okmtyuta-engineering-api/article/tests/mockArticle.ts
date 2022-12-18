import { Tag } from '@okmtyuta-engineering/library/lib/db/typeorm/entity';

interface MockArticle {
  title: string;
  content: string;
  description: string;
  postedAt: Date;
  updatedAt: Date | null;
  references: string[] | null;
  isPublic: boolean;
  isPickedUp: boolean;
  thumbnail: string | null;
  tags: Tag[];
}

export const mockAnonymousArticle: MockArticle = {
  title: 'deleteArticleByIdのためのテスト記事',
  content: 'deleteArticleByIdのためのテスト記事',
  description: 'deleteArticleByIdのためのテスト記事',
  postedAt: new Date(),
  updatedAt: null,
  references: [],
  isPublic: true,
  isPickedUp: true,
  thumbnail: null,
  tags: [],
};
