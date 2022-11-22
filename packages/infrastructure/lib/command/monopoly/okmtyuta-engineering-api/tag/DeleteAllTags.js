"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAllTags = void 0;
const Tag_1 = require("@okmtyuta-engineering/library/lib/db/typeorm/entity/Tag");
class DeleteAllTags {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.dataSource = dataSource;
    }
    async execute() {
        await this.dataSource.initialize();
        try {
            const tagRepository = await this.dataSource.getRepository(Tag_1.Tag);
            const deleteResult = await tagRepository.createQueryBuilder('tag').delete().from(Tag_1.Tag).execute();
            return {
                deleteResult: deleteResult,
            };
        }
        catch (error) {
            throw Error();
        }
        finally {
            await this.dataSource.destroy();
        }
    }
}
exports.DeleteAllTags = DeleteAllTags;
//# sourceMappingURL=DeleteAllTags.js.map