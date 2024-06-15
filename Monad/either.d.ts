import type PromiseValue from "../Types/PromiseValue";
import type { Just, Nothing } from "./maybe";
import type { Right, RightConstructor, ToRight } from "./right";

type ToLeft<Value> = Value extends Right<infer Next>
  ? ToLeft<Next>
  : Value extends Left<any>
    ? Value
    : Value extends PromiseLike<any>
      ? Left<unknown>
      : Left<Value>
;

type Resolve<Value> = Value extends Either<any, any> ? Value : ToRight<Value>;

export type Left <Value> = {
  (onresolve?: (() => any) | null | undefined): Left<LeftValue<Value>>
  <Reject>(onresolve : (() => any) | null | undefined, call: (value: Value) => Reject): Resolve<Reject>;
  constructor : Left<Value>;
  length      : 2;
  name        : '';
  then        : {
    <Reject>(onresolve: (() => any) | null | undefined, onreject: (value: Value) => Reject): Resolve<LeftValue<Value>>
    (onresolve?: (() => any) | null | undefined): Left<LeftValue<Value>>
    (): Left<LeftValue<Value>>
  }
};

export type Either<Resolved = unknown, Rejected = unknown> = {
  <Resolve, Reject>(onresolve: (value: Resolved) => Resolve, onreject: (value: Rejected) => Reject): Either<Resolve, Reject>;
  <Resolve>(onresolve: (value: Resolved) => Resolve): Either<Resolve, Rejected>;
  length: 1 | 2;
  name: '';
  constructor: Either<Resolved, Rejected> & (Right<Resolved> | Left<Rejected>);
  then: {
    <Resolve, Reject>(onresolve: (value: Resolved) => Resolve, onreject: (value: Rejected) => Reject): Either<Resolve, Reject>;
    <Resolve>(onresolve: (value: Resolved) => Resolve): Either<Resolve, Rejected>;
    (): Either<Resolved, Rejected>;
  } | Either<Resolved, Rejected>;
} & (Right<Resolved> | Left<Rejected>);

export type LeftValue<Value> = Value extends Left<infer Next>
  ? LeftValue<Next>
  : Value extends Right<any>
    ? never
    : Value extends PromiseLike<infer Next>
      ? LeftValue<Next> | unknown
      : Value
;

type LeftConstructor = <Value>(value: Value) => ToLeft<Value>;

declare const either: {
  <Return, Value>(call: (value: Value) => Return) : {
    (functor: Left<Value>): ToRight<Return>;
    (functor: Nothing): ToRight<Return>;
    <X extends Right<any> | Just<any>>(functor: X): X;
    (functor: { then: (call?: any, next?: (value: Value) => any) => ToRight<Return>})
    <X extends PromiseLike<any>>(functor: X): Either<PromiseValue<Return> | PromiseValue<X>, unknown>;
  }
  right : RightConstructor;
  left  : LeftConstructor;
}

export declare const right: RightConstructor;
export declare const left: LeftConstructor;
export default either;
