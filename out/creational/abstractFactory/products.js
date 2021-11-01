"use strict";
// abstract products
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductB2 = exports.ProductA2 = exports.ProductB1 = exports.ProductA1 = void 0;
// concrete products
class ProductA1 {
    doStuff() {
        return "Product A1";
    }
}
exports.ProductA1 = ProductA1;
class ProductB1 {
    doStuff() {
        return "Product B1";
    }
    anotherStuff(product) {
        return `product B1 with help of ${product.doStuff()}`;
    }
}
exports.ProductB1 = ProductB1;
class ProductA2 {
    doStuff() {
        return "Product A2";
    }
}
exports.ProductA2 = ProductA2;
class ProductB2 {
    doStuff() {
        return "Product B2";
    }
    anotherStuff(product) {
        return `product B2 with help of ${product.doStuff()}`;
    }
}
exports.ProductB2 = ProductB2;
