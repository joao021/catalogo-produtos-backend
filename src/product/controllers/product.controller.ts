import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Product } from 'src/modules/product/entities/product.entity';
import { ProductService } from 'src/modules/product/services/product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return this.productService.findOne(id);
  }
}
