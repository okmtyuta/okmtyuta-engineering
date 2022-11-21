"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchTagByName = void 0;
const Tag_1 = require("@okmtyuta-engineering/library/lib/db/typeorm/entity/Tag");
const data_source_1 = require("../../../../config/data-source");
class FetchTagByName {
    async fetch(params) {
        const dataSource = await data_source_1.AppDataSource.initialize();
        try {
            const tagRepository = await dataSource.getRepository(Tag_1.Tag);
            const tag = await tagRepository.findOne({
                where: {
                    name: params.name
                }
            });
            return {
                tag: tag,
            };
        }
        catch (error) {
        }
        finally {
            await dataSource.destroy();
        }
    }
}
exports.FetchTagByName = FetchTagByName;
//# sourceMappingURL=FetchTagByName.js.map