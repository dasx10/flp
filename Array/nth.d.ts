import type ArrayNth     from "../Types/ArrayNth";
import type ArgumentUInt from "../Types/ArgumentUInt";

/**
  * @function
  * @name nth
  * @memberof Array
  * @param {number} index
  * @return {function}
  * @example
  * ```javascript
  * nth(0)([1, 2, 3]) // 1
  * nth(1)([1, 2, 3]) // 2
  * nth(2)([1, 2, 3]) // 3
  * nth(3)([1, 2, 3]) // undefined
  * nth(-1)([1, 2, 3]) // undefined
  * nth(-2)([1, 2, 3]) // undefined
  * ```
  */
export default function nth<Index extends number>(index: ArgumentUInt<Index>): <Values extends readonly any[]>(values: Values) => ArrayNth<Values, Index>;
