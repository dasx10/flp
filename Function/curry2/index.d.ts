import type Lambda    from "../../../types/Lambda";
import type Constanta from "../../../types/Constanta";

/**
  * @example
  * var add = (x, y) => x + y;
  * curry2(add)(1)(1); // 2
  * var addC = curry2(add);
  * var add1 = addC(1);
  * add1(1); // 2
  * add1(2); // 3
  */
export default function curry2<Return, Value, Next> (call: (value: Value, next: Next) => Return) : (next: Next) => (value: Value) => Return
export default function curry2<Return, Value>       (call: Lambda<Return, Value>)                : ()           => (value: Value) => Return
export default function curry2<Return>              (call: Constanta<Return>)                    : ()           => ()             => Return
