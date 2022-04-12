import { BascketsService } from './basckets.service';
import { CreateBascketDto } from './dto/basckets.dto';
import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';

@Controller('basckets')
export class BascketsController {
	constructor(private readonly bascketsService: BascketsService) {}

	@Get()
	showUserBascket(@Query() bascketDto: CreateBascketDto) {
		return this.bascketsService.showUserBascket(bascketDto)
	}

	@Post()
		createBascket(@Body() bascketDto: CreateBascketDto) {
			return this.bascketsService.createBascket(bascketDto)
		}

	@Put()
		changeBascket(@Body() bascketDto: CreateBascketDto) {
			return this.bascketsService.changeBascket(bascketDto)
		}

	@Delete()
		deleteBascket(@Query() bascketDto: CreateBascketDto) {
			return this.bascketsService.deleteBascket(bascketDto)
		}
}
