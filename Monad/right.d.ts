export type Right<Value> = {
  <Next>(call : (value: Value) => Left<Next>, _?: any): Left<Next>;
  <Next>(call : (value: Value) => Next, _?: any): Right<Next>;
  constructor : Right<Value>;
  length      : 1;
  name        : '';
}

export default function right<Value>(value: Value): Right<Value>;
