import type Conveyor from "../../types/Conveyor";
import type Lambda      from "../../types/Lambda";
import type Parameter   from "../../types/Parameter";
import type IterateCall from "../types/IterateCall";

import type reduceRight from "./reduceRight";

/**
  * @function
  * @name reduce
  * @param {Function} call
  * @returns {Function}
  * @example
  * ```
  * var numbers = [1, 2, 3, 4, 5];
  * var sum = reduce(add)(0)(numbers); // 15
  * ```
  * @see {@link Array.prototype.reduce}
  * @see {@link reduceRight}
  */
export default function reduce<Next, Value>(call: (next: Next) => (value: Value, index: number, values: readonly Value[]) => Next)
   : (next: Next)
  => (values: readonly Value[]) => Next;
