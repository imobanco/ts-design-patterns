"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteFactory2 = exports.ConcreteFactory1 = void 0;
const products_1 = require("./products");
// concrete factories
class ConcreteFactory1 {
    createProductA() {
        return new products_1.ProductA1();
    }
    createProductB() {
        return new products_1.ProductB1();
    }
}
exports.ConcreteFactory1 = ConcreteFactory1;
class ConcreteFactory2 {
    createProductA() {
        return new products_1.ProductA2();
    }
    createProductB() {
        return new products_1.ProductB2();
    }
}
exports.ConcreteFactory2 = ConcreteFactory2;
