import {MigrationInterface, QueryRunner} from "typeorm";

export class addUpdateOrderField1649411732817 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" ADD COLUMN "updated_at" DATE NOT NULL DEFAULT NOW()`)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "updated_at"`)

    }

}
