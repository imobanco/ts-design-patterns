"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = require("./state");
function _() {
    const context = new state_1.Context(new state_1.ConcreteStateOne());
    context.doStuff();
    context.doStuff();
}
_();
