import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Article } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/Article'
import { Tag } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/Tag'
import { User } from '@okmtyuta-engineering/library/lib/db/typeorm/entity/User'

export const TestDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'okmtyuta',
  password: 's#kn18k0a0',
  database: 'test',
  synchronize: true,
  logging: false,
  entities: [Article, Tag, User],
  subscribers: [],
})