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
		await this.pgClient.query
			(`INSERT INTO "products" VALUES ($1, $2, $3, $4, $5, $6)`, 
			[dto.id, dto.name, dto.category_id, dto.description, dto.imageUrl, dto.price])
		return this.pgClient.row('SELECT * FROM "products"')
	}

	async rename(dto: createProductDto) {
		await this.pgClient.query
			(`UPDATE "products" SET "name" = ($1), "category_id" = ($2), "description" = ($3), "price" = ($4) WHERE "id" = ($5)`,
			[dto.name, dto.category_id, dto.description, dto.price, dto.id])
		return this.pgClient.row('SELECT * FROM "products" ORDER BY "id"')
	}

	async delete(dto: createProductDto) {
		await this.pgClient.query(`DELETE FROM "products" WHERE "id" = ($1)`, [dto.id])
		return this.pgClient.row('SELECT * FROM "products"')
	}

}
