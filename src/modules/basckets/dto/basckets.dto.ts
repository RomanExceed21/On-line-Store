export class CreateBascketDto {
	readonly id: string;
	readonly user_id: string;
	readonly product_id: string;
	readonly numberOfProducts?: number;
	readonly totalPrice: number;
}
