import type { Left, Right, Either, LeftInfer } from "../Monad/either";

export default function then<Return, Value>(call: (value: Value) => Return | PromiseLike<Return>): {
  <PromiseValue extends Either<Value, any>>(value: PromiseValue): Either<Return, LeftInfer<PromiseValue>>;
  <PromiseValue extends Right<Value>>(value: PromiseValue): Right<Return>;
  <PromiseValue extends Left<any>>(value: PromiseValue): PromiseValue;
  <PromiseValue extends Promise<Value>>(value: PromiseValue): Promise<Return>;
  <PromiseValue extends PromiseLike<Value>>(value: PromiseValue): PromiseLike<Return>;
}
