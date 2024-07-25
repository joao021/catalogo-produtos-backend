import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Product } from 'src/modules/product/entities/product.entity';

const ormconfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST ?? 'localhost',
  port: parseInt(process.env.DB_PORT ?? '3306', 10),
  username: process.env.DB_USERNAME ?? 'root',
  password: process.env.DB_PASSWORD ?? 'root_password',
  database: process.env.DB_DATABASE ?? 'catalogo_produtos',
  entities: [Product],
  synchronize: true,
};

export default ormconfig;
