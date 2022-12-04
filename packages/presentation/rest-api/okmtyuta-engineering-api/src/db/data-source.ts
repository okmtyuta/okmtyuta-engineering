import 'reflect-metadata';
import { DataSource } from 'typeorm';
import {
  Article,
  User,
  Tag,
} from '@okmtyuta-engineering/library/lib/db/typeorm/entity';
import { env } from 'src/env';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'database',
  port: env.POSTGRES_PORT,
  username: env.POSTGRES_USER,
  password: env.POSTGRES_PASSWORD,
  database: env.POSTGRES_DB,
  synchronize: false,
  logging: false,
  entities: [Article, Tag, User],
  subscribers: [],
});
