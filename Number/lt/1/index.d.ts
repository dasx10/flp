import type lt from "..";
import type lt0 from "../0";

/**
  * @summary `x < 1`
  * @description Checks if a number is less than 1
  * @function
  * @param {number} value number
  * @alias lessThanOne
  * @returns {boolean} boolean
  * @example
  * lt1(1); // false
  * lt1(0); // true
  * lt1(-1); // true
  * lt1(2); // false
  * @see {@link lt}
  * @see {@link lt0}
  */
export default function lt1(value: 1): true;
export default function lt1<Value extends number>(value: Value): value is Exclude<Value, 1>;
