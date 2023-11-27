import type Lambda    from "../../../types/Lambda";
import type Parameter from "../../../types/Parameter";

/**
  * @example
  * var add = (x, y) => x + y;
  * curry2(add)(1)(1); // 2
  * var addC = curry2(add);
  * var add1 = addC(1);
  * add1(1); // 2
  * add1(2); // 3
  */
export default function curry2<Return>(call: () => Return): () => () => Return
export default function curry2<Value, Return>(call: (value: Value ) => Return): () => (next: Next) => Return
export default function curry2<Value, Next, Return>(call: (value: Value, next: Next) => Return): (value: Value) => (next: Next) => Return
