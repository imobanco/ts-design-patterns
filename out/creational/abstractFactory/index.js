"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factory_1 = require("./factory");
function _(factory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();
    console.log(productA.doStuff());
    console.log(productB.anotherStuff(productA));
}
_(new factory_1.ConcreteFactory1());
_(new factory_1.ConcreteFactory2());
