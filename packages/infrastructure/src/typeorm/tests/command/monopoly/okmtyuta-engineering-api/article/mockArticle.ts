import { Tag, User } from '@okmtyuta-engineering/library/lib/db/typeorm/entity';

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
  user: User;
}

export const mockAnonymousArticle: MockArticle = {
  title: 'テスト記事',
  content: 'これはテスト記事です',
  description: 'これはテスト記事です',
  postedAt: new Date(),
  updatedAt: null,
  references: [],
  isPublic: true,
  isPickedUp: true,
  thumbnail: null,
  tags: [],
  user: null,
};
