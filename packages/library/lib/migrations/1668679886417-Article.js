"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Article1668679886417 = void 0;
class Article1668679886417 {
    constructor() {
        this.name = 'Article1668679886417';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "article" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "content" text NOT NULL, CONSTRAINT "PK_40808690eb7b915046558c0f81b" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "article"`);
    }
}
exports.Article1668679886417 = Article1668679886417;
//# sourceMappingURL=1668679886417-Article.js.map