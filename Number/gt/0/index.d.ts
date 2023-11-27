import type gt1 from "../1";
import type gt from "..";

/**
  * @summary `x > 1`
  * @description Checks if a number is greater than 0
  * @function `x => x > 0`
  * @name gt0
  * @alias greaterThanOne
  * @param {number} value number
  * @returns {boolean} boolean
  * @example
  * gt0(1); // false
  * gt0(0); // true
  * gt0(-1); // false
  * @see {@link gt}
  * @see {@link gt1}
  */
export default function gt0(value: 0): false;
export default function gt0<Value extends number>(value: Value): value is Exclude<Value, 0>;
