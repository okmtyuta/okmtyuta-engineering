import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1671794912040 implements MigrationInterface {
    name = 'migration1671794912040'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "article" RENAME COLUMN "content" TO "paragraphs"`);
        await queryRunner.query(`COMMENT ON COLUMN "article"."paragraphs" IS '記事の段落'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "article"."paragraphs" IS '記事の内容'`);
        await queryRunner.query(`ALTER TABLE "article" RENAME COLUMN "paragraphs" TO "content"`);
    }

}
