import type Id from "../../../types/Id";
/**
  * @summary `z = x + y`
  * @description Increments a number. Add 1 to the number.
  * `Monoid` `Math`
  * @function
  * @name add
  * @param {number} next number
  * @example
  * var inc = add(1);
  * inc(2); // 3
  * inc(3); // 4
  */

export default function add(next: 0): <Value extends number>(value: Value) => Value;
export default function add<Next extends number>(next: Next): Id<number>
