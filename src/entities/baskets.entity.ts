import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Baskets {
	@PrimaryGeneratedColumn()
	user_id: number; // FK userId 

	@PrimaryGeneratedColumn()
	product_id: number; // FK productId
}