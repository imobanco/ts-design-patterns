"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singleton_1 = require("./singleton");
function _() {
    const s1 = singleton_1.default.getInstance();
    const s2 = singleton_1.default.getInstance();
    s1 === s2 ? console.log("same instances") : console.log("diff instances");
    s1.doStuff();
}
_();
