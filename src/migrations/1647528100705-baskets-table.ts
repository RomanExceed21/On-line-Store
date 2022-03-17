import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class basketsTable1647528100705 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'baskets',
                columns: [
                    { name: 'user_id', type: 'int4', isPrimary: true },
                    { name: 'product_id', type: 'int4', isPrimary: true },
                ],
            }),
            false,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
