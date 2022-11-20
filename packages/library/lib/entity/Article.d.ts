import { Tag } from "./Tag";
export declare class Article {
    readonly articleId: string;
    title: string;
    content: string;
    description: string;
    postedAt: Date;
    updatedAt: Date | null;
    references: string[] | null;
    isPublic: boolean;
    isPickedUp: boolean;
    thumbnail: string | null;
    tags: Tag[] | null;
}
