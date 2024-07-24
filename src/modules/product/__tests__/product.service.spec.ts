import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductService } from '../services/product.service';
import { Product } from '../entities/product.entity';

describe('ProductService', () => {
  let service: ProductService;
  let repository: Repository<Product>;
  let moduleFixture: TestingModule;

  beforeAll(async () => {
    moduleFixture = await Test.createTestingModule({
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

  afterAll(async () => {
    await moduleFixture.close();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all products', async () => {
    const product = new Product();
    product.name = 'Test Product';
    product.description = 'Test Description';
    product.price = 100;
    product.imageUrl = 'test-image.jpg';
    await repository.save(product);

    const products = await service.findAll();
    expect(products.length).toBe(1);
    expect(products[0].name).toBe('Test Product');
  });

  it('should return one product by ID', async () => {
    const product = new Product();
    product.name = 'Test Product';
    product.description = 'Test Description';
    product.price = 100;
    product.imageUrl = 'test-image.jpg';
    const savedProduct = await repository.save(product);

    const foundProduct = await service.findOne(savedProduct.id);
    expect(foundProduct).toBeDefined();
    expect(foundProduct.name).toBe('Test Product');
  });
});
