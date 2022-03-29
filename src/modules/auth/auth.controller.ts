import { UserLoginDto } from '../users/dto/users.login.dto';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/users.dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post('/login')
	login(@Body() dto: UserLoginDto) {
		return this.authService.login(dto)
	}

	@Post('/registration')
	registration(@Body() dto: CreateUserDto) {
		return this.authService.registration(dto)

	}
}
