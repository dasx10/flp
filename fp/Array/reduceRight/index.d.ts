import type Conveyor    from "../../types/Conveyor";
import type Lambda      from "../../types/Lambda";
import type Parameter   from "../../types/Parameter";
import type IterateCall from "../types/IterateCall";

import type reduce from "./reduce";

/**
  * @function
  * @name reduceRight
  * @param {Function} call
  * @returns {Function}
  * @example
  * ```
  * var numbers = [1, 2, 3, 4, 5];
  * var sum = reduceRight(add)(0)(numbers); // 15
  *
  * var names = ["John", "Mary", "Peter", "Alice"];
  * var concat = (next) => (value) => `${value} ${next}`;
  * var concatStrings = reduceRight(concat)("");
  * var result = concatStrings(names); // "AlicePeterMaryJohn"
  *
  * @see {@link Array.prototype.reduceRight}
  * @see {@link reduce}
  */
export default function reduceRight<Next, Value>(call: (next: Next) => (value: Value, index: number, values: readonly Value[]) => Next)
   : (next: Next)
  => (values: readonly Value[]) => Next;
