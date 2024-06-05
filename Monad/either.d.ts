import type PromiseValue from "../Types/PromiseValue";
import type { Just, Nothing } from "./maybe";
import type { Right, ToRight } from "./right";

type ToLeft<Value> = Value extends Right<infer Next>
  ? ToLeft<Next>
  : Value extends Left<any>
    ? Value
    : Value extends PromiseLike<any>
      ? Left<unknown>
      : Left<Value>
;

export type Left <Value> = {
  (_?: any)   : Left<Value>;
  <Next>(_    : any, call: (value: Value) => Next): Next extends Either<any, any> ? Next : ToRight<Next>;
  constructor : Left<Value>;
  length      : 2;
  name        : '';
  then        : Left<Value>;
}

export type Either<Reolved = unknown, Rejected = unknown> = Left<Reolved> | Right<Rejected>;

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
