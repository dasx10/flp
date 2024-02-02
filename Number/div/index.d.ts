import type { Identity } from "../../Logic/identity";
import type NumberExclude from "../types/NumberExclude";

/**
  * @function
  * @name div
  * @alias divide
  * @summary division
  * @description
  * `Monoid` `Math`
  * division
  * `z = (x / y)`
  * @param {number} value number
  * @returns {(number) => number} number
  * @example
  * div(1)(2); // 0.5
  * div(2)(1); // 2
  * div(1)(1); // 1
  * div(2)(2); // 1
  * div(0)(1); // Infinity
  */
export default function div(next: 0): (value: number) => Infinity;
export default function div(next: 1): Identity<number>;

export default function div<Next extends number>(next: Next): {
  (value: 0): 0;
  (value: 1): Next;
  (value: number): number;
}
