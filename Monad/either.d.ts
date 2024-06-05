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
  <Return, Value>(call: (value: Value) => Left<Return>)  : (functor: Left<Value>) => Left<Return>;
  <Return, Value>(call: (value: Value) => Return)        : (functor: Left<Value>) => Right<Return>;
  right : RightConstructor;
  left  : LeftConstructor;
}

export declare const right: RightConstructor;
export declare const left: LeftConstructor;
export default either;
