import type Index from "../types";
import type IterateCall from "../types/IterateCall";

/**
  * @function
  * @name countFrom
  * @example
  * ```
  * var numbers = [1, 2, 3];
  * var identity = (value) => value;
  * countFrom(0)(identity)(numbers); // 6;
  * countFrom(1)(identity)(numbers); // 7;
  * countFrom(10)(identity)(numbers); // 16;
  * countFrom(0)(identity)([]); // 0;
  * countFrom(1)(identity)([]); // 1;
  *
  * var count = countFrom(0);
  * count(identity)(numbers); // 6;
  * ```
  */
export default function countFrom(length: 0)
   : <Value>(call: IterateCall<any, Value>)
  => <Values extends readonly Value[]>(values: Values) => Index<Values>;

export default function countFrom<Length extends number>(length: Length)
   : <Value>(call: IterateCall<any, Value>)
  => (values: readonly Value[]) => number;

