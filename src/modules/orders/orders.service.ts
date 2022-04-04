import { CreateOrderDto } from './dto/orders.dto';
import { PgClient } from './../db/db.service';
import { Injectable } from '@nestjs/common';
import { createOrderItemsDto } from './dto/orderItems.dto';

@Injectable()
export class OrdersService {
	constructor(private pgClient: PgClient) {}

	async createOrder(dto: CreateOrderDto) {
		const newOrder = await this.pgClient.query(`INSERT INTO "orders" ("user_id", "status") VALUES ($1, $2)`, [dto.user_id, dto.status])
		return await this.pgClient.row(`SELECT "id" FROM "orders"`);
	}

	async createOrderItems(dto: createOrderItemsDto) {
		const userData: any = await this.pgClient.row(`SELECT "product_id", "numberOfProducts" FROM "basckets" WHERE "user_id" = '${dto.user_id}'`)
		console.log(userData);
		await userData.forEach(e => {
			this.pgClient.query(`INSERT INTO "orderItems" ("order_id", "product_id", quantityOfProducts) VALUES ($1, $2, $3)`,
			[dto.order_id, e.product_id, e.numberOfProducts])
			
		});
		return userData
	}
}
