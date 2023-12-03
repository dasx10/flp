import type { Identity } from "../../Logic/identity";
import type NumberExclude from "../types/NumberExclude";

type Div<Value extends number, Next extends number> = number extends Value
  ? number
  : Value extends number
    ? number
    : Value extends 0
      ? 0
      : Next extends 1
        ? Value
        : NumberExclude<number, NumberExclude<Value, 0> | NumberExclude<Next, 0>>
        ;

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
  <Value extends number>(value: Value): Div<Value, Next>;
}
