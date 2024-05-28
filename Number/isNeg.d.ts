import type ArgumentNegative from "../Types/ArgumentNegative";

/**
  * @description Check if a number is a negative number
  * @function
  * @name isNeg
  * @alias isNegative
  * @memberof Number
  * @param {number} x
  * @returns {boolean}
  * @example
  * ```javascript
  * isNeg(-1); // true
  * isNeg(0); // false
  * isNeg(1); // false
  * ```
  */
export default function isNeg<X extends number>(x: X): x is ArgumentNegative<X>;
