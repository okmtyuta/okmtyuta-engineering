import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Article1668679886417 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
