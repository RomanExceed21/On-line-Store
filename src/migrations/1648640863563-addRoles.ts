import {MigrationInterface, QueryRunner} from "typeorm";

export class addRoles1648640863563 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO "roles" ("roleName") VALUES ('superAdmin')`);
        await queryRunner.query(`INSERT INTO "roles" ("roleName") VALUES ('admin')`);
        await queryRunner.query(`INSERT INTO "roles" ("roleName") VALUES ('buyer')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }
}
