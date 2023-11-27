import type gt from "..";
import type gt0 from "../0";

/**
  * @summary `x > 1`
  * @description Checks if a number is greater than 1
  * @param {number} value number
  * @returns {boolean} boolean
  * @function `x => x > 1`
  * @name gt1
  * @alias greaterThanOne
  * @example
  * gt1(1); // false
  * gt1(0); // false
  * gt1(-1); // false
  * gt1(2); // true
  * gt1(3); // true
  * @see {@link gt}
  * @see {@link gt0}
  */
export default function gt1(value: 0 | 1): false;
export default function gt1<Value extends number>(value: Value): value is Exclude<Value, 0 | 1>;
