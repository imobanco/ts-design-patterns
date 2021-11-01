import Singleton from "./singleton";

function _() {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  s1 === s2 ? console.log("same instances") : console.log("diff instances");
  s1.doStuff();
}

_();
