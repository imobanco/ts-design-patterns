import {
  ICommand,
  CommandSimple,
  CommandComplex,
  CommandReceiver,
} from "./command";

class CommandInvoker {
  private _onStart: ICommand;
  private _onFinish: ICommand;

  get onStart(): ICommand {
    return this._onStart;
  }

  set onStart(command: ICommand) {
    this._onStart = command;
  }

  get onFinish(): ICommand {
    return this._onFinish;
  }

  set onFinish(command: ICommand) {
    this._onFinish = command;
  }

  private isCommand(object: ICommand): object is ICommand {
    return object.doStuff() !== undefined;
  }

  public doSomeThingImportant(): void {
    console.log("Invoker: should i do some thing before start?");

    this.isCommand(this.onStart) ? this.onStart.doStuff() : {};

    console.log("Invoker: now doing realy important stuff");

    console.log("Invoker: should i do some thing before finish?");

    this.isCommand(this.onFinish) ? this.onFinish.doStuff() : {};
  }
}

function _() {
  const invoker = new CommandInvoker();

  invoker.onStart = new CommandSimple("say hello");

  const receiver = new CommandReceiver();

  invoker.onFinish = new CommandComplex(
    receiver,
    "save report",
    "send as email"
  );

  invoker.doSomeThingImportant();
}

_();
