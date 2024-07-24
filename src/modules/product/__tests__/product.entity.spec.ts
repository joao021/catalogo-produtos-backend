import { Product } from '../entities/product.entity';

describe('Product Entity', () => {
  it('should create a product entity', () => {
    const product = new Product();
    product.id = 1;
    product.name = 'Test Product';
    product.description = 'Test Description';
    product.price = 100;
    product.imageUrl = 'http://example.com/image.jpg';

    expect(product).toBeDefined();
    expect(product.id).toBe(1);
    expect(product.name).toBe('Test Product');
    expect(product.description).toBe('Test Description');
    expect(product.price).toBe(100);
    expect(product.imageUrl).toBe('http://example.com/image.jpg');
  });

  it('should set the properties correctly', () => {
    const product = new Product();
    product.name = 'Another Test Product';
    product.description = 'Another Test Description';
    product.price = 200;
    product.imageUrl = 'http://example.com/another-image.jpg';

    expect(product.name).toBe('Another Test Product');
    expect(product.description).toBe('Another Test Description');
    expect(product.price).toBe(200);
    expect(product.imageUrl).toBe('http://example.com/another-image.jpg');
  });
});
