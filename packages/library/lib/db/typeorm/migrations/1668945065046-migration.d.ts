import { MigrationInterface, QueryRunner } from "typeorm";
export declare class migration1668945065046 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
