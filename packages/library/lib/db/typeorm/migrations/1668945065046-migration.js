"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration1668945065046 = void 0;
class migration1668945065046 {
    constructor() {
        this.name = 'migration1668945065046';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "article_tags_tag" DROP CONSTRAINT "FK_2aeba8bcd98dfe217f79ced44e4"`);
        await queryRunner.query(`ALTER TABLE "article_tags_tag" ADD CONSTRAINT "FK_2aeba8bcd98dfe217f79ced44e4" FOREIGN KEY ("tagTagId") REFERENCES "tag"("tagId") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "article_tags_tag" DROP CONSTRAINT "FK_2aeba8bcd98dfe217f79ced44e4"`);
        await queryRunner.query(`ALTER TABLE "article_tags_tag" ADD CONSTRAINT "FK_2aeba8bcd98dfe217f79ced44e4" FOREIGN KEY ("tagTagId") REFERENCES "tag"("tagId") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }
}
exports.migration1668945065046 = migration1668945065046;
//# sourceMappingURL=1668945065046-migration.js.map