import { UserLoginDto } from '../users/dto/users.login.dto';
import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { PgClient } from '../db/db.service';
import { CreateUserDto } from '../users/dto/users.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
	constructor(private pgClient: PgClient, 
		private jwtService: JwtService) {}

	async login(dto: UserLoginDto) {
		const checkEmail = await this.pgClient.row(`SELECT "email" FROM "users" WHERE "email" = '${dto.email}'`);
		if (!checkEmail[0]) {
			throw new UnauthorizedException({message: 'Некорректный емайл'})
		}
		const user = await this.pgClient.row(`SELECT * FROM users WHERE email = '${dto.email}'`);
		const checkPassword = await bcrypt.compare(dto.password, user[0].password)	
		if (!checkPassword) {
			throw new UnauthorizedException({message: 'Некорректный пароль'})
		}
		const payload = {id: user[0].id, email: user[0].email, role: user[0].role_id};
		return {
			token: this.jwtService.sign(payload)
		}	
	}

	async registration(dto: CreateUserDto) {
		const checkUserEmail = await this.pgClient.row(`SELECT email FROM users WHERE email = '${dto.email}'`);
		const emailForCompare = checkUserEmail[0]
		
		if (emailForCompare) {
			throw new HttpException('Пользователь существует', HttpStatus.BAD_REQUEST)
		}
		const saltRounds = 10
		const hashPassword = await bcrypt.hash(dto.password, saltRounds);
		const userId = await this.pgClient.row(`SELECT * FROM "roles" WHERE "roleName" = 'buyer'`);

		await this.pgClient.query(`
			INSERT INTO "users" ("email", "password", "firstName", "lastName", "birhdayDate", "age", "role_id") values ($1, $2, $3, $4, $5, $6, $7)`,
			[dto.email, hashPassword, dto.firstName, dto.lastName, dto.birhdayDate, dto.age, userId[0].id]
		)
		const user = await this.pgClient.row(`SELECT * FROM "users" WHERE "email" = '${dto.email}'`)
		const payload = {id: user[0].id, email: user[0].email, role: user[0].role_id};
		return {
			token: this.jwtService.sign(payload)
		}	
	}

}
