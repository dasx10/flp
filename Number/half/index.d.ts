import type NumberExclude from "../types/NumberExclude";

import type div    from "../div";
import type double from "../double";

/**
  * @summary `x = y / 2`
  * @description Divides a number by 2
  * `Math`
  * @param {number} value number
  * @returns {number} number
  * @function
  * @name half
  * @alias divideBy2
  * @see {@link div}
  * @see {@link double}
  * @example
  * half(0); // 0
  * half(1); // 0.5
  * half(2); // 1
  * half(3); // 1.5
  */
export default function half(value: 0): 0;
export default function half<Value extends number>(value: Value): NumberExclude<number, Value>
