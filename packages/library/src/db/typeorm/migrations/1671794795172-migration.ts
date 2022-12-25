import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1671794795172 implements MigrationInterface {
    name = 'migration1671794795172'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "content"`);
        await queryRunner.query(`ALTER TABLE "article" ADD "content" text array NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "article"."content" IS '記事の内容'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "article"."content" IS '記事の内容'`);
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "content"`);
        await queryRunner.query(`ALTER TABLE "article" ADD "content" text NOT NULL`);
    }

}
