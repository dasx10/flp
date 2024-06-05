import { Either, Left } from "./either";

export type ToRight<Value> = Value extends Either<any, any>
  ? Value
  : Value extends PromiseLike<infer Next>
    ? Either<Next, unknown>
    : Right<Value>
;

export type Right<Value> = {
  <Next>(call : (value: Value) => Next, _?: any): ToRight<Next>;
  constructor : Right<Value>;
  length      : 1;
  name        : '';
  then        : Right<Value>;
}

export type RightConstructor = <Value>(value: Value) => ToRight<Value>;

declare const right: RightConstructor;
export default right;
