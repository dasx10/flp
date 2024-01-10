import type Index from "../types";

/**
  * @function
  * @name countOfFrom
  * @param {number} create
  * @returns {Function}
  * @example
  * ```
  * var numbers = [1, 2, 2, 3, 3, 3];
  * countOfFrom(0)(0)(numbers); // 0
  * countOfFrom(1)(0)(numbers); // 1
  * countOfFrom(2)(0)(numbers); // 2
  * countOfFrom(0)(1)(numbers); // 1
  * countOfFrom(1)(1)(numbers); // 2
  * countOfFrom(2)(1)(numbers); // 3
  * countOfFrom(0)(2)(numbers); // 2
  * countOfFrom(1)(2)(numbers); // 3
  * countOfFrom(2)(2)(numbers); // 4
  * countOfFrom(0)(3)(numbers); // 3
  * countOfFrom(1)(3)(numbers); // 4
  * countOfFrom(2)(3)(numbers); // 5
  * countOfFrom(0)(4)(numbers); // 0
  * countOfFrom(1)(4)(numbers); // 1
  * ```
  */
export default function countOfFrom(create: 0)
   : <Value>(value: Value)
  => <Values extends readonly any[]>(values: Values)
  => Index<Values>

export default function countOfFrom<From extends number>(create: number)
    : <Value>(value: Value)
  => {
    (values: readonly any[]): number;
    (values: []): From;
  }
;
