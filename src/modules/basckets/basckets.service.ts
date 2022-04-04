import { CreateBascketDto } from './dto/basckets.dto';
import { PgClient } from './../db/db.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BascketsService {
	constructor(private pgClient: PgClient) {}

	async showUserBascket(dto: CreateBascketDto) {
		return	await this.pgClient.row(`SELECT "product_id", "numberOfProducts", "totalPrice" FROM "basckets" WHERE "user_id" = '${dto.user_id}'`)
	}

	async createBascket(dto: CreateBascketDto) {
		const productPrice = await this.pgClient.query(`SELECT "price" FROM "products" WHERE "id" = ($1)`, [dto.product_id])
		const totalPrice = productPrice.rows[0].price * dto.numberOfProducts
		await this.pgClient.query(`INSERT INTO "basckets" ("user_id", "product_id", "numberOfProducts", "totalPrice") VALUES ($1, $2, $3, $4)`, 
			[dto.user_id, dto.product_id, dto.numberOfProducts, totalPrice])
		return await this.pgClient.row(`SELECT "product_id" FROM "basckets" WHERE "user_id" = '${dto.user_id}'`)
	}

	async changeBascket(dto: CreateBascketDto) {
		await this.pgClient.query(`UPDATE "basckets" SET "numberOfProducts" = ($1), WHERE "user_id" = ($2) AND "product_id" = ($3)`, 
			[dto.numberOfProducts, dto.user_id, dto.product_id])
		return await this.pgClient.row(`SELECT "product_id" FROM "basckets" WHERE "user_id" = '${dto.user_id}'`)

	}

	async deleteBascket(dto: CreateBascketDto) {
		await this.pgClient.query(`DELETE FROM "basckets" WHERE "id"= ($1)`, [dto.id])
		return this.pgClient.row(`SELECT "product_id" FROM "basckets"`)
	}
}
