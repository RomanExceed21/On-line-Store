import { CreateUserDto } from '../users/dto/users.dto';
import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
	constructor(private readonly userService: UsersService) {}

	//TO DO
	// @Post() 
	// 	create(@Body() userDto: CreateUserDto) {
	// 		return this.userService.create(userDto)
	// 	}
}
