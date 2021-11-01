// abstract products

interface IProductA {
  doStuff(): string;
}

interface IProductB {
  doStuff(): string;
  anotherStuff(product: IProductA): string;
}

// concrete products

class ProductA1 implements IProductA {
  public doStuff() {
    return "Product A1";
  }
}

class ProductB1 implements IProductB {
  public doStuff() {
    return "Product B1";
  }

  public anotherStuff(product: IProductA) {
    return `product B1 with help of ${product.doStuff()}`;
  }
}

class ProductA2 implements IProductA {
  public doStuff() {
    return "Product A2";
  }
}

class ProductB2 implements IProductB {
  public doStuff() {
    return "Product B2";
  }

  public anotherStuff(product: IProductA) {
    return `product B2 with help of ${product.doStuff()}`;
  }
}

export type { IProductA, IProductB };
export { ProductA1, ProductB1, ProductA2, ProductB2 };
