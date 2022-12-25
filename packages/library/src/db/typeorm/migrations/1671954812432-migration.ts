import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1671954812432 implements MigrationInterface {
    name = 'migration1671954812432'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "mailAddress" text NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."mailAddress" IS 'メールアドレス'`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" text NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."password" IS 'パスワード'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "user"."password" IS 'パスワード'`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."mailAddress" IS 'メールアドレス'`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mailAddress"`);
    }

}
