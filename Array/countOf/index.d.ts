import type Index from "../types";
import type IterateCall from "../types/IterateCall";

/**
  * @function
  * @name countOf
  * @example
  * ```
  * var numbers = [1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4];
  * countOf(0)(numbers); // 0;
  * countOf(1)(numbers); // 2;
  * countOf(2)(numbers); // 3;
  * countOf(3)(numbers); // 4;
  * countOf(4)(numbers); // 5;
  * countOf(5)(numbers); // 0;
  * countOf(0)([]); // 0;
  * countOf(1)([]); // 0;
  * ```
  */
export default function countOf(length: 0)
   : <Value>(call: IterateCall<any, Value>)
  => <Values extends readonly Value[]>(values: Values) => Index<Values>;

export default function countOf<Length extends number>(length: Length)
   : <Value>(call: IterateCall<any, Value>)
  => (values: readonly Value[]) => number;

