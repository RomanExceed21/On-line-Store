import {MigrationInterface, QueryRunner} from "typeorm";

export class addCategories1648641313465 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO "categories" ("categoriesName") VALUES ('Processors')`);
        await queryRunner.query(`INSERT INTO "categories" ("categoriesName") VALUES ('Videocards')`);
        await queryRunner.query(`INSERT INTO "categories" ("categoriesName") VALUES ('Mainboards')`);
        await queryRunner.query(`INSERT INTO "categories" ("categoriesName") VALUES ('HDD')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }
}
