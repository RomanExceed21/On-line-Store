export class CreateAdminDto {
	readonly email: string;
	readonly password: string;
	readonly firstName: string;
	readonly lastName: string;
	readonly birhdayDate: string;
	readonly age: number;
	readonly role_id: string;
}