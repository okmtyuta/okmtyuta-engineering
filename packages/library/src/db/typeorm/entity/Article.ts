import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  title!: string;

  @Column("text")
  content!: string;
}