import { DataSource } from 'typeorm';
import { Product } from './src/modules/product/entities/product.entity';

export const testDataSource = new DataSource({
  type: 'sqlite',
  database: ':memory:',
  entities: [Product],
  synchronize: true,
});
