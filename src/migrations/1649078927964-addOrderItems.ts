import {MigrationInterface, QueryRunner} from "typeorm";

export class addOrderItems1649078927964 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.query(
            `CREATE TABLE "orderItems" (
                "id" UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(), 
                "order_id" UUID REFERENCES "orders"("id"),
                "product_id" UUID REFERENCES "products"("id"),
                quantityOfProducts INT
            )`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "orderItems"`);
    }

}
