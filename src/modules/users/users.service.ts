import { CreateUserDto } from './dto/users.dto';
import { PgClient } from '../db/db.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
	constructor (private pgClient: PgClient) {}
	//TO DO
	// async create(dto: CreateUserDto) {
		
	// 	await this.pgClient.query(`
	// 		INSERT INTO "users" values (
	// 			${dto.id}, '${dto.email}', '${dto.password}','${dto.firstName}', '${dto.lastName}', '${dto.birhdayDate}', ${dto.age}
	// 		)
	// 	`)
	// 	return this.pgClient.row(`SELECT * FROM "users"`)
	// }
}
