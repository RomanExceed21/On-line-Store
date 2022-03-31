import { createProductDto } from './dto/products.dto';
import { ProductsService } from './products.service';
import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
	constructor(private readonly productsService: ProductsService) {}

	@Get()
	allProducts() {
		return this.productsService.allProducts()
	}

	@Get('/getProduct')
	getProductById(@Query() productDto: createProductDto) {
		return this.productsService.getProductById(productDto)
	}

	@Post('/createProduct') 
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
