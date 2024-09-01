import type PromiseValue from "../Types/PromiseValue";
import type { Just, Nothing } from "./maybe";
import type { _Right, Right, RightConstructor, RightValue, ToRight } from "./right";
export type { Right } from "./right";

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
  (onresolve?: (value: any) => any): Left<LeftValue<Value>>
  <Reject>(onresolve: (value: any) => any, onreject?: (value: Value) => Reject): Right<Reject>;
  constructor : Left<Value>;
  length      : 2;
  name        : '';
  then        : {
    <Reject>(onresolve: (() => any) | null | undefined, onreject: (value: Value) => Reject): Resolve<LeftValue<Value>>
    (onresolve?: (() => any) | null | undefined): Left<LeftValue<Value>>
  }
};

export type Either<
  Resolved = unknown,
  Rejected = unknown,
> = Left<Rejected> | Right<Resolved>;

type RollRight<Value> = Value extends _Right<infer Next>
  ? Next
  : Value extends _Either<infer Next, any>
    ? Next
    : Value extends PromiseLike<infer Next>
      ? Next
      : Value
;

type RollLeft<Value> = Value extends Left<infer Next>
  ? Next
  : Value extends _Either<any, infer Next>
    ? Next
    : Value extends PromiseLike<any>
      ? unknown
      : Value
;

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
