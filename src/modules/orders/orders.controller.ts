import { createOrderItemsDto } from './dto/orderItems.dto';
import { CreateOrderDto } from './dto/orders.dto';
import { OrdersService } from './orders.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
	constructor(private readonly ordersService: OrdersService) {}
	@Post('createOrder')
	createOrder(@Body() orderDto: CreateOrderDto) {
		return this.ordersService.createOrder(orderDto)
	}

	@Post('createOrderItems')
	createOrderItems(@Body() orderItemsDto: createOrderItemsDto) {
		return this.ordersService.createOrderItems(orderItemsDto)
	}

}
