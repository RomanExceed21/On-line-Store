import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class categoriesTable1647528423036 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'categories',
                columns: [
                    { name: 'id', type: 'int4', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                    { name: 'categoriesName', type: 'varchar', isNullable: false },
                ],
            }),
            false,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
