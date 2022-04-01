import { CreateBascketDto } from './dto/basckets.dto';
import { PgClient } from './../db/db.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BascketsService {
	constructor(private pgClient: PgClient) {}

	async createBascket(dto: CreateBascketDto) {
		await this.pgClient.query(`INSERT INTO "basckets" ("user_id", "product_id", "numberOfProducts") VALUES ($1, $2, $3)`, [dto.user_id, dto.product_id, dto.numberOfProducts])
		return await this.pgClient.row(`SELECT "product_id" FROM "basckets" WHERE "user_id" = '${dto.user_id}'`)
	}

	async deleteBascket(dto: CreateBascketDto) {
		await this.pgClient.query(`DELETE FROM "basckets" WHERE "id"= ($1)`, [dto.id])
		return this.pgClient.row(`SELECT "product_id" FROM "basckets"`)
	}
}
