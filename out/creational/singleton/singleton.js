"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Singleton {
    static instance;
    constructor() { }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    doStuff() {
        console.log("doing stuff");
    }
}
exports.default = Singleton;
