import { Context, ConcreteStateOne } from "./state";

function _() {
  const context = new Context(new ConcreteStateOne());
  context.doStuff();
  context.doStuff();
}
_();
