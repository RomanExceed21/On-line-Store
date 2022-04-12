import {MigrationInterface, QueryRunner} from "typeorm";

export class tableOrderItemsAddTotalPrice1649179719587 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orderItems" ADD COLUMN "totalPrice" INT DEFAULT 0`)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orderItems" DROP COLUMN "totalPrice"`)

    }

}
