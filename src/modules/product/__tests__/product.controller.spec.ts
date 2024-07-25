import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from '../controllers/product.controller';
import { ProductService } from '../services/product.service';

describe('ProductController', () => {
  let controller: ProductController;
  let service: ProductService;

  const mockProductService = {
    findAll: jest.fn().mockImplementation((page: number, limit: number) => {
      return Promise.resolve([
        {
          id: 1,
          name: 'Test Product',
          description: 'Test Description',
          price12Months: 1999.8,
          price6Months: 1799.82,
          price3Months: 999.9,
          imageUrlFront: 'http://example.com/image-front.jpg',
          imageUrlSide: 'http://example.com/image-side.jpg',
          imageUrlBack: 'http://example.com/image-back.jpg',
        },
      ]);
    }),
    findOne: jest.fn().mockResolvedValue({
      id: 1,
      name: 'Test Product',
      description: 'Test Description',
      price12Months: 1999.8,
      price6Months: 1799.82,
      price3Months: 999.9,
      imageUrlFront: 'http://example.com/image-front.jpg',
      imageUrlSide: 'http://example.com/image-side.jpg',
      imageUrlBack: 'http://example.com/image-back.jpg',
    }),
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

  it('should return all products with pagination', async () => {
    const products = await controller.findAll(1, 10);
    expect(products).toEqual([
      {
        id: 1,
        name: 'Test Product',
        description: 'Test Description',
        price12Months: 1999.8,
        price6Months: 1799.82,
        price3Months: 999.9,
        imageUrlFront: 'http://example.com/image-front.jpg',
        imageUrlSide: 'http://example.com/image-side.jpg',
        imageUrlBack: 'http://example.com/image-back.jpg',
      },
    ]);
  });

  it('should return a single product', async () => {
    const product = await controller.findOne(1);
    expect(product).toEqual({
      id: 1,
      name: 'Test Product',
      description: 'Test Description',
      price12Months: 1999.8,
      price6Months: 1799.82,
      price3Months: 999.9,
      imageUrlFront: 'http://example.com/image-front.jpg',
      imageUrlSide: 'http://example.com/image-side.jpg',
      imageUrlBack: 'http://example.com/image-back.jpg',
    });
  });
});
