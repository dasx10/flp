import type IterateCall from "../types/IterateCall";

/**
  * @function
  * @name countBy
  * @example
  * ```
  * var numbers = [-1, 0, 1, 2];
  * countBy(Math.abs)(numbers); // { "1": 2, "0": 1, "2": 1 };
  * countBy(String)(["0", 0, "1", 1]); // { "0": 2, "1": 2 };
  * countBy(Boolean)([false, 0, "", null, true]); // { "false": 4, "true": 1 };
  * ```
  */
export default function countBy<Key, Value>(call: IterateCall<Key, Value>): <Values extends readonly Value[]>(values: Values) => Record<Key, number>;
