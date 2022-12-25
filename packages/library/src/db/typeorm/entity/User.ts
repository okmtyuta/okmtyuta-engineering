import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  JoinTable,
} from 'typeorm';
import { Article } from './Article';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'smallint',
    comment: 'ユーザーのID',
  })
  readonly userId!: string;

  @Column({
    type: 'text',
    comment: 'ユーザーの名前',
  })
  name!: string;

  @Column({
    type: 'text',
    comment: 'メールアドレス',
  })
  mailAddress!: string;

  @Column({
    type: 'text',
    comment: 'パスワード',
  })
  password!: string;

  @OneToMany(() => Article, (article) => article.user, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  articles: Article[];
}
