import type NumberExclude from "../types/NumberExclude";

/**
  * @summary `x = 2y`
  * @description number x is double y
  * @function `x => x + x`
  * @name double
  * @alias x2
  * @param {number} value number
  * @returns {number} number
  * @example
  * double(0); // 0
  * double(1); // 2
  * double(2); // 4
  * double(3); // 6
  */
export default function double(value: 0): 0;
export default function double<Value extends number>(value: Value): NumberExclude<number, Value>
