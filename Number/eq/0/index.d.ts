import type { EQ } from "../../internal/eq";

/**
  * `Logic`
  * equal 0
  * @param {number} value number
  * @returns {boolean} boolean
  * @example
  * eq0(1); // false
  * eq0(0); // true
  * eq0(2); // false
  * eq0(3); // false
  */
declare function eq0(value: 0): true;
declare function eq0<Value extends number>(value: number): EQ<Value>;
export default eq0;
