import type lt from "..";
import type lt1 from "../1";

/**
  * @summary `x < 0`
  * @description Checks if a number is less than 0
  * @function
  * @name lt0
  * @alias lessThanZero
  * @param {number} value number
  * @returns {boolean} boolean
  * @example
  * lt0(1); // false
  * lt0(0); // false
  * lt0(-1); // true
  * @see {@link lt}
  * @see {@link lt1}
  */
export default function lt0(value: 0): false;
export default function lt0<Value extends number>(value: Value): value is Exclude<Value, 0>;
