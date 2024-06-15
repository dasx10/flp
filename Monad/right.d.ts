import PromiseValue from "../Types/PromiseValue";
import { Either, Left } from "./either";

export type ToRight<Value> = Value extends Either<any, any>
  ? Value
  : Value extends PromiseLike<infer Next>
    ? Either<Next, unknown>
    : Right<Value>
;

export type Right<Value> = {
  <Next>(call : (value: RightValue<Value>) => Next, _?:any): ToRight<Next>;
  constructor : Right<RightValue<Value>>;
  length      : 1;
  name        : '';
  // then        : Right<RightValue<Value>>;
  then : {
    <Resolve extends (value: Value) => any>(resolve: Resolve): Right<ReturnType<Resolve>>;
    <Resolved>(resolve: (value: Value) => Resolved, next?: any): Right<Resolved>;
  } & Right<RightValue<Value>>;
};

var a: PromiseLike<any>

export type RightConstructor = <Value>(value: Value) => ToRight<Value>;

export type RightValue<MaybeRight> = MaybeRight extends Right<infer Value>
  ? Value
  : MaybeRight extends Left<any>
    ? never
    : PromiseValue<MaybeRight> | MaybeRight
;

declare const right: RightConstructor;
export default right;
