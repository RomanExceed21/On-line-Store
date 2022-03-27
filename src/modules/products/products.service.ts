import { createProductDto } from './dto/products.dto';
import { PgClient } from '../db/db.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
	constructor(private pgClient: PgClient) {}

	async allProducts() {
		return this.pgClient.row('SELECT * FROM "products"')
	}

	async create(dto: createProductDto) {
		await this.pgClient.query(`
		INSERT INTO "products" VALUES 
			(
				${dto.id}, '${dto.name}', ${dto.category_id}, '${dto.description}', '${dto.imageUrl}', ${dto.price}
			)
		`)
		return this.pgClient.row('SELECT * FROM "products"')
	}

	async rename(dto: createProductDto) {
		await this.pgClient.query(`
		UPDATE "products" SET 
		"name" = '${dto.name}', "category_id" = ${dto.category_id}, "description" = '${dto.description}', "price" = ${dto.price}
		WHERE "id" = ${dto.id}
		`)
		return this.pgClient.row('SELECT * FROM "products" ORDER BY "id"')
	}

	async delete(dto: createProductDto) {
		await this.pgClient.query(`DELETE FROM "products" WHERE "id" = ${dto.id}`)
		return this.pgClient.row('SELECT * FROM "products"')
	}

}
