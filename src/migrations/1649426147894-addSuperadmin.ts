import {MigrationInterface, QueryRunner} from "typeorm";

export class addSuperadmin1649426147894 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO "users" ("email", "password", "firstName", "lastName", "birhdayDate", "age", "role_id") 
            VALUES ('superadmin@admin.admin', '$2a$10$5FuchPLRqVenc64P9wPOx..kqJSGKKgRIz23GTgLJRtnRQKGkgbxW', 'Roman', 'Aksanov', '2004-01-01', 18, '360090e3-ee47-4b1c-b973-2d90f1cc4c7f')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
    }

}
