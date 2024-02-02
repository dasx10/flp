import type ArrayReverse from "../../types/Array/Reverse";

/**
  * @example
  * reverse([1, 2, 3]); // [3, 2, 1]
  */
export default function reverse<Values extends readonly any[]>(values: Values): ArrayReverse<Values>;
