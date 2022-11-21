import { Tag } from './Tag';
import { User } from './User';
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
    tags: Tag[];
    user: User;
}
