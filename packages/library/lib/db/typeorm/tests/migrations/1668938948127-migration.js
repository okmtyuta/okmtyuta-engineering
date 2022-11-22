"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration1668938948127 = void 0;
class migration1668938948127 {
    constructor() {
        this.name = 'migration1668938948127';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "tag_articles_article" ("tagTagId" smallint NOT NULL, "articleArticleId" smallint NOT NULL, CONSTRAINT "PK_24e6872999156a0f13b6c1a0ce1" PRIMARY KEY ("tagTagId", "articleArticleId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a2d0685f1424d081ecc1391687" ON "tag_articles_article" ("tagTagId") `);
        await queryRunner.query(`CREATE INDEX "IDX_2b8548b535a5ae24bddac43377" ON "tag_articles_article" ("articleArticleId") `);
        await queryRunner.query(`ALTER TABLE "tag_articles_article" ADD CONSTRAINT "FK_a2d0685f1424d081ecc1391687d" FOREIGN KEY ("tagTagId") REFERENCES "tag"("tagId") ON DELETE SET NULL ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "tag_articles_article" ADD CONSTRAINT "FK_2b8548b535a5ae24bddac43377b" FOREIGN KEY ("articleArticleId") REFERENCES "article"("articleId") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "tag_articles_article" DROP CONSTRAINT "FK_2b8548b535a5ae24bddac43377b"`);
        await queryRunner.query(`ALTER TABLE "tag_articles_article" DROP CONSTRAINT "FK_a2d0685f1424d081ecc1391687d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2b8548b535a5ae24bddac43377"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a2d0685f1424d081ecc1391687"`);
        await queryRunner.query(`DROP TABLE "tag_articles_article"`);
    }
}
exports.migration1668938948127 = migration1668938948127;
//# sourceMappingURL=1668938948127-migration.js.map