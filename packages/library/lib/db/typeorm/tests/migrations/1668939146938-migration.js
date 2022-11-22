"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration1668939146938 = void 0;
class migration1668939146938 {
    constructor() {
        this.name = 'migration1668939146938';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "article_tags_tag" ("articleArticleId" smallint NOT NULL, "tagTagId" smallint NOT NULL, CONSTRAINT "PK_3da7719188b833ad27137660b53" PRIMARY KEY ("articleArticleId", "tagTagId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_06bf3d674fc4b376917620b0ed" ON "article_tags_tag" ("articleArticleId") `);
        await queryRunner.query(`CREATE INDEX "IDX_2aeba8bcd98dfe217f79ced44e" ON "article_tags_tag" ("tagTagId") `);
        await queryRunner.query(`ALTER TABLE "article_tags_tag" ADD CONSTRAINT "FK_06bf3d674fc4b376917620b0edd" FOREIGN KEY ("articleArticleId") REFERENCES "article"("articleId") ON DELETE SET NULL ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "article_tags_tag" ADD CONSTRAINT "FK_2aeba8bcd98dfe217f79ced44e4" FOREIGN KEY ("tagTagId") REFERENCES "tag"("tagId") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "article_tags_tag" DROP CONSTRAINT "FK_2aeba8bcd98dfe217f79ced44e4"`);
        await queryRunner.query(`ALTER TABLE "article_tags_tag" DROP CONSTRAINT "FK_06bf3d674fc4b376917620b0edd"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2aeba8bcd98dfe217f79ced44e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_06bf3d674fc4b376917620b0ed"`);
        await queryRunner.query(`DROP TABLE "article_tags_tag"`);
    }
}
exports.migration1668939146938 = migration1668939146938;
//# sourceMappingURL=1668939146938-migration.js.map