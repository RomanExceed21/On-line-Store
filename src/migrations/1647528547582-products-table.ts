import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class productsTable1647528547582 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'products',
                columns: [
                    { name: 'id', type: 'int4', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                    { name: 'name', type: 'varchar', isNullable: false },
                    { name: 'category_id', type: 'integer', isNullable: false,},
                    { name: 'description', type: 'varchar', isNullable: false },
                    { name: 'imageUrl', type: 'varchar', isNullable: false },
                    { name: 'price', type: 'integer', isNullable: false }
                ],
            }),
            false,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
