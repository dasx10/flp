import type Index       from "../types";
import type IterateCall from "../types/IterateCall";

import type length from "../length";
import type filter from "../filter";

/**
  * @description Counts the number of values that satisfy the condition.
  * @function
  * @name count
  * @example
  * ```
  * var numbers = [1, 2, 3, 4];
  * var isEven  = (value) => value % 2 === 0;
  * count(isEven)(numbers); // 2;
  * count(value => value > -1)(numbers); // 4;
  * count(value => value > 0)(numbers); // 4;
  * count(value => value > 1)(numbers); // 3;
  * count(value => value > 2)(numbers); // 2;
  * count(value => value > 3)(numbers); // 1;
  * count(value => value > 4)(numbers); // 0;
  * count(value => value > 5)(numbers); // 0;
  * ```
  *
  * @see {@link length}
  * @see {@link filter}
  *
  */
export default function count<Value>(call: IterateCall<any, Value>): <Values extends readonly Value[]>(values: Values) => Index<Values>;
