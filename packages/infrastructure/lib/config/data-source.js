"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const Article_1 = require("@okmtyuta-engineering/library/lib/db/typeorm/entity/Article");
const Tag_1 = require("@okmtyuta-engineering/library/lib/db/typeorm/entity/Tag");
const typeorm_1 = require("typeorm");
const User_1 = require("@okmtyuta-engineering/library/lib/db/typeorm/entity/User");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'okmtyuta',
    password: 's#kn18k0a0',
    database: 'okmtyuta',
    synchronize: true,
    logging: false,
    entities: [Article_1.Article, Tag_1.Tag, User_1.User],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map