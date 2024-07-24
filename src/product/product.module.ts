import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../modules/product/entitites/product.entity';
import { ProductController } from '../modules/product/controllers/product.controller';
import { ProductService } from '../modules/product/services/product.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
