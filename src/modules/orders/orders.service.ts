import { CreateOrderDto } from './dto/orders.dto';
import { PgClient } from './../db/db.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
	constructor(private pgClient: PgClient) {}

	async createOrder(dto: CreateOrderDto) {
		await this.pgClient.query(`INSERT INTO "basckets" (user_id, product_id) VALUES ($1, $2)`, [dto.user_id, dto.product_id])
		return await this.pgClient.row(`SELECT "product_id" FROM "basckets" WHERE "user_id" = '${dto.user_id}'`)

		//Хотел сделать похитромудрому, но не прокатило
		// return await this.pgClient.row(`SELECT "name" FROM "products" WHERE "id" = (SELECT "product_id" FROM "basckets" WHERE "user_id" = '${dto.user_id})`)
	}
}
