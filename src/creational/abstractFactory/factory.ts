import {
  IProductA,
  IProductB,
  //------------ //
  ProductA1,
  ProductB1,
  ProductA2,
  ProductB2,
} from "./products";

// abstract factories

interface IFactory {
  createProductA(): IProductA;
  createProductB(): IProductB;
}

// concrete factories

class ConcreteFactory1 {
  public createProductA(): IProductA {
    return new ProductA1();
  }

  public createProductB(): IProductB {
    return new ProductB1();
  }
}

class ConcreteFactory2 {
  public createProductA(): IProductA {
    return new ProductA2();
  }

  public createProductB(): IProductB {
    return new ProductB2();
  }
}

export type { IFactory };
export { ConcreteFactory1, ConcreteFactory2 };
