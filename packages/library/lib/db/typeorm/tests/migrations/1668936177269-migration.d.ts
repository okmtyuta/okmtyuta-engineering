import { MigrationInterface, QueryRunner } from "typeorm";
export declare class migration1668936177269 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
