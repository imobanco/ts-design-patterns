"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteStateOne = exports.Context = void 0;
class Context {
    state;
    constructor(state) {
        this.state = state;
        this.changeState(state);
    }
    changeState(state) {
        console.log(`change to new state: ${state.constructor.name}`);
        this.state = state;
        this.state.setContext(this);
    }
    doStuff() {
        this.state.doStuff();
    }
}
exports.Context = Context;
class State {
    context;
    setContext(context) {
        this.context = context;
    }
}
class ConcreteStateOne extends State {
    doStuff() {
        console.log("State One doing their stuff");
        this.context.changeState(new ConcreteStateTwo());
    }
}
exports.ConcreteStateOne = ConcreteStateOne;
class ConcreteStateTwo extends State {
    doStuff() {
        console.log("State Two doing their stuff");
        this.context.changeState(new ConcreteStateOne());
    }
}
