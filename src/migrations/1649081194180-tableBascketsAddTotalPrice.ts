import {MigrationInterface, QueryRunner} from "typeorm";

export class tableBascketsAddTotalPrice1649081194180 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "basckets" ADD COLUMN "totalPrice" INT DEFAULT 0`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "basckets" DROP COLUMN "totalPrice"`)

    }

}
