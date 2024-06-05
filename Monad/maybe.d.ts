import { Nothing } from "./nothing";
import { Right } from "./right";

type Maybe<Value> = Value extends null | undefined | void
  ? Nothing
  : Value extends Right<infer Next>
    ? Maybe<Next>
    : Value extends PromiseLike<infer Next>
      ? Maybe<Next> | Nothing
      : Just<Value>
;

type Just<Value> = <Return>(call: (value: Value) => Return) => Maybe<Return>;

export default function maybe(value: null | undefined | void | PromiseLike<null | void | undefined>): Nothing;
export default function maybe<Value>(value: Value): Maybe<Value>;
