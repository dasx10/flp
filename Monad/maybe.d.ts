import type { Right } from "./right";

type nil = null | undefined | void;

export type Nothing = {
  (value    ?: any)           : Nothing;
  length     : 0;
  then(call? : () => any, next: (x: void) => any): Nothing;
  toString   : ()=>"";
  valueOf    : ()=>void;
  toJSON     : ()=>null,
}

export declare const nothing: Nothing;
type JustConstructor = <Value>(value: Exclude<Value, nil | Nothing | PromiseLike<nil>>) => Maybe<Value>;
export declare const just: JustConstructor;

type Maybe<Value> = Value extends nil | Nothing
  ? Nothing
  : Value extends Right<infer Next>
    ? Maybe<Next>
    : Value extends PromiseLike<infer Next>
      ? Maybe<Next> | Nothing
      : Just<Value>
;

export type Just<Value> = {
  <Return>(call?: (value: Value) => Return): Maybe<Return>;
  then   : Just<Value>;
  length : 1;
  name   : '';
};

declare const maybe: {
  (value: nil | PromiseLike<nil> | Nothing): Nothing;
  <Value>(value: Value): Maybe<Value>;
  just    : JustConstructor;
  nothing : Nothing;
};

export default maybe;
