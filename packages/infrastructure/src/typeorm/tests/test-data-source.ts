import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Article, Tag, User } from '@okmtyuta-engineering/library/lib/db/typeorm/entity'

export const TestDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'test',
  password: 'test',
  database: 'test',
  synchronize: true,
  logging: false,
  entities: [Article, Tag, User],
  subscribers: [],
})