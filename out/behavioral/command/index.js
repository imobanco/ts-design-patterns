"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("./command");
class CommandInvoker {
    _onStart;
    _onFinish;
    get onStart() {
        return this._onStart;
    }
    set onStart(command) {
        this._onStart = command;
    }
    get onFinish() {
        return this._onFinish;
    }
    set onFinish(command) {
        this._onFinish = command;
    }
    isCommand(object) {
        return object.doStuff() !== undefined;
    }
    doSomeThingImportant() {
        console.log("Invoker: should i do some thing before start?");
        this.isCommand(this.onStart) ? this.onStart.doStuff() : {};
        console.log("Invoker: now doing realy important stuff");
        console.log("Invoker: should i do some thing before finish?");
        this.isCommand(this.onFinish) ? this.onFinish.doStuff() : {};
    }
}
function _() {
    const invoker = new CommandInvoker();
    invoker.onStart = new command_1.CommandSimple("say hello");
    const receiver = new command_1.CommandReceiver();
    invoker.onFinish = new command_1.CommandComplex(receiver, "save report", "send as email");
    invoker.doSomeThingImportant();
}
_();
