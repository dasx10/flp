import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

type Right <Value> = {
  <Return>(call: Lambda<Return, Value>): Right<Return> | Left<unknown>;
}

type Left<Value> = {
  (_: any): Left<Value>;
  <Return>(_: any, call: (value?: Value) => Return): Right<Return> | Left<Value>;
}

type Either<RightValue, LeftValue> = Right<RightValue> | Left<LeftValue>;

type ExecRight  = <Value>(value: Value) => Right<Value>;
type ExecLeft   = <Value>(value: Value) => Left<Value>;

type Constructor = <
  Return extends Lambda<Left<any> | Right<any>, any>,
>(call: (right: ExecRight, left: ExecLeft) => Return) => Return;

declare const either: Constructor & {
  right : ExecRight;
  left  : ExecLeft;
}

export default either;
