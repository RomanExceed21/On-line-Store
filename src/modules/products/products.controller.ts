import { createProductDto } from './dto/products.dto';
import { ProductsService } from './products.service';
import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
	constructor(private readonly productsService: ProductsService) {}

	@Get()
	allCategories() {
		return this.productsService.allProducts()
	}

	@Post() 
	create(@Body() productDto: createProductDto) {
		return this.productsService.create(productDto)
	}

	@Put() 
		rename(@Body() productDto: createProductDto) {
			return this.productsService.rename(productDto)
		}

	@Delete()
	delete(@Query() productDto: createProductDto) {
		return this.productsService.delete(productDto)
	}

}
