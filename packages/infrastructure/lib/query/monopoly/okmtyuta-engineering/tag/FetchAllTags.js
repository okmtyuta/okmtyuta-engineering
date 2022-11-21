"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchAllTags = void 0;
const Tag_1 = require("@okmtyuta-engineering/library/lib/db/typeorm/entity/Tag");
const data_source_1 = require("../../../../config/data-source");
class FetchAllTags {
    async execute() {
        const dataSource = await data_source_1.AppDataSource.initialize();
        try {
            const tagRepository = await dataSource.getRepository(Tag_1.Tag);
            const tags = await tagRepository.find();
            return {
                tags: tags,
            };
        }
        catch (error) {
        }
        finally {
            await dataSource.destroy();
        }
    }
}
exports.FetchAllTags = FetchAllTags;
//# sourceMappingURL=FetchAllTags.js.map