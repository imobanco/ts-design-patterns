"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandReceiver = exports.CommandComplex = exports.CommandSimple = void 0;
class CommandReceiver {
    doSomeThing(param) {
        console.log(`receiver doing: ${param}`);
    }
    doSomeThingElse(param) {
        console.log(`receiver also doing: ${param}`);
    }
}
exports.CommandReceiver = CommandReceiver;
class CommandSimple {
    payload;
    constructor(payload) {
        this.payload = payload;
    }
    doStuff() {
        console.log(`simple command printing ${this.payload} as desired`);
    }
}
exports.CommandSimple = CommandSimple;
class CommandComplex {
    receiver;
    one;
    two;
    constructor(receiver, one, two) {
        this.receiver = receiver;
        this.one = one;
        this.two = two;
    }
    doStuff() {
        console.log(`complex command starting`);
        this.receiver.doSomeThing(this.one);
        this.receiver.doSomeThingElse(this.two);
    }
}
exports.CommandComplex = CommandComplex;
