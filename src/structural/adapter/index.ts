import { Target, Adaptee, Adapter } from "./adapter";

function _() {
  const target = new Target();
  const adaptee = new Adaptee();
  const adapter = new Adapter(adaptee);

  console.log(target.doStuff());
  console.log(adaptee.doStuffDifferent());
  console.log(adapter.doStuff());
}

_();
