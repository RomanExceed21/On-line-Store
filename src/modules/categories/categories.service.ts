import { CreateCategoriesDto } from './dto/categories.dto';
import { PgClient } from '../db/db.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService{
	constructor(private pgClient: PgClient) {}

	async allCategories() {
		return this.pgClient.row('SELECT * FROM "categories"')
	}

	async create(dto: CreateCategoriesDto) {
		await this.pgClient.query(`INSERT INTO "categories" VALUES (${dto.id}, '${dto.categoriesName}')`)
		return this.pgClient.row('SELECT * FROM "categories"')
	}

	async rename(dto: CreateCategoriesDto) {
		await this.pgClient.query(`UPDATE "categories" SET "categoriesName" = '${dto.categoriesName}' WHERE "id" = ${dto.id}`)
		return this.pgClient.row('SELECT * FROM "categories" ORDER BY "id"')
	}

	async delete(dto: CreateCategoriesDto) {
		await this.pgClient.query(`DELETE FROM "categories" WHERE "id" = ${dto.id}`)
		console.log(dto);
		return this.pgClient.row('SELECT * FROM "categories"')
	}

}
