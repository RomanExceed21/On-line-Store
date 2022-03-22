import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  hashedPassword: string;

  @Column()
  age: number;

  @Column()
  birhdayDate: string;

  @Column()
  role_id: number; // fk roles id
}
