import type { EQ } from "../../internal/eq";

/**
  * `Logic`
  * equal 1
  * @param {number} value number
  * @returns {boolean} boolean
  * @example
  * eq1(0); // false
  * eq1(1); // true
  * eq1(2); // false
  * eq1(3); // false
  */
declare function eq1(value: 1): true;
declare function eq1<Value extends number>(value: Value): EQ<1, Value>;
export default eq1;
