import { MigrationInterface, QueryRunner } from "typeorm";

export class Article1668679886417 implements MigrationInterface {
    name = 'Article1668679886417'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "article" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "content" text NOT NULL, CONSTRAINT "PK_40808690eb7b915046558c0f81b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "article"`);
    }

}
