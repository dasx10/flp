import type ArgumentInt from "../Types/ArgumentInt";
import type ArgumentUInt from "../Types/ArgumentUInt";

import type { Reverse } from "./reverse";

type At<Index extends number, Values extends readonly any[]> = number extends Index
  ? undefined | Values[Index]
  : `${Index}` extends `-${infer Inverse}`
    ? [never, ...Reverse<Values>][Inverse]
    : Values[Index]
;

/**
  * @description Get the value at the specified index
  * @function
  * @name at
  * @param {number} index
  * @return {function}
  * @example
  * ```
  * at(0)([1, 2, 3]) // 1
  * at(1)([1, 2, 3]) // 2
  * at(2)([1, 2, 3]) // 3
  * at(3)([1, 2, 3]) // undefined
  * at(-1)([1, 2, 3]) // 3
  * at(-2)([1, 2, 3]) // 2
  * at(-3)([1, 2, 3]) // 1
  * at(-4)([1, 2, 3]) // undefined
  * ```
  * @see {@link Array.prototype.at}
  * @see {@link https://tc39.es/ecma262/#sec-array.prototype.at}
  */
export default function at<Index extends number>(index: ArgumentInt<Index>): <Values extends readonly any[]>(values: Values) => At<Index, Values>;
declare export var then: (resolve: (value: typeof at) => any) => any;
