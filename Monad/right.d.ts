import PromiseValue from "../Types/PromiseValue";
import { Either, Left } from "./either";

export type ToRight<Value> = Value extends Either<any, any>
  ? Value
  : Value extends PromiseLike<infer Next>
    ? Either<Next, unknown>
    : Right<Value>
;

export type Right<Value> = {
  (): ToRight<RightValue<Value>>
  <Resolve>(call: (value: RightValue<Value>) => Resolve, onreject?: () => any): ToRight<Resolve>;
  constructor : Right<RightValue<Value>>;
  length      : 1;
  name        : '';
  then : {
    <Resolve>(onresolve: (value: RightValue<Value>) => Resolve, onreject?: () => any): ToRight<Resolve>;
    (): ToRight<RightValue<Value>>
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
