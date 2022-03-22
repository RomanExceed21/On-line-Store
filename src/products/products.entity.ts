import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  category_id: number; //fk categories id

  @Column()
  description: string;

  @Column()
  imageUrl: string;

  @Column()
  price: number;
}
