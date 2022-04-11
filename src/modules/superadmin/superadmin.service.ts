import { DeleteAdminDto } from './dto/deleteAdmin.dto';
import { BlockAdminDto } from './dto/blockAdmin.dto';
import { CreateAdminDto } from './dto/createAdmin.dto';
import { PgClient } from './../db/db.service';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class SuperadminService {
	constructor(private readonly pgClient: PgClient) {}

	async getAllAdmins() {
		const adminId = await this.pgClient.row(`SELECT "id" FROM "roles" WHERE "roleName" = 'admin'`)
		return this.pgClient.row(`SELECT "id" FROM "users" WHERE role_id = '${adminId[0].id}'`);
	}

	async createAdmin(dto: CreateAdminDto) {
		const checkAdminEmail = await this.pgClient.row(`SELECT "email" FROM "users" WHERE "email" = '${dto.email}'`);
		const emailForCompare = checkAdminEmail[0]
		if (emailForCompare) {
			throw new HttpException('Админ с таким email существует', HttpStatus.BAD_REQUEST)
		}
		const saltRounds = 10;
		const hashPassword = await bcrypt.hash(dto.password, saltRounds)
		this.pgClient.query(`
			INSERT INTO "users" ("email", "password", "firstName", "lastName", "birhdayDate", "age", "role_id")
			VALUES($1, $2, $3, $4, $5, $6, $7)
			`,[dto.email, hashPassword, dto.firstName, dto.lastName, dto.birhdayDate, dto.age, dto.role_id])
		return 'Admin created'
	}

	async blockAdmin(dto: BlockAdminDto) {
		if (!dto.id) {
			throw new HttpException('Необходимо ввести id', HttpStatus.BAD_REQUEST)
		}
		const checkedId = await this.pgClient.row(`
			SELECT "id" FROM "users" WHERE "id" = '${dto.id}'
		`)

		const idForCompare = checkedId[0]

		if (!idForCompare) {
			throw new HttpException('Админ с таким id не существует', HttpStatus.BAD_REQUEST)
		}
		await this.pgClient.query(`UPDATE "users" SET "isBlocked" = '${dto.isBlocked}' WHERE "id" = '${dto.id}'`)

		return 'blocking state changed'
	}

	async deleteAdmin(dto: DeleteAdminDto) {
		if (!dto.id) {
			throw new HttpException('Необходимо ввести id', HttpStatus.BAD_REQUEST)
		}
		const checkedId = await this.pgClient.row(`
			SELECT "id" FROM "users" WHERE "id" = '${dto.id}'
		`)

		const idForCompare = checkedId[0]

		if (!idForCompare) {
			throw new HttpException('Админ с таким id не существует', HttpStatus.BAD_REQUEST)
		}

		await this.pgClient.query(`DELETE FROM "users" WHERE "id" = '${dto.id}'`);
		return 'Admin deleted'
	}
}
