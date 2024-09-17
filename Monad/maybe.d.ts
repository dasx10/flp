import type { Right } from "./right";

type nil = null | undefined | void;
type none = nil | PromiseLike<nil> | Nothing;

export interface Nothing {
  (...values?: any) : Nothing;
  length     : 0 | 1 | 2;
  name       : '';
  toString   : () => "";
  valueOf    : () => void;
  toJSON     : () => void,
  then       : {
    <X>(resolve: (x?: never) => never, reject: (x?: any) => any): Nothing | Maybe<X>,
    (resolve: (x?: never) => any): Nothing,
  }
};

export declare const nothing: Nothing;
type JustConstructor = <Value>(value: Exclude<Value, nil | Nothing | PromiseLike<nil>>) => Just<Value>;
export declare const just: JustConstructor;

export type Maybe<X> = (Awaited<X> extends nil ? Nothing : Just<X>;

export type Just<X> = Awaited<X> extends nil ? never : {
  <Y>(call : (x: Awaited<X>) => Y, reject?: (x: unknown) => any): Maybe<Awaited<Y>>;
  then     : (resolve: (x: Awaited<X>) => any, reject?: (x: unknown) => any) => Maybe<Awaited<X>>;
  length   : 1 | 2;
  name     : '';
  toString : () => "";
};

declare const maybe: {
     (x : none) : Nothing;
  <X>(x : X)    : Maybe<X>;
  just          : JustConstructor;
  nothing       : Nothing;
};

export default maybe;
