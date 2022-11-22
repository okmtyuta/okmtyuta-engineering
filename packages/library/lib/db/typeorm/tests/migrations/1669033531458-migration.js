"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration1669033531458 = void 0;
class migration1669033531458 {
    constructor() {
        this.name = 'migration1669033531458';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" ("userId" SMALLSERIAL NOT NULL, "name" text NOT NULL, CONSTRAINT "PK_d72ea127f30e21753c9e229891e" PRIMARY KEY ("userId")); COMMENT ON COLUMN "user"."userId" IS 'ユーザーのID'; COMMENT ON COLUMN "user"."name" IS 'ユーザーの名前'`);
        await queryRunner.query(`ALTER TABLE "article" ADD "userId" smallint NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "article"."userId" IS 'ユーザーのID'`);
        await queryRunner.query(`ALTER TABLE "article" ADD CONSTRAINT "FK_636f17dadfea1ffb4a412296a28" FOREIGN KEY ("userId") REFERENCES "user"("userId") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "article" DROP CONSTRAINT "FK_636f17dadfea1ffb4a412296a28"`);
        await queryRunner.query(`COMMENT ON COLUMN "article"."userId" IS 'ユーザーのID'`);
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "userId"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
exports.migration1669033531458 = migration1669033531458;
//# sourceMappingURL=1669033531458-migration.js.map