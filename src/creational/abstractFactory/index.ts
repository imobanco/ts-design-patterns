import { IFactory, ConcreteFactory1, ConcreteFactory2 } from "./factory";

function _(factory: IFactory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  console.log(productA.doStuff());
  console.log(productB.anotherStuff(productA));
}

_(new ConcreteFactory1());
_(new ConcreteFactory2());
