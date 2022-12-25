import 'reflect-metadata';
import { env } from '../../constant/env';
import { DataSource } from 'typeorm';
import { Article, Tag, User } from './entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: env.POSTGRES_PORT || 5432,
  username: env.POSTGRES_USER || 'okmtyuta',
  password: env.POSTGRES_PASSWORD || 's#kn18k0a0',
  database: env.POSTGRES_DB || 'okmtyuta',
  synchronize: true,
  logging: false,
  entities: [Article, Tag, User],
  migrations: [__dirname + '/migrations/*.ts'],
  subscribers: [],
});
