"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAllTags = void 0;
const Tag_1 = require("@okmtyuta-engineering/library/lib/db/typeorm/entity/Tag");
const data_source_1 = require("../../../../config/data-source");
class DeleteAllTags {
    async execute() {
        const dataSource = await data_source_1.AppDataSource.initialize();
        try {
            const tagRepository = await dataSource.getRepository(Tag_1.Tag);
            const deleteResult = await tagRepository.createQueryBuilder("tag").delete().from(Tag_1.Tag).execute();
            return {
                deleteResult: deleteResult
            };
        }
        catch (error) {
            throw Error();
        }
        finally {
            await dataSource.destroy();
        }
    }
}
exports.DeleteAllTags = DeleteAllTags;
//# sourceMappingURL=DeleteAllTags.js.map