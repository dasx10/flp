import type PromiseValue from "../Types/PromiseValue";
import type { Either, Left } from "./either";

export type ToRight<Value> = Value extends Either<any, any>
  ? Value
  : Value extends Left<any>
    ? Value
    : Value extends Right<any>
      ? Value
      : Value extends PromiseLike<infer Next>
        ? Either<Next, unknown>
        : Right<Value>
;

type _Right<Value> = {
  <Resolve>(onresolve: _RightExec<Value, Resolve>,               onreject?: any) : Right<Resolve>;
  <Resolve>(onresolve: (value: Right<Value> | Value) => Resolve, onreject?: any) : Right<Resolve>;
  <Resolve>(onresolve: (value: PromiseLike<Value>)   => Resolve, onreject?: any) : Either<Resolve, unknown>;

  (): _Right<Value>;

  constructor : _Right<Value>;
  length      : 1;
  name        : '';
  then        : <Resolve>(onresolve: (value: Value) => Resolve, onreject?: () => any) => Right<Resolve>;
};

export type _RightExec<Parameter, Result> = {
  <Return extends Result, Value extends Parameter>(onresolve: Value | Right<Value>, onreject?: any): Right<Return>;
  <Return extends Result, Value extends Parameter>(onresolve: PromiseLike<Value>, onreject?: any): Either<Return, unknown>;
  (onresolve: Parameter | Right<Parameter>, onreject?: any): Right<Result>;
  (onresolve: PromiseLike<Parameter>, onreject?: any): Either<Result, unknown>;
}
;

export type Right<Value> = Value extends _Right<any>
  ? Value
  : Value extends PromiseLike<infer Next>
    ? Either<Next, unknown>
    : Value extends (value: infer Parameter) => infer Result
      ? _RightExec<Parameter, Result> & _Right<Value>
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
