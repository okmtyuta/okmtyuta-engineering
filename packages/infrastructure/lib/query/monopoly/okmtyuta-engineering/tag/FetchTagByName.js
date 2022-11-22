"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchTagByName = void 0;
const Tag_1 = require("@okmtyuta-engineering/library/lib/db/typeorm/entity/Tag");
class FetchTagByName {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.dataSource = dataSource;
    }
    async fetch(params) {
        await this.dataSource.initialize();
        try {
            const tagRepository = await this.dataSource.getRepository(Tag_1.Tag);
            const tag = await tagRepository.findOne({
                where: {
                    name: params.name,
                },
            });
            return {
                tag: tag,
            };
        }
        catch (error) {
        }
        finally {
            await this.dataSource.destroy();
        }
    }
}
exports.FetchTagByName = FetchTagByName;
//# sourceMappingURL=FetchTagByName.js.map