import { BascketsService } from './basckets.service';
import { CreateBascketDto } from './dto/basckets.dto';
import { Body, Controller, Delete, Post, Query } from '@nestjs/common';

@Controller('basckets')
export class BascketsController {
	constructor(private readonly bascketsService: BascketsService) {}

	@Post()
		createBascket(@Body() bascketDto: CreateBascketDto) {
			return this.bascketsService.createBascket(bascketDto)
		}

	@Delete()
		deleteBascket(@Query() bascketDto: CreateBascketDto) {
			return this.bascketsService.deleteBascket(bascketDto)
		}
}
