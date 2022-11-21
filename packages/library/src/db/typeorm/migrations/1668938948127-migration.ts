import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1668938948127 implements MigrationInterface {
    name = 'migration1668938948127'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tag_articles_article" ("tagTagId" smallint NOT NULL, "articleArticleId" smallint NOT NULL, CONSTRAINT "PK_24e6872999156a0f13b6c1a0ce1" PRIMARY KEY ("tagTagId", "articleArticleId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a2d0685f1424d081ecc1391687" ON "tag_articles_article" ("tagTagId") `);
        await queryRunner.query(`CREATE INDEX "IDX_2b8548b535a5ae24bddac43377" ON "tag_articles_article" ("articleArticleId") `);
        await queryRunner.query(`ALTER TABLE "tag_articles_article" ADD CONSTRAINT "FK_a2d0685f1424d081ecc1391687d" FOREIGN KEY ("tagTagId") REFERENCES "tag"("tagId") ON DELETE SET NULL ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "tag_articles_article" ADD CONSTRAINT "FK_2b8548b535a5ae24bddac43377b" FOREIGN KEY ("articleArticleId") REFERENCES "article"("articleId") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tag_articles_article" DROP CONSTRAINT "FK_2b8548b535a5ae24bddac43377b"`);
        await queryRunner.query(`ALTER TABLE "tag_articles_article" DROP CONSTRAINT "FK_a2d0685f1424d081ecc1391687d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2b8548b535a5ae24bddac43377"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a2d0685f1424d081ecc1391687"`);
        await queryRunner.query(`DROP TABLE "tag_articles_article"`);
    }

}
