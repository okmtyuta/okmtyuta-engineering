"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const env_1 = require("src/constant/env");
const typeorm_1 = require("typeorm");
const entity_1 = require("./entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: env_1.env.POSTGRES_PORT || 5432,
    username: env_1.env.POSTGRES_USER || 'okmtyuta',
    password: env_1.env.POSTGRES_PASSWORD || 's#kn18k0a0',
    database: env_1.env.POSTGRES_DB || 'okmtyuta',
    synchronize: true,
    logging: false,
    entities: [entity_1.Article, entity_1.Tag, entity_1.User],
    migrations: [__dirname + '/migrations/*.ts'],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map