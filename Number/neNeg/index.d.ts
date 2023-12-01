import type isPos from "../isPos";
import type nePos from "../nePos";
import type isNeg from "../neNeg";

/**
  * @summary `x >= 0`
  * @function
  * @name neNeg
  * @alias ge0
  * @alias geZero
  * @alias gte0
  * @alias gteZero
  * @alias greaterThanOrEqualToZero
  * @description Checks if a number is greater than or equal to 0
  * @param {number} value number
  * @returns {boolean} boolean
  * @see {@link isPos}
  * @see {@link nePos}
  * @see {@link isNeg}
  * @example
  * neNeg(-2); // false
  * neNeg(-1); // false
  * neNeg(0); // true
  * neNeg(1); // true
  * neNeg(2); // true
  */
export default function neNeg(value: -1): false;
export default function neNeg(value: 0 | 1): true;
export default function neNeg<Value extends Number>(value: Value): boolean;
