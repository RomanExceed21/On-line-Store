import { UpdateUserOrderDto } from './dto/updateOrderStatus.dto';
import { CreateOrderDto } from './dto/orders.dto';
import { OrdersService } from './orders.service';
import { Body, Controller, Get, Post, Query, Put } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
	constructor(private readonly ordersService: OrdersService) {}

	@Post('createOrder')
	createOrder(@Body() orderDto: CreateOrderDto) {
		return this.ordersService.createOrder(orderDto)
	}

	@Get('userOrders')
	getUserOrders(@Query() orderDto: CreateOrderDto) {
		return this.ordersService.getUserOrders(orderDto)
	}

	@Put('changeOrderStatus')
	changeOrderStatus(@Body() orderDto: UpdateUserOrderDto) {
		return this.ordersService.changeOrderStatus(orderDto)
	}

}
