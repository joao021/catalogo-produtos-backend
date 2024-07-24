import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from '../controllers/product.controller';
import { ProductService } from '../services/product.service';
import { Product } from '../entities/product.entity';

describe('ProductController', () => {
  let controller: ProductController;
  let service: ProductService;

  const mockProductService = {
    findAll: jest.fn().mockResolvedValue([{ id: 1, name: 'Test Product' }]),
    findOne: jest.fn().mockResolvedValue({ id: 1, name: 'Test Product' }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [{ provide: ProductService, useValue: mockProductService }],
    }).compile();

    controller = module.get<ProductController>(ProductController);
    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all products', async () => {
    const products = await controller.findAll();
    expect(products).toEqual([{ id: 1, name: 'Test Product' }]);
  });

  it('should return a single product', async () => {
    const product = await controller.findOne(1);
    expect(product).toEqual({ id: 1, name: 'Test Product' });
  });
});
