class Target {
  public doStuff(): string {
    return "do stuff as desired";
  }
}

class Adaptee {
  doStuffDifferent(): string {
    return "do different aprouch";
  }
}

class Adapter extends Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    super();
    this.adaptee = adaptee;
  }

  public doStuff(): string {
    return super.doStuff() + " but with " + this.adaptee.doStuffDifferent();
  }
}

export { Target, Adaptee, Adapter };
