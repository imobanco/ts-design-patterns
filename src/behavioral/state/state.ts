class Context {
  constructor(private state: State) {
    this.changeState(state);
  }

  public changeState(state: State): void {
    console.log(`change to new state: ${<any>state.constructor.name}`);
    this.state = state;
    this.state.setContext(this);
  }

  public doStuff() {
    this.state.doStuff();
  }
}

abstract class State {
  protected context: Context;

  public setContext(context: Context) {
    this.context = context;
  }

  public abstract doStuff(): void;
}

class ConcreteStateOne extends State {
  public doStuff() {
    console.log("State One doing their stuff");
    this.context.changeState(new ConcreteStateTwo());
  }
}

class ConcreteStateTwo extends State {
  public doStuff() {
    console.log("State Two doing their stuff");
    this.context.changeState(new ConcreteStateOne());
  }
}

export { Context, ConcreteStateOne };
