import 'reflect-metadata';
import { DataSource } from 'typeorm';
import {
  Article,
  User,
  Tag,
} from '@okmtyuta-engineering/library/lib/db/typeorm/entity';
import { env } from '@okmtyuta-engineering/library/lib/constant/env';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host:
    process.env.ENVIRONMENT === 'production'
      ? process.env.PRODUCTION_DATABASE_HOST
      : 'localhost',
  port: Number(env.POSTGRES_PORT) || 5432,
  username: env.POSTGRES_USER || 'okmtyuta',
  password: env.POSTGRES_PASSWORD || 's#kn18k0a0',
  database: env.POSTGRES_DB || 'okmtyuta',
  synchronize: false,
  logging: false,
  entities: [Article, Tag, User],
  subscribers: [],
});
