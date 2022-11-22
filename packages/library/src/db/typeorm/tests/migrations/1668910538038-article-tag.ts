import { MigrationInterface, QueryRunner } from "typeorm";

export class articleTag1668910538038 implements MigrationInterface {
    name = 'articleTag1668910538038'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tag" ("tagId" SMALLSERIAL NOT NULL, "name" text NOT NULL, CONSTRAINT "PK_42bce6149e744e5cb7b11893348" PRIMARY KEY ("tagId")); COMMENT ON COLUMN "tag"."tagId" IS 'タグのID'; COMMENT ON COLUMN "tag"."name" IS 'タグの名前'`);
        await queryRunner.query(`ALTER TABLE "article" DROP CONSTRAINT "PK_40808690eb7b915046558c0f81b"`);
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "article" ADD "articleId" SMALLSERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "article" ADD CONSTRAINT "PK_ee6426f930999e7fcba40f6c574" PRIMARY KEY ("articleId")`);
        await queryRunner.query(`COMMENT ON COLUMN "article"."articleId" IS '記事のID'`);
        await queryRunner.query(`ALTER TABLE "article" ADD "description" text NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "article"."description" IS '記事の概要'`);
        await queryRunner.query(`ALTER TABLE "article" ADD "postedAt" date NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "article"."postedAt" IS '記事の投稿日'`);
        await queryRunner.query(`ALTER TABLE "article" ADD "updatedAt" date NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "article"."updatedAt" IS '記事の更新日'`);
        await queryRunner.query(`ALTER TABLE "article" ADD "references" text array NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "article"."references" IS '記事の参考文献'`);
        await queryRunner.query(`ALTER TABLE "article" ADD "isPublic" boolean NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "article"."isPublic" IS '記事の公開設定'`);
        await queryRunner.query(`ALTER TABLE "article" ADD "isPickedUp" boolean NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "article"."isPickedUp" IS '記事のピックアップ設定'`);
        await queryRunner.query(`ALTER TABLE "article" ADD "thumbnail" text NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "article"."thumbnail" IS '記事のサムネイルへのパス'`);
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "article" ADD "title" text NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "article"."title" IS '記事のタイトル'`);
        await queryRunner.query(`COMMENT ON COLUMN "article"."content" IS '記事の内容'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "article"."content" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "article"."title" IS '記事のタイトル'`);
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "article" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "article"."thumbnail" IS '記事のサムネイルへのパス'`);
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "thumbnail"`);
        await queryRunner.query(`COMMENT ON COLUMN "article"."isPickedUp" IS '記事のピックアップ設定'`);
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "isPickedUp"`);
        await queryRunner.query(`COMMENT ON COLUMN "article"."isPublic" IS '記事の公開設定'`);
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "isPublic"`);
        await queryRunner.query(`COMMENT ON COLUMN "article"."references" IS '記事の参考文献'`);
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "references"`);
        await queryRunner.query(`COMMENT ON COLUMN "article"."updatedAt" IS '記事の更新日'`);
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`COMMENT ON COLUMN "article"."postedAt" IS '記事の投稿日'`);
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "postedAt"`);
        await queryRunner.query(`COMMENT ON COLUMN "article"."description" IS '記事の概要'`);
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "description"`);
        await queryRunner.query(`COMMENT ON COLUMN "article"."articleId" IS '記事のID'`);
        await queryRunner.query(`ALTER TABLE "article" DROP CONSTRAINT "PK_ee6426f930999e7fcba40f6c574"`);
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "articleId"`);
        await queryRunner.query(`ALTER TABLE "article" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "article" ADD CONSTRAINT "PK_40808690eb7b915046558c0f81b" PRIMARY KEY ("id")`);
        await queryRunner.query(`DROP TABLE "tag"`);
    }

}
