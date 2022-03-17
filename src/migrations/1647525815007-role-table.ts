import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class roleTable1647525815007 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'roles',
                columns: [
                    { name: 'id', type: 'int4', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                    { name: 'roleName', type: 'varchar', isNullable: false },
                ],
            }),
            false,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
