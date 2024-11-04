type Right<Value, Reason = never> = Value extends (RightContainer<any, any> | LeftContainer<any, any> | EitherContainer<any, any>)
  ? Value
  : Value extends PromiseLike<infer Resolved>
    ? EitherContainer<Resolved, unknown>
    : RightContainer<Value, Awaited<Reason>>
;

type Left<Reason, Value = never> = Reason extends LeftContainer<any, any>
  ? Reason
  : LeftContainer<Awaited<Value>, Awaited<Reason>>
;

type LeftInfer<Value> = Value extends LeftContainer<any, infer Reason>
  ? Reason
  : Value
;

type RightInfer<Value> = Value extends RightContainer<infer Value>
  ? Value
  : Value
;

type Either<Resolved, Rejected> = Resolved extends LeftContainer<any, infer Reason>
  ? LeftContainer<Resolved, Reason | LeftInfer<Rejected>>
  : Resolved extends RightContainer<infer Value>
    ? Either<Value, LeftInfer<Rejected>>
    : Resolved extends PromiseLike<infer Resolved>
      ? Either<Resolved, unknown>
      : Resolved extends EitherContainer<infer RightValue, infer LeftValue>
        ? EitherContainer<RightValue, LeftValue | LeftInfer<Rejected>>
        : EitherContainer<RightInfer<Resolved>, LeftInfer<Rejected>>
;


type AsyncValue<Value> = Value extends PromiseLike<infer Resolved>
  ? Resolved | PromiseLike<Resolved>
  : Value    | PromiseLike<Value>
;

type AsyncCall<Call> = Call extends PromiseLike<(value: infer Value) => infer Return>
  ? AsyncValue<(value: AsyncValue<Value>) => AsyncValue<Return> | Call>
  : AsyncValue<Call>
;

type EitherContainer<RightValue = unknown, LeftValue = unknown> = ({
  <Resolved = RightValue, Rejected = LeftValue>(resolve: (value: RightValue) => Resolved, reject?: (value: LeftValue) => Rejected) : Either<Resolved, Rejected>;
  then   : EitherContainer<RightValue, LeftValue>;
  name   : LeftContainer["name"]   | RightContainer["name"];
  length : LeftContainer["length"] | RightContainer["length"];
});

type LeftContainer <RightValue = never, LeftValue = unknown> = {
  <Resolved>(resolve: (value: RightValue) => Resolved): LeftContainer<Resolved, LeftValue>;
  <Resolved, Rejected>(resolve: (value: RightValue) => Resolved, reject: (value: LeftValue) => Rejected): Right<Rejected>;
  then   : LeftContainer<RightValue, LeftValue>;
  name   : "left";
  length : 1 | 2;
}

export type RightContainer <Value = unknown, LeftValue = never> = {
  <Resolved>(resolve: (value: Awaited<Value>) => Resolved, reject?: (value: LeftValue) => any): Right<Resolved>;
  then   : RightContainer<Awaited<Value>>;
  name   : "right";
  length : 1 | 2;
}

export type RightConstructor = {
  <Value extends number | string | boolean | undefined | null | object>(value: Value): Right<Value>;
  <Value>(value: Value): Right<Value>;
}
type LeftConstructor  = <Value>(value: Value) => Left<Value>;

type EitherConstructor = <Return, Value>(call: (value: Value) => Return) => {
  (functor : LeftContainer<Value>)                   : Right<Return>;
  (functor : RightContainer<Value>)                  : Right<Value>;
  (functor : EitherContainer<RightValue, LeftValue>) : Either<RightValue, LeftValue | Return>;
  (functor : PromiseLike<Value>)                     : Either<Value, unknown>;
}

export declare const right  : RightConstructor;
export declare const left   : LeftConstructor;

declare const either : EitherConstructor & {
  right : RightConstructor;
  left  : LeftConstructor;
};

export default either;
