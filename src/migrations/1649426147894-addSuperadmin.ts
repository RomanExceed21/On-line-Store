import {MigrationInterface, QueryRunner} from "typeorm";

export class addSuperadmin1649426147894 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const superAdminRoleId = await queryRunner.query(`SELECT "id" FROM "roles" WHERE "roleName" = 'superAdmin'`)
        await queryRunner.query(`INSERT INTO "users" ("email", "password", "firstName", "lastName", "birhdayDate", "age", "role_id") 
            VALUES ('superadmin@admin.admin', '$2a$10$5FuchPLRqVenc64P9wPOx..kqJSGKKgRIz23GTgLJRtnRQKGkgbxW', 'Roman', 'Aksanov', '2004-01-01', 18, '${superAdminRoleId[0].id}')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
    }

}
