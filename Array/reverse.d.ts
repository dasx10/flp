import type ArrayReverse from "../types/Array/Reverse";

/**
  * @example
  * ```javascript
  * reverse([1, 2, 3]) // [3, 2, 1]
  * reverse([2, 1]) // [1, 2]
  * reverse([1]) // [1]
  * reverse([]) // []
  * ```
  * @name reverse
  */
export function reverse<Values extends readonly any[]>(values: Values): ArrayReverse<Values>;
