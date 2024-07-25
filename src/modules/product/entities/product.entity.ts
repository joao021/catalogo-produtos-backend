import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price12Months!: number;

  @Column('decimal', { precision: 10, scale: 2 })
  price6Months!: number;

  @Column('decimal', { precision: 10, scale: 2 })
  price3Months!: number;

  @Column()
  imageUrlFront!: string;

  @Column()
  imageUrlSide!: string;

  @Column()
  imageUrlBack!: string;
}
