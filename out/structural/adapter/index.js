"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapter_1 = require("./adapter");
function _() {
    const target = new adapter_1.Target();
    const adaptee = new adapter_1.Adaptee();
    const adapter = new adapter_1.Adapter(adaptee);
    console.log(target.doStuff());
    console.log(adaptee.doStuffDifferent());
    console.log(adapter.doStuff());
}
_();
