import {MigrationInterface, QueryRunner} from "typeorm";

export class addOrderTable1649068757961 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

    await queryRunner.query(
      `CREATE TABLE "orders" (
        "id" UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(), 
        "user_id" VARCHAR NOT NULL,
        "status" VARCHAR NOT NULL,
        "created_at" DATE NOT NULL DEFAULT NOW()
      )`,
    );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "orders"`)
    }
}
