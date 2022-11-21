import { Column, Entity, ManyToMany, PrimaryGeneratedColumn, JoinTable } from 'typeorm'
import { Article } from './Article'

@Entity()
export class Tag {
  @PrimaryGeneratedColumn({
    type: 'smallint',
    comment: 'タグのID',
  })
  readonly tagId!: string

  @Column({
    type: 'text',
    comment: 'タグの名前',
  })
  name!: string

  @ManyToMany(() => Article, (article) => article.tags, {
    onDelete: "CASCADE",
    nullable: true,
  })
  articles: Article[];
}
