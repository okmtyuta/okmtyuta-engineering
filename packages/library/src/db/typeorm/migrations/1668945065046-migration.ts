import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1668945065046 implements MigrationInterface {
    name = 'migration1668945065046'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "article_tags_tag" DROP CONSTRAINT "FK_2aeba8bcd98dfe217f79ced44e4"`);
        await queryRunner.query(`ALTER TABLE "article_tags_tag" ADD CONSTRAINT "FK_2aeba8bcd98dfe217f79ced44e4" FOREIGN KEY ("tagTagId") REFERENCES "tag"("tagId") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "article_tags_tag" DROP CONSTRAINT "FK_2aeba8bcd98dfe217f79ced44e4"`);
        await queryRunner.query(`ALTER TABLE "article_tags_tag" ADD CONSTRAINT "FK_2aeba8bcd98dfe217f79ced44e4" FOREIGN KEY ("tagTagId") REFERENCES "tag"("tagId") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

}
