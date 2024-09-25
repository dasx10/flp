import type { Just, Nothing } from "./maybe";
import type { MayAp, Ap, Right, RightConstructor, RightOf } from "./right";

export {
  Right,
  Ap,
  MayAp,
}

export type LeftOf<Value> = Left<Awaited<Value>>;

export type LeftMaybe<Value> = Value extends Left<infer Reason>
  ? Reason
  : Value extends EitherContainer<any, infer Reason>
    ? Reason
    : Value extends Right<any>
      ? never
      : Value extends PromiseLike<infer Result>
        ? unknown
        : never
;

type LeftValue<Value> = Value extends Left<infer Reason>
  ? Reason
  : Value extends EitherContainer<any, infer Reason>
    ? Reason
    : unknown
;

export type Left<Value> = {
  (resolve: (value: never) => never): Left<Value>;
  <Return>(resolve: (value: never) => any, reject: (value: Awaited<Value>) => Return): RightOf<Return>;
  then: Left<Awaited<Value>>;
};

export type EitherContainer<
  Value,
  Reason
> = ({
  <Resolve, Reject>(
    resolve: (value: Awaited<Value>)  => Resolve,
    reject : (value: Awaited<Reason>) => Reject
  ): EitherContainer<Awaited<Resolve>, Awaited<Reject> | LeftMaybe<Resolve>>;

  <Resolve>(
    resolve: (value: Awaited<Value>) => Resolve
  ): EitherContainer<Awaited<Resolve>, Reason | LeftMaybe<Resolve>>;

  then: EitherContainer<Value, Reason>;
});

type EitherFunction<
  Value,
  Reason,
> = Value extends Awaited<(value: infer Parameter) => infer Result> ? {
  <Rejected>(value: Either<Parameter, Rejected>): Either<Result, Rejected | Reason>;
  <Rejected>(value: Left<Rejected>): Left<Rejected | Reason>;
  (value: Right<Parameter>): Either<Result, Reason>;
  // (value: Awaited<Parameter>): Either<Result, Reason>;
} : EitherContainer<Value, Reason>;

export type Either<
  Value,
  Reason
> = Value extends Left<infer Rejected>
  ? Left<Rejected | LeftMaybe<Value> | Reason>
  : EitherFunction<Value, Reason | LeftMaybe<Value>> & EitherContainer<Awaited<Value>, Reason | LeftMaybe<Value>>
;

type LeftConstructor = <Value>(value: Value) => LeftOf<Value>;

declare const either: {
  <Return, Value>(call: (value: Value) => Return) : {
    (functor: Left<Value>): RightOf<Return>;
    (functor: Nothing): RightOf<Return>;
    <X extends Right<any> | Just<any>>(functor: X): X;
    (functor: { then: (call?: any, next?: (value: Value) => any) => ToRight<Return>})
    <X extends PromiseLike<any>>(functor: X): EitherContainer<Awaited<Return> | Awaited<X>, unknown>;
  }
  right : RightConstructor;
  left  : LeftConstructor;
}

export declare const right: RightConstructor;
export declare const left: LeftConstructor;
export default either;
