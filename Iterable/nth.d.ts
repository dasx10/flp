import type ArgumentUInt from "../Types/ArgumentUInt";

/**
  * @function
  * @param {number} index
  * @return {function}
  * @example
  * ```javascript
  * var test = function* values() { yield 1; yield 2; yield 3; }
  * nth(1)(test()) // 2
  * nth(2)(test()) // 3
  * nth(3)(test()) // undefined
  * nth(1)([1, 2, 3]) // 2
  * nth(1)(new Set([1, 2, 3])) // 2
  * ```
  */
export default function nth<Index extends number>(index: ArgumentUInt<Index>): <Value>(values: Iterable<Value>) => Value | undefined;
