import { MigrationInterface, QueryRunner } from "typeorm";
export declare class migration1669033531458 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
