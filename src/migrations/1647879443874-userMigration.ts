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
        "id" INT NOT NULL PRIMARY KEY, 
        "categoriesName" VARCHAR(50) NOT NULL
      )`,
    );
    await queryRunner.query(
      `CREATE TABLE "products" (
        "id" INT NOT NULL PRIMARY KEY, 
        "name" VARCHAR(50) NOT NULL, 
        "category_id" INT NOT NULL REFERENCES "categories"("id"),
        "description" VARCHAR NOT NULL, 
        "imageUrl" VARCHAR NOT NULL, 
        "price" INT NOT NULL
      )`,
    );
    await queryRunner.query(
      `CREATE TABLE "users" (
        "id" INT NOT NULL PRIMARY KEY, 
        "firstName" VARCHAR(50) NOT NULL, 
        "lastName" VARCHAR(50) NOT NULL, 
        "email" VARCHAR(50) NOT NULL, 
        "hashedPassword" VARCHAR NOT NULL, 
        "age" INT NOT NULL, 
        "birhdayDate" DATE NOT NULL, 
        "role_id" INT REFERENCES "roles"("id") NOT NULL
      )`,
    );
    await queryRunner.query(
      `CREATE TABLE "baskets" (
        "id" INT NOT NULL PRIMARY KEY, 
        "user_id" INT NOT NULL REFERENCES "users"("id"), 
        "product_id" INT NOT NULL REFERENCES "products"("id")
      )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "roles"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "products"`);
    await queryRunner.query(`DROP TABLE "categories"`);
    await queryRunner.query(`DROP TABLE "baskets"`);
  }
}
