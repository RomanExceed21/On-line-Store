export class CreateUserDto {
	readonly id: number;
	readonly email: string;
	readonly password: string;
	readonly firstName: string;
	readonly lastName: string;
	readonly birhdayDate: string;
	readonly age: number;
}
