"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchAllTags = void 0;
const Tag_1 = require("@okmtyuta-engineering/library/lib/db/typeorm/entity/Tag");
class FetchAllTags {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.dataSource = dataSource;
    }
    async execute() {
        await this.dataSource.initialize();
        try {
            const tagRepository = await this.dataSource.getRepository(Tag_1.Tag);
            const tags = await tagRepository.find();
            return {
                tags: tags,
            };
        }
        catch (error) {
        }
        finally {
            await this.dataSource.destroy();
        }
    }
}
exports.FetchAllTags = FetchAllTags;
//# sourceMappingURL=FetchAllTags.js.map