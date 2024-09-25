import {Either, Left} from "./either";
import type { Right } from "./right";

type nil  = null | undefined | void;
type none = nil  | PromiseLike<nil> | Nothing;

export interface Nothing {
  (...values?: any) : Nothing;
  toString   : () => "";
  valueOf    : () => void;
  toJSON     : () => void,
  then       : {
    <Return>(resolve: (value?: void) => Return, reject: (x?: never) => never): Nothing | Maybe<Return>,
    (resolve: (x?: never) => any): Nothing,
  }
};

export declare const nothing: Nothing;
type JustConstructor = <Value>(value: Exclude<Value, nil | Nothing | PromiseLike<nil>>) => Just<Value>;
export declare const just: JustConstructor;

export type Maybe<Value> = Value extends Left<any>
  ? Value
  : Value extends nil
    ? Nothing
    : Value extends Either<infer Resolved, infer Rejected>
      ? Maybe<Resolved> | Left<Rejected>
      : Value extends PromiseLike<infer Next>
        ? Maybe<Next> | Left<unknown>
        : Just<Value>
;

const a: Maybe<Either<10, 20>>
a.then(x => x)

export type Just<X> = X extends none ? never : {
  <Return>(resolve: (value: Awaited<X>) => Return, reject?: (value: unknown) => never) : Maybe<Awaited<Return>>;
  then : Just<X>;
};

declare const maybe: {
     (x : none) : Nothing;
  <X>(x : X)    : Maybe<X>;
  just          : JustConstructor;
  nothing       : Nothing;
};

export default maybe;
