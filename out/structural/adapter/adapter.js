"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adapter = exports.Adaptee = exports.Target = void 0;
class Target {
    doStuff() {
        return "do stuff as desired";
    }
}
exports.Target = Target;
class Adaptee {
    doStuffDifferent() {
        return "do different aprouch";
    }
}
exports.Adaptee = Adaptee;
class Adapter extends Target {
    adaptee;
    constructor(adaptee) {
        super();
        this.adaptee = adaptee;
    }
    doStuff() {
        return super.doStuff() + " but with " + this.adaptee.doStuffDifferent();
    }
}
exports.Adapter = Adapter;
