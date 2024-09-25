import type { Either, Left } from "./either";

type primitive = number | string | boolean | null | undefined | symbol | bigint;

export type RightOf<Value> = Value extends Either<any, any>
    ? Value
    : Value extends Right<any>
      ? Value
      : Value extends PromiseLike<infer Next>
        ? Either<Awaited<Next>, unknown>
        : Right<Value>
;

export type Ap<Value> = <Return>(resolve: (value: Value) => Return) => any;
export type MayAp<Value> = Ap<Value> | Value;

type AwatedRight<Value> = Value extends (resolve: (x: infer X) => infer Y) => any
  ? Value
  : Awaited<Value>
;

type ThenRight<Value> = {
  <Return>(resolve: (value: Awaited<Value>) => Return, reject?: (value: never) => never): RightOf<Return>;
  then: ThenRight<Value>;
};

type RightContainer<Value> = {
  <Return>(resolve: (value: Awaited<Value>) => Return, reject?: (value: never) => never): RightOf<Return>;
  then: ThenRight<Value>;
}

type RightFunction<Value> = Value extends Awaited<(value: infer Parameter) => infer Result> ? {
  <Rejected>(value: Either<Parameter, Rejected>): Either<Result, Rejected>;
  <Rejected>(value: Left<Rejected>): Left<Rejected>;
  (value: Ap<Parameter>): RightOf<Result>;
  (value: Right<Parameter>): RightOf<Result>;
  (value: PromiseLike<Parameter>): Either<Result, unknown>;
  (value: Awaited<Parameter>): RightOf<Result>;
} : RightContainer<Value>;

export type Right<Value> = RightFunction<Value> & RightContainer<Value>;

export type RightConstructor = {
  <Value extends primitive>(value: Value): Right<Value>;
  <Value>(value: Value): RightOf<Value>;
};

declare const right: RightConstructor;
export default right;
