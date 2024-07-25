import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from '../services/product.service';
import { Product } from '../entities/product.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('ProductService', () => {
  let service: ProductService;
  let repository: Repository<Product>;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: ':memory:',
          entities: [Product],
          synchronize: true,
        }),
        TypeOrmModule.forFeature([Product]),
      ],
      providers: [ProductService],
    }).compile();

    service = moduleFixture.get<ProductService>(ProductService);
    repository = moduleFixture.get<Repository<Product>>(
      getRepositoryToken(Product),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  beforeEach(async () => {
    const product = new Product();
    product.name = 'Test Product';
    product.description = 'This is a test product';
    product.price12Months = 1999.8;
    product.price6Months = 1799.82;
    product.price3Months = 999.9;
    product.imageUrlFront = 'front.jpg';
    product.imageUrlSide = 'side.jpg';
    product.imageUrlBack = 'back.jpg';
    await repository.save(product);
  });

  it('should find all products with pagination', async () => {
    const products = await service.findAll(1, 10);
    expect(products.length).toBeGreaterThan(0);
  });

  it('should find one product by id', async () => {
    const product = await service.findOne(1);
    expect(product).toBeDefined();
    expect(product.id).toBe(1);
  });
});
