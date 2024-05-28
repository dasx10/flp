import type ArgumentUnsigned from "../Types/ArgumentUnsigned";

/**
  * @description Check if a number is an unsigned number
  * @function
  * @name isPos
  * @alias isUnsigned
  * @alias isPositive
  * @memberof Number
  * @returns {boolean}
  * @param {number} x
  * @example
  * ```
  * isUnsigned(-1); // false
  * isUnsigned(0); // true
  * isUnsigned(1); // true
  */
export default function isPos<X extends number>(x: X): x is ArgumentUnsigned<X>;
