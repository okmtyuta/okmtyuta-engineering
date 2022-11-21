import { Tag } from "@okmtyuta-engineering/library/lib/db/typeorm/entity/Tag";
import { User } from "@okmtyuta-engineering/library/lib/db/typeorm/entity/User";
export declare class RegisterArticleDto {
    title: string;
    content: string;
    description: string;
    references: string[] | null;
    isPublic: boolean;
    thumbnail: string | null;
    tags: Tag[];
    user: User;
}
