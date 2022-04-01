import { MigrationInterface, QueryRunner } from 'typeorm';

export class userMigration1647879443874 implements MigrationInterface {
  name = 'userMigration1647879443874';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

    await queryRunner.query(
      `CREATE TABLE "roles" (
        "id" UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(), 
        "roleName" VARCHAR(50) NOT NULL
      )`,
    );
    await queryRunner.query(
      `CREATE TABLE "categories" (
        "id" UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(), 
        "categoriesName" VARCHAR(50) NOT NULL
      )`,
    );
    await queryRunner.query(
      `CREATE TABLE "products" (
        "id" UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(), 
        "name" VARCHAR(50) NOT NULL, 
        "category_id" UUID NOT NULL REFERENCES "categories"("id"),
        "description" VARCHAR NOT NULL, 
        "imageUrl" VARCHAR NOT NULL, 
        "price" INT NOT NULL
      )`,
    );
    await queryRunner.query(
      `CREATE TABLE "users" (
        "id" UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(), 
        "email" VARCHAR(50) UNIQUE NOT NULL, 
        "password" VARCHAR NOT NULL, 
        "firstName" VARCHAR(50) NOT NULL, 
        "lastName" VARCHAR(50) NOT NULL, 
        "birhdayDate" DATE NOT NULL, 
        "age" INT NOT NULL, 
        "role_id" UUID NOT NULL REFERENCES "roles"("id") NOT NULL
      )`,
    );
    await queryRunner.query(
      `CREATE TABLE "basckets" (
        "id" UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(), 
        "user_id" UUID NOT NULL REFERENCES "users"("id"), 
        "product_id" UUID NOT NULL REFERENCES "products"("id"),
        "numberOfProducts" INT NOT NULL DEFAULT 0
      )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "basckets"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "roles"`);
    await queryRunner.query(`DROP TABLE "products"`);
    await queryRunner.query(`DROP TABLE "categories"`);
  }
}
