import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1668936177269 implements MigrationInterface {
    name = 'migration1668936177269'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tag_article" ("tag" smallint NOT NULL, "article" smallint NOT NULL, CONSTRAINT "PK_e629daa778611df9f542daf814a" PRIMARY KEY ("tag", "article"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5717c8b8c4d5182df5b58ca0c6" ON "tag_article" ("tag") `);
        await queryRunner.query(`CREATE INDEX "IDX_98ae82d7a9b1d3bc7516a9400c" ON "tag_article" ("article") `);
        await queryRunner.query(`ALTER TABLE "tag_article" ADD CONSTRAINT "FK_5717c8b8c4d5182df5b58ca0c6f" FOREIGN KEY ("tag") REFERENCES "tag"("tagId") ON DELETE SET NULL ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "tag_article" ADD CONSTRAINT "FK_98ae82d7a9b1d3bc7516a9400ca" FOREIGN KEY ("article") REFERENCES "article"("articleId") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tag_article" DROP CONSTRAINT "FK_98ae82d7a9b1d3bc7516a9400ca"`);
        await queryRunner.query(`ALTER TABLE "tag_article" DROP CONSTRAINT "FK_5717c8b8c4d5182df5b58ca0c6f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_98ae82d7a9b1d3bc7516a9400c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5717c8b8c4d5182df5b58ca0c6"`);
        await queryRunner.query(`DROP TABLE "tag_article"`);
    }

}
