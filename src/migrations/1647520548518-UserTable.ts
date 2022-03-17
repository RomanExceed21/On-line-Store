import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class UserTable1647520548518 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    { name: 'id', type: 'int4', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                    { name: 'firstName', type: 'varchar', isNullable: false },
                    { name: 'lastName', type: 'varchar', isNullable: false,},
                    { name: 'email', type: 'varchar', isNullable: false },
                    { name: 'hashedPassword', type: 'varchar', isNullable: false },
                    { name: 'age', type: 'varchar', isNullable: false },
                    { name: 'birhdayDate', type: 'varchar', isNullable: false },
                    { name: 'roleId', type: 'varchar', isNullable: false },
                ],
            }),
            false,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
