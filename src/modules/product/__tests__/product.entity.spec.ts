import { Product } from '../entities/product.entity';

describe('Product Entity', () => {
  it('should create a product entity', () => {
    const product = new Product();
    product.id = 1;
    product.name = 'Test Product';
    product.description = 'Test Description';
    product.price12Months = 1999.80;
    product.price6Months = 1799.82;
    product.price3Months = 999.90;
    product.imageUrlFront = 'http://example.com/image-front.jpg';
    product.imageUrlSide = 'http://example.com/image-side.jpg';
    product.imageUrlBack = 'http://example.com/image-back.jpg';

    expect(product).toBeDefined();
    expect(product.id).toBe(1);
    expect(product.name).toBe('Test Product');
    expect(product.description).toBe('Test Description');
    expect(product.price12Months).toBe(1999.80);
    expect(product.price6Months).toBe(1799.82);
    expect(product.price3Months).toBe(999.90);
    expect(product.imageUrlFront).toBe('http://example.com/image-front.jpg');
    expect(product.imageUrlSide).toBe('http://example.com/image-side.jpg');
    expect(product.imageUrlBack).toBe('http://example.com/image-back.jpg');
  });

  it('should set the properties correctly', () => {
    const product = new Product();
    product.name = 'Another Test Product';
    product.description = 'Another Test Description';
    product.price12Months = 1999.80;
    product.price6Months = 1799.82;
    product.price3Months = 999.90;
    product.imageUrlFront = 'http://example.com/another-image-front.jpg';
    product.imageUrlSide = 'http://example.com/another-image-side.jpg';
    product.imageUrlBack = 'http://example.com/another-image-back.jpg';

    expect(product.name).toBe('Another Test Product');
    expect(product.description).toBe('Another Test Description');
    expect(product.price12Months).toBe(1999.80);
    expect(product.price6Months).toBe(1799.82);
    expect(product.price3Months).toBe(999.90);
    expect(product.imageUrlFront).toBe('http://example.com/another-image-front.jpg');
    expect(product.imageUrlSide).toBe('http://example.com/another-image-side.jpg');
    expect(product.imageUrlBack).toBe('http://example.com/another-image-back.jpg');
  });
});
