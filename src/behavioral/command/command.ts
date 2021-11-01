interface ICommand {
  doStuff(): void;
}

class CommandReceiver {
  public doSomeThing(param: string): void {
    console.log(`receiver doing: ${param}`);
  }

  public doSomeThingElse(param: string): void {
    console.log(`receiver also doing: ${param}`);
  }
}

class CommandSimple implements ICommand {
  private payload: string;

  constructor(payload: string) {
    this.payload = payload;
  }

  doStuff(): void {
    console.log(`simple command printing ${this.payload} as desired`);
  }
}

class CommandComplex implements ICommand {
  private receiver: CommandReceiver;
  private one: string;
  private two: string;

  constructor(receiver: CommandReceiver, one: string, two: string) {
    this.receiver = receiver;
    this.one = one;
    this.two = two;
  }

  doStuff(): void {
    console.log(`complex command starting`);
    this.receiver.doSomeThing(this.one);
    this.receiver.doSomeThingElse(this.two);
  }
}

export { ICommand, CommandSimple, CommandComplex, CommandReceiver };
