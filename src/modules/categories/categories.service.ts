import { CreateCategoriesDto } from './dto/categories.dto';
import { PgClient } from '../db/db.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService{
	constructor(private pgClient: PgClient) {}

	async allCategories() {
		return this.pgClient.row(`SELECT "id" FROM "roles" WHERE "roleName" = 'buyer'`)
	}

	async create(dto: CreateCategoriesDto) {
		await this.pgClient.query(`INSERT INTO categories ("categoriesName") VALUES ($1)`,
			[dto.categoriesName]
		)
		return this.pgClient.row('SELECT * FROM "categories"')
	}

	async rename(dto: CreateCategoriesDto) {
		await this.pgClient.query(`UPDATE "categories" SET "categoriesName" = ($1) WHERE "id" = ($2)`, 
			[dto.categoriesName, dto.id])
		return this.pgClient.row('SELECT * FROM "categories" ORDER BY "id"')
	}

	async delete(dto: CreateCategoriesDto) {
		await this.pgClient.query(`DELETE FROM "categories" WHERE "id" = ($1)`, [dto.id])
		console.log(dto);
		return this.pgClient.row('SELECT * FROM "categories"')
	}

}
