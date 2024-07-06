import PromiseValue from "../Types/PromiseValue";
import { Either, Left } from "./either";

export type ToRight<Value> = Value extends Either<any, any>
  ? Value
  : Value extends PromiseLike<infer Next>
    ? Either<Next, unknown>
    : Right<Value>
;


export type _Right<Value> = {
  <Resolve>(onresolve: (value: RightValue<Value>) => Resolve, onreject?: any): ToRight<Resolve>
  <Resolve>(onresolve: Right<(value: RightValue<Value>) => Resolve>, onreject?: any): ToRight<Resolve>
  (): _Right<Value>;
  constructor : Right<RightValue<Value>>;
  length      : 1;
  name        : '';
  then : {
    <Resolve>(onresolve: (value: RightValue<Value>) => Resolve, onreject?: () => any): ToRight<Resolve>;
  }
};

export type Right<Value> = Value extends (value: infer Parameter) => infer Result
  ? {
    <Return extends Result, Value extends Parameter>(onresolve: Value | Right<Value>, onreject?: any): ToRight<Return>;
    (onresolve: Parameter | Right<Parameter>, onreject?: any): ToRight<Result>;
  } & _Right<Value>
  : _Right<Value>
;

export type RightConstructor = <Value>(value: Value) => ToRight<Value>;

export type RightValue<MaybeRight> = MaybeRight extends Right<infer Value>
  ? Value
  : MaybeRight extends Left<any>
    ? never
    : PromiseValue<MaybeRight> | MaybeRight
;

declare const right: RightConstructor;
export default right;
