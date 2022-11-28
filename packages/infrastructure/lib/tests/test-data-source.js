"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const entity_1 = require("@okmtyuta-engineering/library/lib/db/typeorm/entity");
exports.TestDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'okmtyuta',
    password: 's#kn18k0a0',
    database: 'okmtyuta',
    synchronize: true,
    logging: false,
    entities: [entity_1.Article, entity_1.Tag, entity_1.User],
    subscribers: [],
});
//# sourceMappingURL=test-data-source.js.map