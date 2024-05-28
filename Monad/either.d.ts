import type { Right } from "./right";

type Left <Value> = {
  <Next>(_    : any, call: (value: Value) => Left<Next>): Left<Next>
  <Next>(_    : any, call: (value: Value) => Next): Right<Next>
  constructor : Left<Value>;
  length      : 1;
  name        : '';
}

declare const either: {
  <Return, Value>(call: (value: Value) => Left<Return>)  : (functor: Left<Value>) => Left<Return>;
  <Return, Value>(call: (value: Value) => Return)        : (functor: Left<Value>) => Right<Return>;
  right : <Value>(value: Value) => Right<Value>;
  left  : <Value>(value: Value) => Left<Value>;
}

export default either;
