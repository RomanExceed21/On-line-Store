import { CategoriesService } from './categories.service';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateCategoriesDto } from './dto/categories.dto';

@Controller('categories')
export class CategoriesController {
	constructor(private readonly categoriesService: CategoriesService) {}

	@Get()
	allCategories() {
		return this.categoriesService.allCategories()
	}

	@Post() 
	create(@Body() categoriesDto: CreateCategoriesDto) {
		return this.categoriesService.create(categoriesDto)
	}

	@Put() 
		rename(@Body() categoriesDto: CreateCategoriesDto) {
			return this.categoriesService.rename(categoriesDto)
		}

	@Delete()
	delete(@Query() categoriesDto: CreateCategoriesDto) {
		return this.categoriesService.delete(categoriesDto)
	}
}
