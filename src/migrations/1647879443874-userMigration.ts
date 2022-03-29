import { MigrationInterface, QueryRunner } from 'typeorm';

export class userMigration1647879443874 implements MigrationInterface {
  name = 'userMigration1647879443874';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "roles" (
        "id" INT NOT NULL PRIMARY KEY, 
        "roleName" VARCHAR(50) NOT NULL
      )`,
    );
    await queryRunner.query(
      `CREATE TABLE "categories" (
        "id" SERIAL PRIMARY KEY, 
        "categoriesName" VARCHAR(50) NOT NULL
      )`,
    );
    await queryRunner.query(
      `CREATE TABLE "products" (
        "id" SERIAL NOT NULL PRIMARY KEY, 
        "name" VARCHAR(50) NOT NULL, 
        "category_id" INT NOT NULL REFERENCES "categories"("id"),
        "description" VARCHAR NOT NULL, 
        "imageUrl" VARCHAR NOT NULL, 
        "price" INT NOT NULL
      )`,
    );
    await queryRunner.query(
      `CREATE TABLE "users" (
        "id" SERIAL NOT NULL PRIMARY KEY, 
        "email" VARCHAR(50) UNIQUE NOT NULL, 
        "password" VARCHAR NOT NULL, 
        "firstName" VARCHAR(50) NOT NULL, 
        "lastName" VARCHAR(50) NOT NULL, 
        "birhdayDate" DATE NOT NULL, 
        "age" INT NOT NULL, 
        "role_id" INT REFERENCES "roles"("id") NOT NULL DEFAULT 3
      )`,
    );
    await queryRunner.query(
      `CREATE TABLE "baskets" (
        "id" INT NOT NULL PRIMARY KEY, 
        "user_id" INT NOT NULL REFERENCES "users"("id"), 
        "product_id" INT NOT NULL REFERENCES "products"("id")
      )`,
    );
    await queryRunner.query(`INSERT INTO "roles" VALUES (1, 'superAdmin')`);
    await queryRunner.query(`INSERT INTO "roles" VALUES (2, 'admin')`);
    await queryRunner.query(`INSERT INTO "roles" VALUES (3, 'buyer')`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "baskets"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "roles"`);
    await queryRunner.query(`DROP TABLE "products"`);
    await queryRunner.query(`DROP TABLE "categories"`);
  }
}
