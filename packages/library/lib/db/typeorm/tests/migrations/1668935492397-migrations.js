"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrations1668935492397 = void 0;
class migrations1668935492397 {
    constructor() {
        this.name = 'migrations1668935492397';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "article_tags" ("article" smallint NOT NULL, "tag" smallint NOT NULL, CONSTRAINT "PK_c5916510a19d5c8a22645bf405c" PRIMARY KEY ("article", "tag"))`);
        await queryRunner.query(`CREATE INDEX "IDX_3473de3b179f513b79b56a6443" ON "article_tags" ("article") `);
        await queryRunner.query(`CREATE INDEX "IDX_0c2fea57cf37f97662f6b71268" ON "article_tags" ("tag") `);
        await queryRunner.query(`ALTER TABLE "article_tags" ADD CONSTRAINT "FK_3473de3b179f513b79b56a64436" FOREIGN KEY ("article") REFERENCES "article"("articleId") ON DELETE SET NULL ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "article_tags" ADD CONSTRAINT "FK_0c2fea57cf37f97662f6b712680" FOREIGN KEY ("tag") REFERENCES "tag"("tagId") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "article_tags" DROP CONSTRAINT "FK_0c2fea57cf37f97662f6b712680"`);
        await queryRunner.query(`ALTER TABLE "article_tags" DROP CONSTRAINT "FK_3473de3b179f513b79b56a64436"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0c2fea57cf37f97662f6b71268"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3473de3b179f513b79b56a6443"`);
        await queryRunner.query(`DROP TABLE "article_tags"`);
    }
}
exports.migrations1668935492397 = migrations1668935492397;
//# sourceMappingURL=1668935492397-migrations.js.map