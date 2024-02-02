import type Index from "../types";
/**
  * @function
  * @name countOf
  * @param {*} value
  * @returns {Function}
  * @example
  * ```
  * var numbers = [1, 2, 3, 4];
  * countOf(0)(numbers); // 0
  * countOf(1)(numbers); // 1
  * countOf(2)(numbers); // 1
  * countOf(3)(numbers); // 1
  * countOf(4)(numbers); // 1
  * countOf(5)(numbers); // 0
  *
  * var values = ["a", "a", "b", "b", "b", "c", "c", "c", "c"];
  * countOf("a")(values); // 2
  * countOf("b")(values); // 3
  * countOf("c")(values); // 4
  * countOf("d")(values); // 0
  * ```
  */
export default function countOf(value: any): <Values extends readonly any[]>(values: Values) => Index<Values>;
