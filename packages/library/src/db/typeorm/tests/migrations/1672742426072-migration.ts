import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1672742426072 implements MigrationInterface {
    name = 'migration1672742426072'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tag" ("tagId" SMALLSERIAL NOT NULL, "name" text NOT NULL, CONSTRAINT "PK_42bce6149e744e5cb7b11893348" PRIMARY KEY ("tagId")); COMMENT ON COLUMN "tag"."tagId" IS 'タグのID'; COMMENT ON COLUMN "tag"."name" IS 'タグの名前'`);
        await queryRunner.query(`CREATE TABLE "user" ("userId" SMALLSERIAL NOT NULL, "name" text NOT NULL, "mailAddress" text NOT NULL, "password" text NOT NULL, CONSTRAINT "PK_d72ea127f30e21753c9e229891e" PRIMARY KEY ("userId")); COMMENT ON COLUMN "user"."userId" IS 'ユーザーのID'; COMMENT ON COLUMN "user"."name" IS 'ユーザーの名前'; COMMENT ON COLUMN "user"."mailAddress" IS 'メールアドレス'; COMMENT ON COLUMN "user"."password" IS 'パスワード'`);
        await queryRunner.query(`CREATE TABLE "article" ("articleId" SMALLSERIAL NOT NULL, "title" text NOT NULL, "paragraphs" text array NOT NULL, "description" text NOT NULL, "postedAt" date NOT NULL, "updatedAt" date, "references" text array, "isPublic" boolean, "isPickedUp" boolean NOT NULL, "thumbnail" text, "userId" smallint, CONSTRAINT "PK_ee6426f930999e7fcba40f6c574" PRIMARY KEY ("articleId")); COMMENT ON COLUMN "article"."articleId" IS '記事のID'; COMMENT ON COLUMN "article"."title" IS '記事のタイトル'; COMMENT ON COLUMN "article"."paragraphs" IS '記事の段落'; COMMENT ON COLUMN "article"."description" IS '記事の概要'; COMMENT ON COLUMN "article"."postedAt" IS '記事の投稿日'; COMMENT ON COLUMN "article"."updatedAt" IS '記事の更新日'; COMMENT ON COLUMN "article"."references" IS '記事の参考文献'; COMMENT ON COLUMN "article"."isPublic" IS '記事の公開設定'; COMMENT ON COLUMN "article"."isPickedUp" IS '記事のピックアップ設定'; COMMENT ON COLUMN "article"."thumbnail" IS '記事のサムネイルへのパス'; COMMENT ON COLUMN "article"."userId" IS 'ユーザーのID'`);
        await queryRunner.query(`CREATE TABLE "article_tags_tag" ("articleArticleId" smallint NOT NULL, "tagTagId" smallint NOT NULL, CONSTRAINT "PK_3da7719188b833ad27137660b53" PRIMARY KEY ("articleArticleId", "tagTagId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_06bf3d674fc4b376917620b0ed" ON "article_tags_tag" ("articleArticleId") `);
        await queryRunner.query(`CREATE INDEX "IDX_2aeba8bcd98dfe217f79ced44e" ON "article_tags_tag" ("tagTagId") `);
        await queryRunner.query(`ALTER TABLE "article" ADD CONSTRAINT "FK_636f17dadfea1ffb4a412296a28" FOREIGN KEY ("userId") REFERENCES "user"("userId") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "article_tags_tag" ADD CONSTRAINT "FK_06bf3d674fc4b376917620b0edd" FOREIGN KEY ("articleArticleId") REFERENCES "article"("articleId") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "article_tags_tag" ADD CONSTRAINT "FK_2aeba8bcd98dfe217f79ced44e4" FOREIGN KEY ("tagTagId") REFERENCES "tag"("tagId") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "article_tags_tag" DROP CONSTRAINT "FK_2aeba8bcd98dfe217f79ced44e4"`);
        await queryRunner.query(`ALTER TABLE "article_tags_tag" DROP CONSTRAINT "FK_06bf3d674fc4b376917620b0edd"`);
        await queryRunner.query(`ALTER TABLE "article" DROP CONSTRAINT "FK_636f17dadfea1ffb4a412296a28"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2aeba8bcd98dfe217f79ced44e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_06bf3d674fc4b376917620b0ed"`);
        await queryRunner.query(`DROP TABLE "article_tags_tag"`);
        await queryRunner.query(`DROP TABLE "article"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "tag"`);
    }

}
