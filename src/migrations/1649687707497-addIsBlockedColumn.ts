import {MigrationInterface, QueryRunner} from "typeorm";

export class addIsBlockedColumn1649687707497 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD COLUMN "isBlocked" BOOLEAN DEFAULT false`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isBlocked"`)
    }
}
