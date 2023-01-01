import {
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  JoinTable,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Tag } from './Tag';
import { User } from './User';

@Entity()
export class Article {
  @PrimaryGeneratedColumn({
    type: 'smallint',
    comment: '記事のID',
  })
  readonly articleId!: string;

  @Column({
    type: 'text',
    comment: '記事のタイトル',
  })
  title!: string;

  @Column({
    type: 'text',
    array: true,
    comment: '記事の段落',
  })
  paragraphs!: string[];

  @Column({
    type: 'text',
    comment: '記事の概要',
  })
  description!: string;

  @Column({
    type: 'date',
    comment: '記事の投稿日',
  })
  postedAt!: Date;

  @Column({
    type: 'date',
    comment: '記事の更新日',
    nullable: true,
  })
  updatedAt: Date | null;

  @Column({
    type: 'text',
    array: true,
    comment: '記事の参考文献',
    nullable: true,
  })
  references: string[] | null;

  @Column({
    type: 'boolean',
    comment: '記事の公開設定',
    nullable: true,
  })
  isPublic!: boolean;

  @Column({
    type: 'boolean',
    comment: '記事のピックアップ設定',
  })
  isPickedUp!: boolean;

  @Column({
    type: 'text',
    comment: '記事のサムネイルへのパス',
    nullable: true,
  })
  thumbnail: string | null;

  @ManyToMany(() => Tag, (tag) => tag.articles, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  @JoinTable()
  tags: Tag[];

  @ManyToOne(() => User, (user) => user.articles, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  @JoinColumn({ name: 'userId' })
  user: User;
}
