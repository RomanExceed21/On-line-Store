import { CreateOrderDto } from './dto/orders.dto';
import { PgClient } from './../db/db.service';
import { Injectable } from '@nestjs/common';
import * as format from 'pg-format';
@Injectable()
export class OrdersService {
	constructor(private pgClient: PgClient) {}

	async createOrder(dto: CreateOrderDto) {
		await this.pgClient.query(`BEGIN`);
		const newOrder = await this.pgClient.query(`
			INSERT INTO "orders" 
			("user_id", "status") 
			VALUES ($1, $2) RETURNING "id"`, 
			[dto.user_id, dto.status]);
			const orderId = await newOrder.rows[0].id;
		
	
		const orderItemFields: any = await this.pgClient.row(`SELECT 
			(SELECT "id" AS "order_id" FROM "orders" WHERE "id" = '${orderId}'), 
			"product_id", 
			"numberOfProducts",
			"totalPrice"
			FROM "basckets" 
			WHERE "user_id" = '${dto.user_id}'`);
		
		const transformOrderItemFields = orderItemFields.map(e => Object.values(e));

		let insertOrderItems = await format(`
			INSERT INTO "orderItems" 
			("order_id", "product_id", "quantityOfProducts", "totalPrice")
			VALUES %L RETURNING "id"`,
			transformOrderItemFields
		);

		const insertedData = await this.pgClient.query(insertOrderItems);	
		const deleteData: any = await this.pgClient.row(`SELECT "product_id" FROM "orderItems" WHERE "order_id" = '${orderId}'`)
		const transformDeletedData = deleteData.map(e => Object.values(e));

		const resDeleteDataForRequest = transformDeletedData.reduce((result, delElement) => {
			result = [...result, ...delElement];
			return result
		}, [])

		let deleteBasketProducts = await format(`
			DELETE FROM "basckets"  
			WHERE "product_id" IN (%L)`,
			resDeleteDataForRequest
		);

		const deletedData = await this.pgClient.query(deleteBasketProducts);	
		await this.pgClient.query(`COMMIT`);
		return insertedData.rows
	}
}
